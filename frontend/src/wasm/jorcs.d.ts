/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

// Hand-written types for the Emscripten-built solver module. The implementation
// (jorcs.js) is generated from solver/wasm/bindings.cpp and is git-ignored.

export type Move = { readonly value: number };

export interface MoveEnum {
  readonly U: Move;
  readonly Uprime: Move;
  readonly D: Move;
  readonly Dprime: Move;
  readonly F: Move;
  readonly Fprime: Move;
  readonly B: Move;
  readonly Bprime: Move;
  readonly L: Move;
  readonly Lprime: Move;
  readonly R: Move;
  readonly Rprime: Move;
}

export interface VectorInt {
  size(): number;
  get(index: number): number;
  delete(): void;
}

export interface Cube {
  apply(move: Move): void;
  isSolved(): boolean;
  cornerPos(): VectorInt;
  cornerOri(): VectorInt;
  edgePos(): VectorInt;
  edgeOri(): VectorInt;
  delete(): void;
}

export interface CubeConstructor {
  new (): Cube;
}

export interface JorcsModule {
  Move: MoveEnum;
  Cube: CubeConstructor;
  applyScramble(sequence: string): Cube;
  version(): string;

  // Optimal solver (Korf/IDA*). Loads the prebuilt (decompressed) pattern
  // databases; slow for deep cubes, so used only for shallow demos.
  loadSolver(corner: Uint8Array, edgeA: Uint8Array, edgeB: Uint8Array): void;
  solverReady(): boolean;
  // Returns a space-separated optimal solution, or "ERROR:..." on failure.
  solveScramble(scramble: string): string;
  solveState(cornerPos: Uint8Array, cornerOri: Uint8Array, edgePos: Uint8Array, edgeOri: Uint8Array): string;

  // Kociemba two-phase solver: near-optimal (~20-24 half turns), solves ANY cube
  // in milliseconds with tables built in-place (no pattern-database download).
  initTwoPhase(): void;
  twoPhaseReady(): boolean;
  // Half-turn-metric solution (e.g. "U R2 F' D2 ..."), or "ERROR:..." on failure.
  twoPhaseSolveScramble(scramble: string): string;
  twoPhaseSolveState(cornerPos: Uint8Array, cornerOri: Uint8Array, edgePos: Uint8Array, edgeOri: Uint8Array): string;
}

declare const createJorcsModule: (options?: Record<string, unknown>) => Promise<JorcsModule>;
export default createJorcsModule;
