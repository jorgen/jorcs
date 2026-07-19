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

struct MoveData
{
  uint8_t corner_perm[8];
  uint8_t corner_ori_delta[8];
  uint8_t edge_perm[12];
  uint8_t edge_ori_delta[12];
};

// One table per face, for a single CLOCKWISE quarter turn (viewed from outside the
// face). corner_perm[i] / edge_perm[i] is the position the piece at i moves to; the
// orientation deltas are added to the moving piece (corners mod 3, edges mod 2).
// Derived from a coordinate model (x=Right, y=Up, z=Front); orientation is measured
// against the U/D axis, so U and D turns change no orientation and F and B turns flip
// the edges they move. Indexed by face: 0=U 1=D 2=F 3=B 4=L 5=R (i.e. Move / 2). A
// prime turn is three clockwise quarter turns, so only these six tables are needed.
inline constexpr MoveData cw_moves[6] = {
  // U
  {{3, 0, 1, 2, 4, 5, 6, 7},
   {0, 0, 0, 0, 0, 0, 0, 0},
   {3, 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11},
   {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}},
  // D
  {{0, 1, 2, 3, 5, 6, 7, 4},
   {0, 0, 0, 0, 0, 0, 0, 0},
   {0, 1, 2, 3, 4, 5, 6, 7, 11, 8, 9, 10},
   {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}},
  // F
  {{0, 2, 6, 3, 4, 1, 5, 7},
   {0, 1, 2, 0, 0, 2, 1, 0},
   {0, 1, 6, 3, 4, 2, 8, 7, 5, 9, 10, 11},
   {0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0}},
  // B
  {{4, 1, 2, 0, 7, 5, 6, 3},
   {2, 0, 0, 1, 1, 0, 0, 2},
   {4, 1, 2, 3, 10, 5, 6, 0, 8, 9, 7, 11},
   {1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0}},
  // L
  {{1, 5, 2, 3, 0, 4, 6, 7},
   {1, 2, 0, 0, 2, 1, 0, 0},
   {0, 5, 2, 3, 1, 9, 6, 7, 8, 4, 10, 11},
   {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}},
  // R
  {{0, 1, 3, 7, 4, 5, 2, 6},
   {0, 0, 1, 2, 0, 0, 2, 1},
   {0, 1, 2, 7, 4, 5, 3, 11, 8, 9, 10, 6},
   {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}},
};

inline void applyQuarterTurn(Cube &cube, const MoveData &move)
{
  uint8_t new_corner_pos[8];
  uint8_t new_corner_ori[8];
  uint8_t new_edge_pos[12];
  uint8_t new_edge_ori[12];

  for (int i = 0; i < 8; ++i)
  {
    new_corner_pos[move.corner_perm[i]] = cube.corner_pos[i];
    new_corner_ori[move.corner_perm[i]] = (cube.corner_ori[i] + move.corner_ori_delta[i]) % 3;
  }
  for (int i = 0; i < 12; ++i)
  {
    new_edge_pos[move.edge_perm[i]] = cube.edge_pos[i];
    new_edge_ori[move.edge_perm[i]] = (cube.edge_ori[i] + move.edge_ori_delta[i]) % 2;
  }

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

inline void applyMove(Cube &cube, Move move)
{
  const int face = move / 2;
  const int quarter_turns = (move % 2 == 0) ? 1 : 3; // a prime turn is three clockwise quarter turns
  for (int t = 0; t < quarter_turns; ++t)
  {
    applyQuarterTurn(cube, cw_moves[face]);
  }
}
