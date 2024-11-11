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
#include <cstdint>

#include "jorcs/export.h"

struct Cube
{
  uint8_t corner_pos[8];
  uint8_t corner_ori[8];
  uint8_t edge_pos[12];
  uint8_t edge_ori[12];
};

struct CubeState
{
  uint64_t corners;
  uint64_t edges;
};

inline void packCorners(const Cube &cube, uint64_t &corners)
{
  corners = 0;
  for (int i = 0; i < 8; ++i)
  {
    uint64_t pos = cube.corner_pos[i] & 0x07;
    uint64_t ori = cube.corner_ori[i] & 0x03;
    uint64_t data = (pos) | (ori << 3);
    corners |= data << (i * 8);
  }
}

inline void packEdges(const Cube &cube, uint64_t &edges)
{
  edges = 0;
  for (int i = 0; i < 12; ++i)
  {
    uint64_t pos = cube.edge_pos[i] & 0x0F;
    uint64_t ori = cube.edge_ori[i] & 0x01;
    uint64_t data = (pos) | (ori << 4);
    edges |= data << (i * 5);
  }
}

inline void packCubeState(const Cube &cube, CubeState &state)
{
  packCorners(cube, state.corners);
  packEdges(cube, state.edges);
}

inline void unpackCorners(const uint64_t corners, Cube &cube)
{
  for (int i = 0; i < 8; ++i)
  {
    uint64_t data = (corners >> (i * 8)) & 0xFF;
    cube.corner_pos[i] = data & 0x07;
    cube.corner_ori[i] = (data >> 3) & 0x03;
  }
}

inline void unpackEdges(const uint64_t edges, Cube &cube)
{
  for (int i = 0; i < 12; ++i)
  {
    uint64_t data = (edges >> (i * 5)) & 0x1F;
    cube.edge_pos[i] = data & 0x0F;
    cube.edge_ori[i] = (data >> 4) & 0x01;
  }
}

inline void unpackCubeState(const CubeState &state, Cube &cube)
{
  unpackCorners(state.corners, cube);
  unpackEdges(state.edges, cube);
}

inline bool cubesAreEqual(const Cube &cube1, const Cube &cube2)
{
  for (int i = 0; i < 8; ++i)
  {
    if (cube1.corner_pos[i] != cube2.corner_pos[i] || cube1.corner_ori[i] != cube2.corner_ori[i])
    {
      return false;
    }
  }
  for (int i = 0; i < 12; ++i)
  {
    if (cube1.edge_pos[i] != cube2.edge_pos[i] || cube1.edge_ori[i] != cube2.edge_ori[i])
    {
      return false;
    }
  }
  return true;
}

JORCS_EXPORT void empty_func();
