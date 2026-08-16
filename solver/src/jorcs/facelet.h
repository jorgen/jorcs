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

#include <jorcs/move.h>

#include <array>
#include <cstdint>
#include <random>

// Reconstruct the cubie model (the Cube of move.h) from a scanned facelet grid.
//
// A facelet index is face*9 + row*3 + col, with faces in the viewer's side order
// 0=R 1=L 2=U 3=D 4=F 5=B, and each value is the face-index (0..5) of that
// sticker's colour -- so a solved cube has facelet[f*9 + ...] == f.
//
// Rather than derive the corner/edge orientation numbering by hand (error-prone,
// and it must match move.h exactly), the reconstructor LEARNS the map
// "the colours seen at a cubie slot -> (piece, orientation)" empirically: it
// scrambles a cube with the verified move engine and, in lockstep, a facelet grid
// with the same geometric turn the 3-D viewer uses, then records the correspondence.
namespace jorcs::facelet
{

namespace detail
{

// The viewer's display mapping: cubie position (x,y,z) + outward face -> (row,col).
inline void faceRowCol(int f, int x, int y, int z, int &row, int &col)
{
  switch (f)
  {
  case 0: row = 1 - y; col = 1 - z; break;
  case 1: row = 1 - y; col = z + 1; break;
  case 2: row = z + 1; col = x + 1; break;
  case 3: row = 2 - (z + 1); col = x + 1; break;
  case 4: row = 1 - y; col = x + 1; break;
  default: row = 1 - y; col = 1 - x; break; // 5
  }
}

inline int faceletIndex(int f, int x, int y, int z)
{
  int row, col;
  faceRowCol(f, x, y, z, row, col);
  return f * 9 + row * 3 + col;
}

// Outward faces of a cubie at (x,y,z), in ascending face order.
inline int outwardFaces(int x, int y, int z, int out[3])
{
  int n = 0;
  if (x == 1) out[n++] = 0;
  if (x == -1) out[n++] = 1;
  if (y == 1) out[n++] = 2;
  if (y == -1) out[n++] = 3;
  if (z == 1) out[n++] = 4;
  if (z == -1) out[n++] = 5;
  return n;
}

struct Vec3 { int x, y, z; };

inline Vec3 faceNormal(int f)
{
  switch (f)
  {
  case 0: return {1, 0, 0};
  case 1: return {-1, 0, 0};
  case 2: return {0, 1, 0};
  case 3: return {0, -1, 0};
  case 4: return {0, 0, 1};
  default: return {0, 0, -1}; // 5
  }
}

inline int normalToFace(Vec3 v)
{
  for (int f = 0; f < 6; ++f)
  {
    const Vec3 n = faceNormal(f);
    if (n.x == v.x && n.y == v.y && n.z == v.z)
      return f;
  }
  return -1;
}

// A signed 90-degree rotation of an integer vector about an axis (0=x,1=y,2=z),
// matching THREE.js applyAxisAngle (and the viewer's rotate90) for the same sign.
inline Vec3 rot90(Vec3 v, int axis, int sign)
{
  if (axis == 0) return sign > 0 ? Vec3{v.x, -v.z, v.y} : Vec3{v.x, v.z, -v.y};
  if (axis == 1) return sign > 0 ? Vec3{v.z, v.y, -v.x} : Vec3{-v.z, v.y, v.x};
  return sign > 0 ? Vec3{-v.y, v.x, v.z} : Vec3{v.y, -v.x, v.z};
}

struct SideRot { int axis; int layerValue; int angleMultiplier; };

inline SideRot sideRot(int side)
{
  switch (side)
  {
  case 0: return {0, 1, 1};
  case 1: return {0, -1, -1};
  case 2: return {1, 1, 1};
  case 3: return {1, -1, -1};
  case 4: return {2, 1, 1};
  default: return {2, -1, -1}; // 5
  }
}

inline int axisComp(int axis, int x, int y, int z) { return axis == 0 ? x : axis == 1 ? y : z; }

using Grid = std::array<std::array<std::array<uint8_t, 3>, 3>, 6>;

inline Grid solvedGrid()
{
  Grid g{};
  for (int f = 0; f < 6; ++f)
    for (int r = 0; r < 3; ++r)
      for (int c = 0; c < 3; ++c)
        g[f][r][c] = static_cast<uint8_t>(f);
  return g;
}

// Turn a face the same geometric way the 3-D viewer does.
inline void applyGridMove(Grid &grid, int side, bool clockwise)
{
  const SideRot sr = sideRot(side);
  const int sign = sr.angleMultiplier * (clockwise ? -1 : 1);
  Grid next = grid;
  for (int x = -1; x <= 1; ++x)
    for (int y = -1; y <= 1; ++y)
      for (int z = -1; z <= 1; ++z)
      {
        if (axisComp(sr.axis, x, y, z) != sr.layerValue)
          continue;
        int faces[3];
        const int nf = outwardFaces(x, y, z, faces);
        for (int k = 0; k < nf; ++k)
        {
          const int f = faces[k];
          int r, c;
          faceRowCol(f, x, y, z, r, c);
          const uint8_t color = grid[f][r][c];
          const Vec3 np = rot90({x, y, z}, sr.axis, sign);
          const int newFace = normalToFace(rot90(faceNormal(f), sr.axis, sign));
          int nr, nc;
          faceRowCol(newFace, np.x, np.y, np.z, nr, nc);
          next[newFace][nr][nc] = color;
        }
      }
  grid = next;
}

// A move (move.h Move, 0..11) as a viewer (side, clockwise) turn.
inline void moveToRot(int move, int &side, bool &clockwise)
{
  static const int sides[6] = {2, 3, 4, 5, 1, 0}; // face U,D,F,B,L,R (= move/2) -> side
  side = sides[move / 2];
  clockwise = (move % 2) == 0;
}

// Cubie positions in the move.h numbering.
inline constexpr int CORNER_POS[8][3] = {
  {-1, 1, -1}, {-1, 1, 1}, {1, 1, 1}, {1, 1, -1}, {-1, -1, -1}, {-1, -1, 1}, {1, -1, 1}, {1, -1, -1}};
inline constexpr int EDGE_POS[12][3] = {
  {0, 1, -1}, {-1, 1, 0}, {0, 1, 1}, {1, 1, 0}, {-1, 0, -1}, {-1, 0, 1},
  {1, 0, 1}, {1, 0, -1}, {0, -1, 1}, {-1, -1, 0}, {0, -1, -1}, {1, -1, 0}};

} // namespace detail

// Which slots of a scan didn't read as a real cubie. Bitmasks rather than lists so
// this stays allocation-free (the solver builds with -fno-exceptions).
struct SlotStatus
{
  uint32_t bad_corners = 0; // bit i: corner slot i's colours are not a real corner
  uint32_t bad_edges = 0;   // bit i: edge slot i's colours are not a real edge
  bool range_error = false; // a facelet value outside 0..5

