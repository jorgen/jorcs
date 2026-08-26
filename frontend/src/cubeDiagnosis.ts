/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

// Everything that can be wrong with a scanned cube, and how to say it.
//
// The grid the viewer holds is 6x3x3 colour STRINGS, and three different
// vocabularies write into it: the scanner and the ColorPicker use CSS names
// ('red'), a scramble or reset uses the hex FACE_COLORS ('#c41e3a'), and an
// unscanned sticker is BLANK_COLOR. Everything here works on canonical colour
// ids instead, so a grid that mixes vocabularies still reads correctly.
//
// These are the checks that concern the colour->face mapping ITSELF, and so have
// to run before the grid can be encoded as facelets at all. Everything past that
// point (are these colours a real cubie, is the cube solvable, what is wrong with
// it) lives in the C++ diagnosis, where the native tests can reach it.

import { BLANK_COLOR, FACE_COLORS } from './cubeColors';

// A sticker whose colour string isn't any colour we know.
export const UNKNOWN = -2;
// A sticker that hasn't been scanned or picked yet.
export const UNSCANNED = -1;

// Canonical colour ids, indexed the same way as FACE_COLORS -- so on a solved
// cube a sticker's colour id equals its face index.
export const COLOR_NAMES = ['red', 'orange', 'white', 'yellow', 'green', 'blue'];

// The viewer's side order (0=R 1=L 2=U 3=D 4=F 5=B), in words.
export const FACE_NAMES = ['Right', 'Left', 'Up', 'Down', 'Front', 'Back'];

const NAME_TO_ID = new Map(COLOR_NAMES.map((name, id) => [name, id]));
const HEX_TO_ID = new Map(FACE_COLORS.map((hex, id) => [hex.toLowerCase(), id]));

// A colour string -> canonical colour id, or UNSCANNED / UNKNOWN.
export function colorId(value: string): number {
  if (value === BLANK_COLOR) {
    return UNSCANNED;
  }
  const lower = value.toLowerCase();
  const byName = NAME_TO_ID.get(lower);
  if (byName !== undefined) {
    return byName;
  }
  const byHex = HEX_TO_ID.get(lower);
  return byHex === undefined ? UNKNOWN : byHex;
}

export type ColorTally = { color: string; count: number };

export type PreflightFault =
  | { kind: 'unscanned'; faces: number[]; stickers: number }
  | { kind: 'unknown-color'; stickers: number }
  | { kind: 'duplicate-centres'; color: string; faces: number[] }
  | { kind: 'color-counts'; over: ColorTally[]; under: ColorTally[] };

export type Preflight =
  | {
      ok: true;
      ids: number[][][];
      faceOfColor: number[];
      // Counts that don't add up do NOT stop us: the facelets still encode fine,
      // and the solver can usually say exactly which square is wrong -- which is a
      // far more useful thing to tell someone than "the counts are off".
      countFault?: PreflightFault;
    }
  | { ok: false; fault: PreflightFault };

// The checks that must pass before the grid means anything as a cube: every
// sticker known, the six centres a bijection onto the six colours, and nine of
// each colour. Order matters -- a half-scanned cube would otherwise report
// "two centres are the same colour", because every unscanned centre is grey.
export function preflight(cubeColors: string[][][]): Preflight {
  const ids = cubeColors.map((face) => face.map((row) => row.map(colorId)));

  const unscannedFaces: number[] = [];
  let unscanned = 0;
  let unknown = 0;
  for (let f = 0; f < 6; f++) {
    let faceUnscanned = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (ids[f][r][c] === UNSCANNED) faceUnscanned++;
        else if (ids[f][r][c] === UNKNOWN) unknown++;
      }
    }
    if (faceUnscanned > 0) {
      unscannedFaces.push(f);
      unscanned += faceUnscanned;
    }
  }
  if (unscanned > 0) {
    return { ok: false, fault: { kind: 'unscanned', faces: unscannedFaces, stickers: unscanned } };
  }
  if (unknown > 0) {
    return { ok: false, fault: { kind: 'unknown-color', stickers: unknown } };
  }

  // The six centres name the faces, so they must be six different colours. A
  // Map keyed on the centre colour would silently drop a duplicate and leave a
  // whole face mapped to the wrong index.
  const faceOfColor = new Array<number>(6).fill(-1);
  for (let f = 0; f < 6; f++) {
    const centre = ids[f][1][1];
    if (faceOfColor[centre] !== -1) {
      return {
        ok: false,
        fault: {
          kind: 'duplicate-centres',
          color: COLOR_NAMES[centre],
          faces: [faceOfColor[centre], f],
        },
      };
    }
    faceOfColor[centre] = f;
  }

  const counts = new Array<number>(6).fill(0);
  for (let f = 0; f < 6; f++) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) counts[ids[f][r][c]]++;
    }
  }
  const over: ColorTally[] = [];
  const under: ColorTally[] = [];
  for (let id = 0; id < 6; id++) {
    if (counts[id] > 9) over.push({ color: COLOR_NAMES[id], count: counts[id] });
    if (counts[id] < 9) under.push({ color: COLOR_NAMES[id], count: counts[id] });
  }
  if (over.length > 0 || under.length > 0) {
    return { ok: true, ids, faceOfColor, countFault: { kind: 'color-counts', over, under } };
  }

  return { ok: true, ids, faceOfColor };
}

