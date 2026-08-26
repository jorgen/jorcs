/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

// Reading a cube square by square throws away almost everything we know about it.
// A cube is not 54 independent colour questions: there are exactly nine stickers
// of each colour, and the six centres are six different colours. Classifying each
// square against a fixed reference uses neither fact, gets a few squares wrong,
// and leaves the reader to find them.
//
// This module labels the whole cube at once instead: a minimum-cost assignment of
// the measured squares to the six colours, capped at nine per colour. A square is
// no longer allowed to be the tenth yellow merely because yellow was its nearest
// reference -- if it is the weakest yellow of ten it becomes whatever it is next
// most like, and the cost of that swap is weighed globally.
//
// Corrections enter as pins: hard constraints that spend capacity before anything
// else is placed. That is what makes one correction worth more than one square --
// pinning evicts the weakest holder of that colour and the labelling re-settles
// around it, which can fix a square on a face scanned a minute ago.

export type Lab = { L: number; a: number; b: number };

// A measured square. `facelet` is face * 9 + row * 3 + col, the same numbering
// cubeDiagnosis and the solver use.
export type Measurement = { facelet: number; lab: Lab };

// A square the user set by hand. Pins are honoured exactly and never weighed
// against a measurement.
export type Pin = { facelet: number; color: number };

export const COLOR_COUNT = 6;
const STICKERS_PER_COLOR = 9;

// Lightness carries real information -- white against the five chromatic colours
// is largely a lightness question -- but it also carries every shadow, every glare
// and every exposure change, so it is worth less per unit than the two chroma
// axes. Weighted down rather than dropped.
//
// Note this is the opposite of the right answer for classifying a square on its
// own, where including L* actively hurts: dimming drags a reading toward the
// origin and, with nothing to push back, it lands on whichever reference is
// nearest. Under the capacity constraint that bias has nowhere to go -- the cube
// still needs nine of everything -- so what is left of L* is signal. Simulated
// error is flat between roughly 0.5 and 1.5; 0.7 sits in that basin, on the side
// that holds up better on a faded cube and under exposure drift between faces.
const LIGHTNESS_WEIGHT = 0.7;

export function stickerCost(lab: Lab, reference: Lab): number {
  const dL = lab.L - reference.L;
  const da = lab.a - reference.a;
  const db = lab.b - reference.b;
  return LIGHTNESS_WEIGHT * dL * dL + da * da + db * db;
}

const INFINITY_COST = 1e15;

/**
 * Rectangular linear assignment (Jonker-Volgenant shortest augmenting path).
 * Matches every row to a distinct column at minimum total cost.
 *
 * @param cost - row-major cost matrix, rows * cols entries.
 * @returns the column each row was assigned to.
 */
export function solveAssignment(cost: Float64Array, rows: number, cols: number): number[] {
  if (rows > cols) {
    throw new Error(`solveAssignment: ${rows} rows will not fit ${cols} columns`);
  }
  // Stated 1-indexed with a sentinel row/column 0, which is the form this
  // algorithm is normally written in; keeping that shape avoids a whole class of
  // off-by-one.
  const u = new Float64Array(rows + 1);
  const v = new Float64Array(cols + 1);
  const p = new Int32Array(cols + 1); // p[j] = row currently matched to column j
  const way = new Int32Array(cols + 1);
  const minv = new Float64Array(cols + 1);
  const used = new Uint8Array(cols + 1);

  for (let i = 1; i <= rows; i++) {
    p[0] = i;
    let j0 = 0;
    minv.fill(INFINITY_COST);
    used.fill(0);
    do {
      used[j0] = 1;
      const i0 = p[j0];
      let delta = INFINITY_COST;
      let j1 = 0;
      for (let j = 1; j <= cols; j++) {
        if (used[j]) continue;
        const cur = cost[(i0 - 1) * cols + (j - 1)] - u[i0] - v[j];
        if (cur < minv[j]) {
          minv[j] = cur;
          way[j] = j0;
        }
        if (minv[j] < delta) {
          delta = minv[j];
          j1 = j;
        }
      }
      for (let j = 0; j <= cols; j++) {
        if (used[j]) {
          u[p[j]] += delta;
          v[j] -= delta;
        } else {
          minv[j] -= delta;
        }
      }
      j0 = j1;
    } while (p[j0] !== 0);
    do {
      const j1 = way[j0];
      p[j0] = p[j1];
      j0 = j1;
    } while (j0 !== 0);
  }

  const assignment = new Array<number>(rows).fill(-1);
  for (let j = 1; j <= cols; j++) {
    if (p[j] > 0) assignment[p[j] - 1] = j - 1;
  }
  return assignment;
}

