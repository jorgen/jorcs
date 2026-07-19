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

// The C++ solver, cross-compiled to WebAssembly with Emscripten. Loaded once and
// shared; every call resolves to the same module instance.
export function loadSolver(): Promise<JorcsModule> {
  if (!modulePromise) {
    modulePromise = createJorcsModule();
  }
  return modulePromise;
}

export interface SolverStatus {
  version: string;
  ready: boolean;
}

// A round-trip sanity check across the JS↔WASM boundary: a fresh cube is solved,
// and a single turn unsolves it — exercising the Cube class, applyMove and
// isSolved through the binding without depending on the (WIP) full move logic.
export async function solverStatus(): Promise<SolverStatus> {
  const module = await loadSolver();

  const solved: Cube = new module.Cube();
  const solvedOk = solved.isSolved();
  solved.delete();

  const turned: Cube = module.applyScramble('U');
  const turnedOk = !turned.isSolved();
  turned.delete();

  return { version: module.version(), ready: solvedOk && turnedOk };
}