// A running tally for the scanner: how many of each colour are in the grid so far,
// and whether that is already impossible. Shown while scanning so a miscount turns
// up on the face it happened on, not at the end.
export type Tally = { color: string; count: number; over: boolean };

export function colorTally(cubeColors: string[][][]): { tallies: Tally[]; scanned: number } {
  const counts = new Array<number>(6).fill(0);
  let scanned = 0;
  for (let f = 0; f < 6; f++) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const id = colorId(cubeColors[f][r][c]);
        if (id >= 0) {
          counts[id]++;
          scanned++;
        }
      }
    }
  }
  return {
    scanned,
    tallies: counts.map((count, id) => ({ color: COLOR_NAMES[id], count, over: count > 9 })),
  };
}

export type Blame = 'scan' | 'cube' | 'incomplete';

export type Explanation = { headline: string; detail: string; blame: Blame };

// --- naming the pieces -------------------------------------------------------
//
// Cubie positions in the solver's numbering (jorcs/facelet.h CORNER_POS/EDGE_POS),
// as (x, y, z) with x=right, y=up, z=front. A piece's home position is what we
// name it by, since "the white/red/green corner at top-front-right" is something
// you can find on a cube in your hands and "corner 2" is not.
const CORNER_HOME: number[][] = [
  [-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1],
  [-1, -1, -1], [-1, -1, 1], [1, -1, 1], [1, -1, -1],
];
const EDGE_HOME: number[][] = [
  [0, 1, -1], [-1, 1, 0], [0, 1, 1], [1, 1, 0],
  [-1, 0, -1], [-1, 0, 1], [1, 0, 1], [1, 0, -1],
  [0, -1, 1], [-1, -1, 0], [0, -1, -1], [1, -1, 0],
];

// Which viewer faces a cubie at (x,y,z) shows, in the viewer's side order.
function facesAt([x, y, z]: number[]): number[] {
  const faces: number[] = [];
  if (x === 1) faces.push(0);
  if (x === -1) faces.push(1);
  if (y === 1) faces.push(2);
  if (y === -1) faces.push(3);
  if (z === 1) faces.push(4);
  if (z === -1) faces.push(5);
  return faces;
}

function placeWords([x, y, z]: number[]): string {
  const parts: string[] = [];
  if (y === 1) parts.push('top');
  if (y === -1) parts.push('bottom');
  if (z === 1) parts.push('front');
  if (z === -1) parts.push('back');
  if (x === 1) parts.push('right');
  if (x === -1) parts.push('left');
  return parts.join('-');
}

export type PieceName = { colors: string[]; where: string };

// A piece described the way you'd describe it out loud: its colours (taken from the
// scan's own centres) and where on the cube it belongs.
export function describePiece(
  cubeColors: string[][][],
  kind: 'corner' | 'edge',
  piece: number,
): PieceName {
  const home = kind === 'corner' ? CORNER_HOME[piece] : EDGE_HOME[piece];
  const colors = facesAt(home).map((face) => {
    const id = colorId(cubeColors[face][1][1]);
    return id >= 0 ? COLOR_NAMES[id] : 'unknown';
  });
  return { colors, where: placeWords(home) };
}

function pieceWords(name: PieceName, kind: 'corner' | 'edge'): string {
  return `the ${name.colors.join('/')} ${kind} at ${name.where}`;
}

// --- explaining what the solver found ----------------------------------------

// Bit flags matching jorcs::diagnose::Fault.
export const FAULT_RANGE = 1 << 0;
export const FAULT_IMPOSSIBLE_CORNER = 1 << 1;
export const FAULT_IMPOSSIBLE_EDGE = 1 << 2;
export const FAULT_DUPLICATE_CORNER = 1 << 3;
export const FAULT_DUPLICATE_EDGE = 1 << 4;
export const FAULT_CORNER_TWIST = 1 << 5;
export const FAULT_EDGE_FLIP = 1 << 6;
export const FAULT_PARITY = 1 << 7;