  bool ok() const { return !range_error && bad_corners == 0 && bad_edges == 0; }
};

class FaceletReconstructor
{
public:
  FaceletReconstructor() { build(); }

  // Reconstruct the cube from 54 facelets (face-indices, layout described above).
  // Returns false if any cubie's colours don't form a real cubie (impossible scan);
  // note this does NOT check global solvability -- pair it with isValidCube.
  bool reconstruct(const uint8_t facelets[54], Cube &cube) const
  {
    return reconstructDetailed(facelets, cube).ok();
  }

  // As reconstruct(), but says WHICH slots failed instead of stopping at the first.
  // Slots that didn't read leave 0xFF in the cube, so a caller that ignores the
  // status can't mistake a hole for slot 0.
  SlotStatus reconstructDetailed(const uint8_t facelets[54], Cube &cube) const
  {
    SlotStatus status;
    for (int i = 0; i < 8; ++i)
    {
      const int key = cornerKey(facelets, i);
      if (key < 0)
        status.range_error = true;
      const int val = key < 0 ? -1 : corner_lut_[i][key];
      if (val < 0)
      {
        status.bad_corners |= 1u << i;
        cube.corner_pos[i] = 0xFF;
        cube.corner_ori[i] = 0xFF;
        continue;
      }
      cube.corner_pos[i] = static_cast<uint8_t>(val / 3);
      cube.corner_ori[i] = static_cast<uint8_t>(val % 3);
    }
    for (int i = 0; i < 12; ++i)
    {
      const int key = edgeKey(facelets, i);
      if (key < 0)
        status.range_error = true;
      const int val = key < 0 ? -1 : edge_lut_[i][key];
      if (val < 0)
      {
        status.bad_edges |= 1u << i;
        cube.edge_pos[i] = 0xFF;
        cube.edge_ori[i] = 0xFF;
        continue;
      }
      cube.edge_pos[i] = static_cast<uint8_t>(val / 2);
      cube.edge_ori[i] = static_cast<uint8_t>(val % 2);
    }
    return status;
  }

  // The facelet indices of the stickers making up a slot, so a caller can point at
  // the squares a bad piece is made of (corners in ascending face order).
  const int *cornerStickers(int slot) const { return corner_st_[slot]; }
  const int *edgeStickers(int slot) const { return edge_st_[slot]; }

