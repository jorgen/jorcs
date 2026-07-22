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

// Quarter-turn moves, used to build scrambles (the solver returns half turns too).
// Solve a SCANNED cube given as the viewer's colour grid (6 faces of 3x3 colour
// names, in side order R,L,U,D,F,B). The six centres define which colour belongs
// to which face; each sticker is mapped to that face-index (0..5) and handed to
// the solver as 54 facelets. Throws with "ERROR:bad-scan" if the colours don't
// form a real, solvable cube (a misread or incompletely-scanned cube).
export async function solveScannedColors(cubeColors: string[][][]): Promise<string[]> {
  const module = await ensureSolver();
  const colorToFace = new Map<string, number>();
  for (let f = 0; f < 6; f++) {
    colorToFace.set(cubeColors[f][1][1], f);
  }
  const facelets = new Uint8Array(54);
  for (let f = 0; f < 6; f++) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const face = colorToFace.get(cubeColors[f][r][c]);
        facelets[f * 9 + r * 3 + c] = face === undefined ? 255 : face;
      }
    }
  }
  const result = module.twoPhaseSolveFacelets(facelets);
  if (result.startsWith('ERROR')) {
    throw new Error(result);
  }
  return result.length > 0 ? result.split(' ') : [];
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