export type AnalysisLike = {
  faults: number;
  wellFormed?: boolean;
  badSlotCount?: number;
  twistResidue?: number;
};

// What the solution offered for an unsolvable cube will leave behind.
export type Defect = { kind: 'twist' | 'flip' | 'swap'; pieces: PieceName[]; text: string };

// Rank the faults by how much they tell you, not by the order they're checked in.
// A single misread sticker breaks the colour counts too, so answering "the counts
// are off" first would bury the useful part every time.
//
// The stance on each fault comes from how many stickers would have had to be
// misread to fake it -- see the header of jorcs/diagnose.h. A twist needs three
// misreads in a cycle, so it really is the cube; a parity fault needs only two
// plausible ones, so it is probably us.
export function explainAnalysis(
  faults: number,
  analysis: AnalysisLike,
  extra: {
    countFault?: PreflightFault;
    faceRotation?: { face: number; turns: number };
    fixes?: StickerFix[];
    fixCount?: number;
  } = {},
): Explanation {
  const badSlots = analysis.badSlotCount ?? 0;
  const fixLine = explainFixes(extra.fixes ?? [], extra.fixCount ?? 0);

  // A whole face read turned round explains everything at once, and is much more
  // likely than several independent misreads. Say it before anything else.
  if (extra.faceRotation) {
    const turns = extra.faceRotation.turns;
    const amount = turns === 2 ? 'half a turn' : 'a quarter turn';
    return {
      blame: 'scan',
      headline: `The ${FACE_NAMES[extra.faceRotation.face]} face looks like it was scanned ${amount} round.`,
      detail:
        'Every square on that face is a colour the cube really has — they are just in the wrong places, all rotated together. That happens when the cube gets turned over between shots. Re-scan that one face, keeping the same face of the cube towards you as the others.',
    };
  }

  if (extra.countFault && extra.countFault.kind === 'color-counts') {
    const { over, under } = extra.countFault;
    const parts: string[] = [];
    if (over.length > 0) parts.push(`too many of ${tallies(over)}`);
    if (under.length > 0) parts.push(`too few of ${tallies(under)}`);
    return {
      blame: 'scan',
      headline: `The colours don't add up: ${list(parts)}.`,
      detail:
        fixLine ??
        'Every colour has to appear exactly nine times. Tap the squares that look wrong and pick the right colour.',
    };
  }

  if (faults & FAULT_RANGE) {
    return {
      blame: 'scan',
      headline: 'Some squares have no colour yet.',
      detail: 'Scan the missing faces, or tap the blank squares and pick their colours.',
    };
  }

  if (faults & (FAULT_IMPOSSIBLE_CORNER | FAULT_IMPOSSIBLE_EDGE)) {
    if (badSlots >= 4) {
      return {
        blame: 'scan',
        headline: `${badSlots} pieces don't make sense — the faces look mixed up.`,
        detail:
          'This many bad pieces at once usually means the faces were scanned in the wrong order, or the cube was turned over between shots, rather than any one square being misread. Reset and scan the six faces again in the order the app asks for.',
      };
    }
    return {
      blame: 'scan',
      headline:
        badSlots === 1
          ? 'One piece has a colour combination no real cubie has.'
          : `${badSlots} pieces have colour combinations no real cubie has.`,
      detail:
        fixLine ??
        'The highlighted squares are the ones to check — a single misread sticker is enough to do this, and it is always one of those. Tap the wrong one and pick the right colour.',
    };
  }

  if (faults & (FAULT_DUPLICATE_CORNER | FAULT_DUPLICATE_EDGE)) {
    return {
      blame: 'scan',
      headline: 'The same piece appears in two places.',
      detail:
        fixLine ??
        'A cube has exactly one of each piece, so one of the highlighted pairs was read wrong — which also means a third piece is missing entirely. Check those squares.',
    };
  }

  // Everything reads as a real, unique piece. What's left is the three solvability
  // invariants -- and only these can mean the cube itself is at fault.
  const twist = (faults & FAULT_CORNER_TWIST) !== 0;
  const flip = (faults & FAULT_EDGE_FLIP) !== 0;
  const parity = (faults & FAULT_PARITY) !== 0;

  if (twist && !flip && !parity) {
    return {
      blame: 'cube',
      headline: 'This cube is mis-assembled — a corner is in its slot the wrong way round.',
      detail:
        'Every colour appears nine times and every piece is real, so the scan is fine. But the corners are twisted by an amount no sequence of turns can undo: it takes three separate misreads, all cycling round one corner, to fake this, so it is almost certainly the cube. Someone has popped a corner out and pushed it back rotated. You can still get a solution — see below.',
    };
  }

  if (flip && !twist && !parity) {
    return {
      blame: 'cube',
      headline: 'An edge is flipped — either in the cube, or in what we read.',
      detail:
        'The edges are flipped by an amount turning cannot undo. That means either an edge piece has been put back in its slot the wrong way round, or we read one edge\'s two stickers the wrong way round. Check the highlighted edge against your cube; if it matches what you see, the cube is mis-assembled. A solution is available either way.',
    };
  }

  if (parity && !twist && !flip) {
    return {
      blame: 'scan',
      headline: 'Two pieces look swapped — most likely we misread two squares.',
      detail: `Two pieces are in each other's places, which turning alone can never produce. Two ordinary misreads are enough to cause this, and red and orange are the pair this scanner confuses most, so check those first. If every square really is right, then the cube itself has had two pieces swapped. Either way, a solution is available.${
        fixLine ? ` ${fixLine}` : ''
      }`,
    };
  }

  return {
    blame: 'cube',
    headline: 'This cube has been taken apart and put back together wrongly.',
    detail:
      'More than one thing is off at once — the sort of state you get from reassembling a cube by hand rather than from a misread. No sequence of turns reaches this position. A solution is still available; it will leave the broken pieces visible at the end.',
  };
}

