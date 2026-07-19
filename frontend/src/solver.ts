/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

import createJorcsModule, { type Cube, type JorcsModule } from './wasm/jorcs.js';

let modulePromise: Promise<JorcsModule> | null = null;
let solverPromise: Promise<JorcsModule> | null = null;

// The C++ solver compiled to WebAssembly. Loaded once and shared.
export function loadModule(): Promise<JorcsModule> {
  if (!modulePromise) {
    modulePromise = createJorcsModule();
  }
  return modulePromise;
}

async function fetchDatabase(path: string): Promise<Uint8Array> {
  const response = await fetch(path);
  if (!response.ok || !response.body) {
    throw new Error(`could not fetch ${path} (${response.status})`);
  }
  const stream = response.body.pipeThrough(new DecompressionStream('gzip'));
  const buffer = await new Response(stream).arrayBuffer();
  return new Uint8Array(buffer);
}

// Fetches the three gzip-compressed pattern databases, decompresses them in the
// browser, and hands them to the WASM solver. Runs once; the databases stay resident.
export function ensureSolver(): Promise<JorcsModule> {
  if (!solverPromise) {
    solverPromise = (async () => {
      const module = await loadModule();
      if (!module.solverReady()) {
        const base = import.meta.env.BASE_URL;
        const [corner, edgeA, edgeB] = await Promise.all([
          fetchDatabase(`${base}pdb/corner.pdb.gz`),
          fetchDatabase(`${base}pdb/edge_a.pdb.gz`),
          fetchDatabase(`${base}pdb/edge_b.pdb.gz`),
        ]);
        module.loadSolver(corner, edgeA, edgeB);
      }
      return module;
    })();
  }
  return solverPromise;
}

// Optimal solution for the cube reached by applying `scramble` to a solved cube,
// as a list of moves ("U", "R'", …). Empty if already solved.
export async function solveScramble(scramble: string): Promise<string[]> {
  const module = await ensureSolver();
  const result = module.solveScramble(scramble);
  if (result.startsWith('ERROR')) {
    throw new Error(result);
  }
  return result.length > 0 ? result.split(' ') : [];
}

export const MOVES = ['U', "U'", 'D', "D'", 'F', "F'", 'B', "B'", 'L', "L'", 'R', "R'"];

// Each solver move maps to a viewer side turn. The viewer's sides are
// 0=Right 1=Left 2=Up 3=Down 4=Front 5=Back, and (verified against the solver's
// coordinate model) a "clockwise" turn there is a clockwise turn of that face.
type Rotation = { side: number; direction: 'clockwise' | 'counterclockwise' };
const MOVE_TO_ROTATION: Record<string, Rotation> = {
  U: { side: 2, direction: 'clockwise' },
  "U'": { side: 2, direction: 'counterclockwise' },
  D: { side: 3, direction: 'clockwise' },
  "D'": { side: 3, direction: 'counterclockwise' },
  F: { side: 4, direction: 'clockwise' },
  "F'": { side: 4, direction: 'counterclockwise' },
  B: { side: 5, direction: 'clockwise' },
  "B'": { side: 5, direction: 'counterclockwise' },
  L: { side: 1, direction: 'clockwise' },
  "L'": { side: 1, direction: 'counterclockwise' },
  R: { side: 0, direction: 'clockwise' },
  "R'": { side: 0, direction: 'counterclockwise' },
};

type RotateSide = (side: number, direction: 'clockwise' | 'counterclockwise') => void;

// Plays a sequence of moves through the viewer, one at a time. The viewer's turn
// animation is 500 ms, so we wait a little longer between moves.
export async function playMoves(moves: string[], rotateSide: RotateSide, stepMs = 560): Promise<void> {
  for (const move of moves) {
    const rotation = MOVE_TO_ROTATION[move];
    if (!rotation) {
      continue;
    }
    rotateSide(rotation.side, rotation.direction);
    await new Promise((resolve) => setTimeout(resolve, stepMs));
  }
}

// A random scramble as a move string, avoiding turning the same face twice in a
// row. The default length is kept modest: the solver is OPTIMAL (exponential in
// solution depth), and a deeper scramble makes the solve take seconds-to-minutes
// on the main thread — at 13 the worst-case optimal solve stays under ~100 ms.
export function randomScramble(length = 13): string[] {
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

// A round-trip sanity check across the JS↔WASM boundary that does not need the
// pattern databases: a fresh cube is solved, a single turn unsolves it.
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
