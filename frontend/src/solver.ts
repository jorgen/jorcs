/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

import createJorcsModule, { type Cube, type JorcsModule } from './wasm/jorcs.js';
import { moveToRotations } from './cubeColors';
import {
  type Defect,
  type Explanation,
  type ScanReading,
  type StickerFix,
  buildRelabelCosts,
  describeDefect,
  explainAnalysis,
  explainPreflight,
  preflight,
} from './cubeDiagnosis';

let modulePromise: Promise<JorcsModule> | null = null;
let solverPromise: Promise<JorcsModule> | null = null;

// The C++ solver compiled to WebAssembly. Loaded once and shared.
export function loadModule(): Promise<JorcsModule> {
  if (!modulePromise) {
    modulePromise = createJorcsModule();
  }
  return modulePromise;
}

// Builds the two-phase solver's tables (a few MB, a few hundred ms) inside the
// WASM module. Runs once; no external pattern-database download is needed.
export function ensureSolver(): Promise<JorcsModule> {
  if (!solverPromise) {
    solverPromise = (async () => {
      const module = await loadModule();
      if (!module.twoPhaseReady()) {
        module.initTwoPhase();
      }
      return module;
    })();
  }
  return solverPromise;
}

// A near-optimal solution (Kociemba two-phase) for the cube reached by applying
// `scramble` to a solved cube, as a list of half-turn moves ("U", "R'", "F2", …).
// Empty if already solved.
export async function solveScramble(scramble: string): Promise<string[]> {
  const module = await ensureSolver();
  const result = module.twoPhaseSolveScramble(scramble);
  if (result.startsWith('ERROR')) {
    throw new Error(result);
  }
  return result.length > 0 ? result.split(' ') : [];
}

export type SolveOutcome =
  | { kind: 'solved'; moves: string[] }
  | {
      kind: 'fault';
      explanation: Explanation;
      // Facelet indices (0..53) worth pointing at on the cube.
      highlight: number[];
      // Re-readings of one or two squares that would make this a real cube.
      fixes?: StickerFix[];
      // For an unsolvable-but-well-formed cube: a real solution, and what it will
      // leave behind once played on the real cube.
      anywayMoves?: string[];
      defect?: Defect;
    }
  | { kind: 'error'; message: string };