// --- "you probably misread this square" --------------------------------------

export type ScanReading = { colors: string[][]; distances: number[][][] } | null;

// Build the 54x6 table of "how wrong would it be to call this square that colour",
// for ranking possible re-readings.
//
// Two different numberings meet here and must not be confused. Everything on this
// side speaks COLOUR IDS (COLOR_NAMES order: red, orange, white, yellow, green,
// blue). The facelet array handed to the solver holds FACE INDICES instead --
// solver.ts encodes each square as faceOfColor[colourId] -- and the C++ reads this
// table with those, as costs[facelet * 6 + faceValue]. So the columns are written
// in face-index order, not colour-id order. The two coincide only when the cube
// happens to be scanned with red on the right, orange on the left and so on; for
// any other orientation, writing colour ids here silently scrambles the ranking.
//
// A face's measurements are used only if that face still shows exactly the colours
// it showed when measured. Turning the cube permutes the colour grid but not these
// readings, so without that check a scramble or a played solution would leave every
// square paired with another square's measurements -- and the app would make
// confident, precisely wrong accusations. Stale or hand-picked faces contribute
// zeroes, which simply means "no opinion".
export function buildRelabelCosts(
  cubeColors: string[][][],
  readings: readonly ScanReading[],
  faceOfColor: readonly number[],
): Uint16Array | null {
  const costs = new Uint16Array(54 * 6);
  let anyUsable = false;
  for (let f = 0; f < 6; f++) {
    const reading = readings[f];
    if (!reading) continue;
    let matches = true;
    for (let r = 0; r < 3 && matches; r++) {
      for (let c = 0; c < 3; c++) {
        if (reading.colors[r]?.[c] !== cubeColors[f][r][c]) {
          matches = false;
          break;
        }
      }
    }
    if (!matches) continue;
    anyUsable = true;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const d = reading.distances[r]?.[c];
        if (!d) continue;
        for (let id = 0; id < 6; id++) {
          const column = faceOfColor[id];
          if (column === undefined || column < 0) continue;
          costs[(f * 9 + r * 3 + c) * 6 + column] = Math.min(65535, Math.round(d[id] ?? 0));
        }
      }
    }
  }
  return anyUsable ? costs : null;
}

export type StickerFix = {
  faceletA: number;
  colorA: number;
  faceletB: number;
  colorB: number;
};

// Where a facelet index sits, in words: "Front face, row 2, column 1" (1-based, so
// it matches counting squares by eye).
export function faceletWords(facelet: number): string {
  const face = Math.floor(facelet / 9);
  const row = Math.floor((facelet % 9) / 3);
  const col = facelet % 3;
  return `${FACE_NAMES[face]} face, row ${row + 1}, column ${col + 1}`;
}

// `colorA`/`colorB` are colour ids by the time a fix reaches here -- solver.ts
// translates them out of the solver's face-index numbering at the boundary.
function fixWords(fix: StickerFix): string {
  const a = `the square at ${faceletWords(fix.faceletA)} is ${COLOR_NAMES[fix.colorA]}`;
  if (fix.faceletB < 0) return a;
  return `${a}, and the one at ${faceletWords(fix.faceletB)} is ${COLOR_NAMES[fix.colorB]}`;
}