  // One slot's piece*3+ori / piece*2+ori, or -1 if those colours aren't a real
  // cubie. Re-keys a single slot, so a search over changed stickers doesn't have
  // to redo all twenty.
  int cornerAt(const uint8_t facelets[54], int slot) const
  {
    const int key = cornerKey(facelets, slot);
    return key < 0 ? -1 : corner_lut_[slot][key];
  }
  int edgeAt(const uint8_t facelets[54], int slot) const
  {
    const int key = edgeKey(facelets, slot);
    return key < 0 ? -1 : edge_lut_[slot][key];
  }

  // build() fills the tables by random scrambling, with no proof it covered every
  // case. A gap would make a CORRECT scan report an impossible cubie -- i.e. blame
  // the user for our bug -- so the coverage is worth asserting: every corner slot
  // must key all 8 pieces x 3 orientations, every edge slot all 12 x 2.
  bool lutsComplete() const
  {
    for (const auto &slot : corner_lut_)
    {
      int filled = 0;
      for (const int v : slot)
        filled += v >= 0;
      if (filled != 24)
        return false;
    }
    for (const auto &slot : edge_lut_)
    {
      int filled = 0;
      for (const int v : slot)
        filled += v >= 0;
      if (filled != 24)
        return false;
    }
    return true;
  }

private:
  int corner_st_[8][3];   // sticker facelet indices per corner slot (ascending face)
  int edge_st_[12][2];    // sticker facelet indices per edge slot
  int corner_lut_[8][216]; // key a*36+b*6+c -> piece*3+ori, or -1
  int edge_lut_[12][36];   // key a*6+b       -> piece*2+ori, or -1

  // -1 for any out-of-range facelet. The guard lives here, with the tables it
  // indexes: an unscanned sticker arrives as 255, and 255*36 is far outside the
  // 216-entry row.
  int cornerKey(const uint8_t f[54], int i) const
  {
    const int a = f[corner_st_[i][0]], b = f[corner_st_[i][1]], c = f[corner_st_[i][2]];
    if (a > 5 || b > 5 || c > 5)
      return -1;
    return a * 36 + b * 6 + c;
  }
  int edgeKey(const uint8_t f[54], int i) const
  {
    const int a = f[edge_st_[i][0]], b = f[edge_st_[i][1]];
    if (a > 5 || b > 5)
      return -1;
    return a * 6 + b;
  }

  static void gridToFacelets(const detail::Grid &g, uint8_t f[54])
  {
    for (int face = 0; face < 6; ++face)
      for (int r = 0; r < 3; ++r)
        for (int c = 0; c < 3; ++c)
          f[face * 9 + r * 3 + c] = g[face][r][c];
  }

  void build()
  {
    using namespace detail;
    for (int i = 0; i < 8; ++i)
    {
      int fs[3];
      outwardFaces(CORNER_POS[i][0], CORNER_POS[i][1], CORNER_POS[i][2], fs);
      for (int k = 0; k < 3; ++k)
        corner_st_[i][k] = faceletIndex(fs[k], CORNER_POS[i][0], CORNER_POS[i][1], CORNER_POS[i][2]);
    }
    for (int i = 0; i < 12; ++i)
    {
      int fs[3];
      outwardFaces(EDGE_POS[i][0], EDGE_POS[i][1], EDGE_POS[i][2], fs);
      for (int k = 0; k < 2; ++k)
        edge_st_[i][k] = faceletIndex(fs[k], EDGE_POS[i][0], EDGE_POS[i][1], EDGE_POS[i][2]);
    }
    for (auto &slot : corner_lut_)
      for (int &v : slot)
        v = -1;
    for (auto &slot : edge_lut_)
      for (int &v : slot)
        v = -1;

    // Learn colour-tuple -> (piece, orientation) from the verified move engine,
    // scrambling a Cube and a facelet grid in lockstep with the same turns.
    std::mt19937 rng(123456);
    for (int seq = 0; seq < 4000; ++seq)
    {
      Cube c;
      Grid g = solvedGrid();
      int prev = -1;
      const int len = 1 + static_cast<int>(rng() % 30);
      for (int s = 0; s < len; ++s)
      {
        int m;
        do
        {
          m = static_cast<int>(rng() % 12);
        } while (prev >= 0 && (m / 2) == (prev / 2));
        prev = m;
        applyMove(c, static_cast<Move>(m));
        int side;
        bool cw;
        moveToRot(m, side, cw);
        applyGridMove(g, side, cw);
      }
      uint8_t f[54];
      gridToFacelets(g, f);
      for (int i = 0; i < 8; ++i)
        corner_lut_[i][cornerKey(f, i)] = c.corner_pos[i] * 3 + c.corner_ori[i];
      for (int i = 0; i < 12; ++i)
        edge_lut_[i][edgeKey(f, i)] = c.edge_pos[i] * 2 + c.edge_ori[i];
    }
  }
};

} // namespace jorcs::facelet