/**
 * Assigns each item one of the six colours, using no colour more often than
 * `capacity` allows. Each colour becomes as many identical columns as it has
 * capacity, which turns "at most nine yellows" into an ordinary assignment.
 *
 * @param costs - row-major, items * COLOR_COUNT: cost of calling item i colour k.
 * @returns the colour chosen per item, or null if capacity cannot hold them all.
 */
export function assignWithCapacity(
  costs: Float64Array,
  items: number,
  capacity: readonly number[],
): number[] | null {
  if (items === 0) return [];
  const columnColor: number[] = [];
  for (let color = 0; color < COLOR_COUNT; color++) {
    for (let n = 0; n < Math.max(0, capacity[color]); n++) columnColor.push(color);
  }
  if (columnColor.length < items) return null;

  const cols = columnColor.length;
  const matrix = new Float64Array(items * cols);
  for (let i = 0; i < items; i++) {
    for (let j = 0; j < cols; j++) {
      matrix[i * cols + j] = costs[i * COLOR_COUNT + columnColor[j]];
    }
  }
  return solveAssignment(matrix, items, cols).map((column) => columnColor[column]);
}

export type Relabelling = {
  // Colour id per facelet, for every square that was measured or pinned.
  colorOf: Map<number, number>;
  // Colours the user has pinned more than nine times. The pins are still all
  // honoured -- saying so is better than quietly dropping one.
  overPinned: number[];
};

const isCentre = (facelet: number) => facelet % 9 === 4;

/**
 * Labels every measured or pinned square in one go.
 *
 * Centres are settled first, in their own assignment at one per colour: they name
 * the faces, so getting a centre wrong costs more than any other square, and
 * settling them first is what stops two faces claiming the same colour.
 *
 * A partial scan needs no special case. With fewer than 54 squares in play the
 * capacity is an upper bound rather than an equality, which is exactly what "at
 * most nine yellows so far" means.
 */
export function relabelCube(
  measurements: readonly Measurement[],
  pins: readonly Pin[],
  references: readonly Lab[],
): Relabelling {
  const colorOf = new Map<number, number>();
  const capacity = new Array<number>(COLOR_COUNT).fill(STICKERS_PER_COLOR);
  const centreCapacity = new Array<number>(COLOR_COUNT).fill(1);

  const pinned = new Set<number>();
  for (const pin of pins) {
    if (pin.color < 0 || pin.color >= COLOR_COUNT) continue;
    colorOf.set(pin.facelet, pin.color);
    pinned.add(pin.facelet);
    capacity[pin.color]--;
    if (isCentre(pin.facelet)) centreCapacity[pin.color]--;
  }
  const overPinned: number[] = [];
  for (let color = 0; color < COLOR_COUNT; color++) {
    if (capacity[color] < 0) {
      overPinned.push(color);
      capacity[color] = 0;
    }
    if (centreCapacity[color] < 0) centreCapacity[color] = 0;
  }

  const free = measurements.filter((m) => !pinned.has(m.facelet));
  const buildCosts = (items: readonly Measurement[]) => {
    const costs = new Float64Array(items.length * COLOR_COUNT);
    items.forEach((item, i) => {
      for (let k = 0; k < COLOR_COUNT; k++) {
        costs[i * COLOR_COUNT + k] = stickerCost(item.lab, references[k]);
      }
    });
    return costs;
  };

  const centres = free.filter((m) => isCentre(m.facelet));
  const centreColors = assignWithCapacity(buildCosts(centres), centres.length, centreCapacity);
  if (centreColors) {
    centres.forEach((centre, i) => {
      colorOf.set(centre.facelet, centreColors[i]);
      capacity[centreColors[i]]--;
    });
  }
  for (let color = 0; color < COLOR_COUNT; color++) {
    if (capacity[color] < 0) capacity[color] = 0;
  }

  const rest = centreColors ? free.filter((m) => !isCentre(m.facelet)) : free;
  const restColors = assignWithCapacity(buildCosts(rest), rest.length, capacity);
  if (restColors) {
    rest.forEach((square, i) => colorOf.set(square.facelet, restColors[i]));
  }

  return { colorOf, overPinned };
}