// How to talk about the fixes we found.
//
// The two cases are genuinely different and must not be phrased the same way. When
// the colour counts are off by one, exactly one square can possibly explain it and
// the search pins it down every time -- so say so plainly. When the counts already
// balance, dozens of pairs of re-readings would each produce *some* solvable cube,
// so the list is a shortlist to check, not an answer.
export function explainFixes(fixes: StickerFix[], total: number): string | null {
  if (fixes.length === 0) return null;
  if (total === 1) {
    return `Change one square and this becomes a real cube: ${fixWords(fixes[0])}.`;
  }
  if (fixes[0].faceletB < 0) {
    return `Any one of ${total} squares would explain it. The likeliest: ${fixWords(fixes[0])}.`;
  }
  return `${total} different pairs of squares could each explain this, so this is a shortlist rather than an answer — the first is that ${fixWords(fixes[0])}.`;
}

// Describe what the "solve it anyway" solution will leave behind, so the ending is
// promised up front rather than looking like a bug.
export function describeDefect(
  cubeColors: string[][][],
  repair: {
    twistPiece: number;
    flipPiece: number;
    swapPieceA: number;
    swapPieceB: number;
    swapIsEdges: boolean;
    twistSlot: number;
    flipSlot: number;
    swapSlotA: number;
  },
): Defect | null {
  if (repair.twistSlot >= 0) {
    const piece = describePiece(cubeColors, 'corner', repair.twistPiece);
    return {
      kind: 'twist',
      pieces: [piece],
      text: `${pieceWords(piece, 'corner')} will end up back in its own place but rotated. That is the fault in the cube: pop it out and put it back straight.`,
    };
  }
  if (repair.flipSlot >= 0) {
    const piece = describePiece(cubeColors, 'edge', repair.flipPiece);
    return {
      kind: 'flip',
      pieces: [piece],
      text: `${pieceWords(piece, 'edge')} will end up back in its own place but flipped.`,
    };
  }
  if (repair.swapSlotA >= 0) {
    const kind = repair.swapIsEdges ? 'edge' : 'corner';
    const a = describePiece(cubeColors, kind, repair.swapPieceA);
    const b = describePiece(cubeColors, kind, repair.swapPieceB);
    return {
      kind: 'swap',
      pieces: [a, b],
      text: `${pieceWords(a, kind)} and ${pieceWords(b, kind)} will end up in each other's places.`,
    };
  }
  return null;
}

function list(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function tallies(items: ColorTally[]): string {
  return list(items.map((t) => `${t.color} ${t.count}`));
}

// Turn a pre-flight fault into something worth reading. Every one of these is a
// problem with what we read, not with the cube -- so none of them blames the cube.
export function explainPreflight(fault: PreflightFault): Explanation {
  switch (fault.kind) {
    case 'unscanned': {
      const names = list(fault.faces.map((f) => FACE_NAMES[f]));
      return {
        blame: 'incomplete',
        headline: `${fault.stickers} sticker${fault.stickers === 1 ? '' : 's'} still to scan.`,
        detail: `Nothing is wrong yet — the ${names} face${fault.faces.length === 1 ? '' : 's'} ${
          fault.faces.length === 1 ? 'is' : 'are'
        } not filled in. Scan the rest, or tap the blank squares and pick their colours.`,
      };
    }
    case 'unknown-color':
      return {
        blame: 'scan',
        headline: `${fault.stickers} sticker${fault.stickers === 1 ? '' : 's'} came out an unrecognised colour.`,
        detail: 'Tap each odd-looking square and pick the colour it really is.',
      };
    case 'duplicate-centres': {
      const names = list(fault.faces.map((f) => FACE_NAMES[f]));
      return {
        blame: 'scan',
        headline: `Two centre squares both read ${fault.color}.`,
        detail: `The ${names} faces have the same centre, but a cube's six centres are always six different colours — they are what tells us which face is which. Fix whichever centre is wrong and everything else will fall into place.`,
      };
    }
    case 'color-counts': {
      const parts: string[] = [];
      if (fault.over.length > 0) parts.push(`too many of ${tallies(fault.over)}`);
      if (fault.under.length > 0) parts.push(`too few of ${tallies(fault.under)}`);
      return {
        blame: 'scan',
        headline: `The colours don't add up: ${list(parts)}.`,
        detail:
          'Every colour has to appear exactly nine times. Tap the squares that look wrong and pick the right colour.',
      };
    }
  }
}
