/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#pragma once

#include <jorcs/cube.h>

enum Move
{
  U,
  U_PRIME,
  D,
  D_PRIME,
  F,
  F_PRIME,
  B,
  B_PRIME,
  L,
  L_PRIME,
  R,
  R_PRIME
};

// Define the move data
struct MoveData
{
  uint8_t corner_perm[8];
  uint8_t corner_ori_delta[8];
  uint8_t edge_perm[12];
  uint8_t edge_ori_delta[12];
};

// Moves definitions
const MoveData moves[] = {
  // U move
  {
    {3, 0, 1, 2, 4, 5, 6, 7},
    {0, 0, 0, 0, 0, 0, 0, 0},
    {3, 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11},
    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
  },
  // U' move
  {
    {1, 2, 3, 0, 4, 5, 6, 7},
    {0, 0, 0, 0, 0, 0, 0, 0},
    {1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11},
    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
  },
  // D move
  {
    {0, 1, 2, 3, 5, 6, 7, 4},
    {0, 0, 0, 0, 0, 0, 0, 0},
    {0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 8},
    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
  },
  // D' move
  {
    {0, 1, 2, 3, 7, 4, 5, 6},
    {0, 0, 0, 0, 0, 0, 0, 0},
    {0, 1, 2, 3, 4, 5, 6, 7, 11, 8, 9, 10},
    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
  },
  // F move
  {
    {0, 5, 1, 3, 4, 6, 2, 7},
    {0, 1, 1, 0, 0, 1, 1, 0},
    {0, 1, 5, 3, 4, 8, 6, 7, 2, 9, 10, 11},
    {0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0}
  },
  // F' move
  {
    {0, 2, 6, 3, 4, 1, 5, 7},
    {0, 2, 2, 0, 0, 2, 2, 0},
    {0, 1, 8, 3, 4, 2, 6, 7, 5, 9, 10, 11},
    {0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0}
  },
  // B move
  {
    {4, 1, 2, 0, 7, 5, 6, 3},
    {2, 0, 0, 2, 2, 0, 0, 2},
    {4, 1, 2, 3, 10, 5, 6, 0, 8, 9, 7, 11},
    {1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1}
  },
  // B' move
  {
    {3, 1, 2, 7, 0, 5, 6, 4},
    {1, 0, 0, 1, 1, 0, 0, 1},
    {3, 1, 2, 10, 11, 5, 6, 0, 8, 9, 7, 4},
    {1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1}
  },
  // L move
  {
    {1, 5, 2, 3, 0, 4, 6, 7},
    {1, 1, 0, 0, 2, 2, 0, 0},
    {0, 9, 2, 3, 1, 5, 6, 7, 8, 4, 10, 11},
    {0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0}
  },
  // L' move
  {
    {4, 0, 2, 3, 5, 1, 6, 7},
    {2, 2, 0, 0, 1, 1, 0, 0},
    {0, 4, 2, 3, 9, 5, 6, 7, 8, 1, 10, 11},
    {0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0}
  },
  // R move
  {
    {0, 1, 6, 2, 4, 5, 7, 3},
    {0, 0, 1, 2, 0, 0, 2, 1},
    {0, 1, 2, 11, 4, 5, 3, 7, 8, 9, 10, 6},
    {0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1}
  },
  // R' move
  {
    {0, 1, 3, 7, 4, 5, 2, 6},
    {0, 0, 2, 1, 0, 0, 1, 2},
    {0, 1, 2, 6, 4, 5, 11, 7, 8, 9, 10, 3},
    {0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1}
  }
};

// Apply a move to the cube
void applyMove(Cube &cube, Move move)
{
  const MoveData &moveData = moves[move];

  // Temporary arrays to hold new positions and orientations
  uint8_t new_corner_pos[8];
  uint8_t new_corner_ori[8];
  uint8_t new_edge_pos[12];
  uint8_t new_edge_ori[12];

  // Update corners
  for (int i = 0; i < 8; ++i)
  {
    new_corner_pos[i] = cube.corner_pos[moveData.corner_perm[i]];
    new_corner_ori[i] = (cube.corner_ori[moveData.corner_perm[i]] + moveData.corner_ori_delta[i]) % 3;
  }

  // Update edges
  for (int i = 0; i < 12; ++i)
  {
    new_edge_pos[i] = cube.edge_pos[moveData.edge_perm[i]];
    new_edge_ori[i] = (cube.edge_ori[moveData.edge_perm[i]] + moveData.edge_ori_delta[i]) % 2;
  }

  // Write back updated positions and orientations
  for (int i = 0; i < 8; ++i)
  {
    cube.corner_pos[i] = new_corner_pos[i];
    cube.corner_ori[i] = new_corner_ori[i];
  }

  for (int i = 0; i < 12; ++i)
  {
    cube.edge_pos[i] = new_edge_pos[i];
    cube.edge_ori[i] = new_edge_ori[i];
  }
}