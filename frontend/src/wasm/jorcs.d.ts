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
  // Solve a scanned cube given as 54 facelets (face-index 0..5 per sticker; layout
  // face*9+row*3+col, faces 0=R 1=L 2=U 3=D 4=F 5=B). "ERROR:bad-scan" if misread.
  twoPhaseSolveFacelets(facelets: Uint8Array): string;

  // Build just the facelet reconstructor, without the solver's tables -- enough to
  // diagnose a scan.
  ensureReconstructor(): void;
  // Solve a scanned cube, or explain precisely why it can't be solved.
  analyzeFacelets(facelets: Uint8Array, costs: Uint16Array): Analysis;
}

// Bit flags matching jorcs::diagnose::Fault.
export const enum Fault {
  Range = 1 << 0,
  ImpossibleCorner = 1 << 1,
  ImpossibleEdge = 1 << 2,
  DuplicateCorner = 1 << 3,
  DuplicateEdge = 1 << 4,
  CornerTwist = 1 << 5,
  EdgeFlip = 1 << 6,
  Parity = 1 << 7,
}

// How to put a well-formed but unsolvable cube back on the solvable coset. Slots
// say where to act; pieces say which cubies a solution will leave visibly wrong.
export interface Repair {
  twistSlot: number;
  twistAmount: number;
  twistPiece: number;
  flipSlot: number;
  flipPiece: number;
  swapSlotA: number;
  swapSlotB: number;
  swapPieceA: number;
  swapPieceB: number;
  swapIsEdges: boolean;
}

export interface Analysis {
  status: 'solved' | 'unsolvable' | 'solver-failed' | 'bad-input';
  faults: number;
  piecesReadable?: boolean;
  wellFormed?: boolean;
  solvable?: boolean;
  badCornerSlots?: number;
  badEdgeSlots?: number;
  badSlotCount?: number;
  twistResidue?: number;
  flipResidue?: number;
  parityMismatch?: boolean;
  // Facelet indices (0..53) worth pointing at on screen.
  highlightFacelets?: number[];
  // Present when status is 'solved'.
  solution?: string;
  // Present when the cube is well-formed but unsolvable.
  repair?: Repair;
  // A solution to the REPAIRED cube: play it on the real one and everything comes
  // home except the piece named by `repair`.
  repairedSolution?: string;
  // A whole face that appears to have been scanned turned round.
  faceRotation?: { face: number; turns: number };
  // Re-readings of one or two squares that would make this a real cube, cheapest
  // first. `suggestionCount` is how many there were altogether -- one is an answer,
  // several dozen is only a shortlist.
  suggestions?: { faceletA: number; colorA: number; faceletB: number; colorB: number }[];
  suggestionCount?: number;
}

declare const createJorcsModule: (options?: Record<string, unknown>) => Promise<JorcsModule>;
export default createJorcsModule;
