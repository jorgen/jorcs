/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

// Pure geometry for the viewer's colour grid: a 6x3x3 array of colour strings in
// the viewer's side order (0=R 1=L 2=U 3=D 4=F 5=B). This is the single source of
// truth for what the 3D cube shows -- each cubie is painted purely from its
// position, so setting the grid is enough to snap the cube to any state. Kept
// here (not in the viewer) so the solution player can replay moves onto the grid
// with the exact same sticker permutation the animated turns use.

// Solved-cube colours in the viewer's side order.
export const FACE_COLORS = ['#c41e3a', '#ff7f00', '#ffffff', '#ffd500', '#009e60', '#0051ba'];

export function solvedCubeColors(): string[][][] {
  return FACE_COLORS.map((color) =>
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => color)),
  );
}

// A blank, unscanned cube (every sticker grey) -- the "start from scratch" state.
export function blankCubeColors(): string[][][] {
  return Array.from({ length: 6 }, () =>
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => 'grey')),
  );
}

// The move that undoes a given move (for stepping backwards): X <-> X', X2 <-> X2.
export function invertMove(move: string): string {
  if (move.endsWith("'")) return move[0];
  if (move.endsWith('2')) return move;
  return move[0] + "'";
}

// Which viewer side a face letter turns: 0=R 1=L 2=U 3=D 4=F 5=B. A "clockwise"
// turn there is a clockwise turn of that face (verified against the solver's
// coordinate model).
const FACE_TO_SIDE: Record<string, number> = { U: 2, D: 3, F: 4, B: 5, L: 1, R: 0 };

export type Rotation = { side: number; direction: 'clockwise' | 'counterclockwise' };

// Expands a move (quarter or half turn) into the quarter-turn rotations the
// viewer animates: "U" -> one CW, "U'" -> one CCW, "U2" -> two CW.
export function moveToRotations(move: string): Rotation[] {
  const side = FACE_TO_SIDE[move[0]];
  if (side === undefined) {
    return [];
  }
  const suffix = move.slice(1);
  if (suffix === "'") {
    return [{ side, direction: 'counterclockwise' }];
  }
  if (suffix === '2') {
    return [
      { side, direction: 'clockwise' },
      { side, direction: 'clockwise' },
    ];
  }
  return [{ side, direction: 'clockwise' }];
}

// Where a sticker on `faceIndex` at cubie position (x,y,z) lands in the grid.
// Must match the viewer's own paint mapping so the grid and the 3D display agree.
export function getFaceRowCol(
  faceIndex: number,
  x: number,
  y: number,
  z: number,
): { row: number; col: number } {
  let row: number, col: number;
  switch (faceIndex) {
    case 0: // Right face (+X)
      row = 1 - y;
      col = 1 - z;
      break;
    case 1: // Left face (-X)
      row = 1 - y;
      col = z + 1;
      break;
    case 2: // Top face (+Y)
      row = z + 1;
      col = x + 1;
      break;
    case 3: // Bottom face (-Y)
      row = 2 - (z + 1);
      col = x + 1;
      break;
    case 4: // Front face (+Z)
      row = 1 - y;
      col = x + 1;
      break;
    case 5: // Back face (-Z)
      row = 1 - y;
      col = 1 - x;
      break;
    default:
      row = 0;
      col = 0;
  }
  return { row, col };
}

const SIDE_ROTATIONS: {
  [key: number]: { axis: 'x' | 'y' | 'z'; layerValue: number; angleMultiplier: number };
} = {
  0: { axis: 'x', layerValue: 1, angleMultiplier: 1 },
  1: { axis: 'x', layerValue: -1, angleMultiplier: -1 },
  2: { axis: 'y', layerValue: 1, angleMultiplier: 1 },
  3: { axis: 'y', layerValue: -1, angleMultiplier: -1 },
  4: { axis: 'z', layerValue: 1, angleMultiplier: 1 },
  5: { axis: 'z', layerValue: -1, angleMultiplier: -1 },
};

const FACE_NORMALS = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

// Rotate the turning layer's stickers exactly the way the mesh geometry rotates
// the cubies -- same axis, same signed angle -- so the colour grid can never
// diverge from where the stickers physically end up. Returns a new grid.
export function rotateColorsQuarter(
  colors: string[][][],
  sideIndex: number,
  direction: 'clockwise' | 'counterclockwise',
): string[][][] {
  const { axis, layerValue, angleMultiplier } = SIDE_ROTATIONS[sideIndex];
  // Sign of the rotation angle, matching the viewer's rotateSide geometry exactly.
  const sign = angleMultiplier * (direction === 'clockwise' ? -1 : 1);

  const normalToFace = (v: number[]) =>
    FACE_NORMALS.findIndex((n) => n[0] === v[0] && n[1] === v[1] && n[2] === v[2]);
  // A signed 90-degree rotation of an integer vector about the layer's axis.
  const rotate90 = ([x, y, z]: number[]): number[] => {
    if (axis === 'x') return sign > 0 ? [x, -z, y] : [x, z, -y];
    if (axis === 'y') return sign > 0 ? [z, y, -x] : [-z, y, x];
    return sign > 0 ? [-y, x, z] : [y, -x, z];
  };
  const onLayer = (x: number, y: number, z: number) =>
    (axis === 'x' ? x : axis === 'y' ? y : z) === layerValue;
  const facesAt = (x: number, y: number, z: number) => {
    const faces: number[] = [];
    if (x === 1) faces.push(0);
    if (x === -1) faces.push(1);
    if (y === 1) faces.push(2);
    if (y === -1) faces.push(3);
    if (z === 1) faces.push(4);
    if (z === -1) faces.push(5);
    return faces;
  };

  const next = colors.map((face) => face.map((row) => [...row]));
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (!onLayer(x, y, z)) continue;
        for (const face of facesAt(x, y, z)) {
          const { row, col } = getFaceRowCol(face, x, y, z);
          const color = colors[face][row][col];
          const [nx, ny, nz] = rotate90([x, y, z]);
          const newFace = normalToFace(rotate90(FACE_NORMALS[face]));
          const { row: nr, col: nc } = getFaceRowCol(newFace, nx, ny, nz);
          next[newFace][nr][nc] = color;
        }
      }
    }
  }
  return next;
}

// Apply a full move (quarter or half turn) to the colour grid.
export function applyMoveToColors(colors: string[][][], move: string): string[][][] {
  return moveToRotations(move).reduce(
    (grid, rotation) => rotateColorsQuarter(grid, rotation.side, rotation.direction),
    colors,
  );
}

// The colour grid reached by applying `moves` in order to `colors`. Used to snap
// the cube to any step of a solution instantly (the display follows the grid).
export function colorsAfterMoves(colors: string[][][], moves: string[]): string[][][] {
  return moves.reduce((grid, move) => applyMoveToColors(grid, move), colors);
}