// Solve a SCANNED cube given as the viewer's colour grid (6 faces of 3x3 colour
// strings, in side order R,L,U,D,F,B).
//
// The grid is checked before it is encoded: every sticker known, the six centres
// six different colours, nine of each colour. Only then do the centres define
// which colour belongs to which face, and each sticker become that face-index
// (0..5) in the 54 facelets the solver takes.
export async function solveScannedColors(
  cubeColors: string[][][],
  scanReadings: readonly ScanReading[] = [],
): Promise<SolveOutcome> {
  const checked = preflight(cubeColors);
  if (!checked.ok) {
    return { kind: 'fault', explanation: explainPreflight(checked.fault), highlight: [] };
  }

  const module = await ensureSolver();
  const { ids, faceOfColor } = checked;
  const facelets = new Uint8Array(54);
  for (let f = 0; f < 6; f++) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        facelets[f * 9 + r * 3 + c] = faceOfColor[ids[f][r][c]];
      }
    }
  }

  // The camera's own confidence, but only for faces that still look the way they
  // did when measured -- see buildRelabelCosts.
  const costs = buildRelabelCosts(cubeColors, scanReadings, faceOfColor);
  const analysis = module.analyzeFacelets(facelets, costs ?? new Uint16Array(0));
  if (analysis.status === 'solved') {
    if (checked.countFault) {
      // Shouldn't happen -- a solvable cube always has nine of each -- but never
      // report success while something is demonstrably off.
      return {
        kind: 'fault',
        explanation: explainPreflight(checked.countFault),
        highlight: [],
      };
    }
    const solution = analysis.solution ?? '';
    return { kind: 'solved', moves: solution.length > 0 ? solution.split(' ') : [] };
  }
  if (analysis.status === 'solver-failed') {
    return {
      kind: 'error',
      message: 'The solver ran out of room on this cube. Please try again.',
    };
  }
  if (analysis.status === 'bad-input') {
    return { kind: 'error', message: 'The cube could not be read.' };
  }

  const anyway = analysis.repairedSolution;
  // The solver names a suggested colour by its facelet value, which is a face
  // index rather than a colour id. Translate back here, at the boundary, so
  // everything downstream keeps speaking colour ids -- otherwise the advice
  // reads out the wrong colour name for any cube not scanned red-right,
  // orange-left, white-up.
  const colorOfFace = new Array<number>(6).fill(0);
  faceOfColor.forEach((face, colorId) => {
    if (face >= 0) colorOfFace[face] = colorId;
  });
  const fixes = (analysis.suggestions ?? []).map((fix) => ({
    ...fix,
    colorA: colorOfFace[fix.colorA] ?? fix.colorA,
    colorB: fix.faceletB >= 0 ? (colorOfFace[fix.colorB] ?? fix.colorB) : fix.colorB,
  }));
  // Point at the squares a fix would change, when we have one -- more useful than
  // the whole implicated piece.
  const fixHighlight = fixes.length > 0
    ? [fixes[0].faceletA, ...(fixes[0].faceletB >= 0 ? [fixes[0].faceletB] : [])]
    : [];
  return {
    kind: 'fault',
    explanation: explainAnalysis(analysis.faults, analysis, {
      countFault: checked.countFault,
      faceRotation: analysis.faceRotation,
      fixes,
      fixCount: analysis.suggestionCount ?? fixes.length,
    }),
    fixes,
    highlight:
      analysis.suggestionCount === 1 && fixHighlight.length > 0
        ? fixHighlight
        : (analysis.highlightFacelets ?? []),
    anywayMoves: anyway && anyway.length > 0 ? anyway.split(' ') : anyway === '' ? [] : undefined,
    defect: analysis.repair ? (describeDefect(cubeColors, analysis.repair) ?? undefined) : undefined,
  };
}

export const MOVES = ['U', "U'", 'D', "D'", 'F', "F'", 'B', "B'", 'L', "L'", 'R', "R'"];

type RotateSide = (side: number, direction: 'clockwise' | 'counterclockwise') => void;

// Plays a sequence of moves through the viewer, one quarter turn at a time. The
// viewer's turn animation is 300 ms, so we wait a little longer between turns.
export async function playMoves(moves: string[], rotateSide: RotateSide, stepMs = 360): Promise<void> {
  for (const move of moves) {
    for (const rotation of moveToRotations(move)) {
      rotateSide(rotation.side, rotation.direction);
      await new Promise((resolve) => setTimeout(resolve, stepMs));
    }
  }
}

// A random scramble as a move string, avoiding turning the same face twice in a
// row. The two-phase solver handles any depth in milliseconds, so this is a full
// 20-move scramble.
export function randomScramble(length = 20): string[] {
  const moves: string[] = [];
  let previousFace = '';
  for (let i = 0; i < length; i++) {
    let move = MOVES[Math.floor(Math.random() * MOVES.length)];
    while (move[0] === previousFace) {
      move = MOVES[Math.floor(Math.random() * MOVES.length)];
    }
    previousFace = move[0];
    moves.push(move);
  }
  return moves;
}

export interface SolverStatus {
  version: string;
  ready: boolean;
}

// A round-trip sanity check across the JS↔WASM boundary: a fresh cube is solved,
// a single turn unsolves it.
export async function solverStatus(): Promise<SolverStatus> {
  const module = await loadModule();
  const solved: Cube = new module.Cube();
  const solvedOk = solved.isSolved();
  solved.delete();
  const turned: Cube = module.applyScramble('U');
  const turnedOk = !turned.isSolved();
  turned.delete();
  return { version: module.version(), ready: solvedOk && turnedOk };
}
