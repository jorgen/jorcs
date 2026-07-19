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

#include <random>

#include <doctest/doctest.h>

#include <jorcs/facelet.h>
#include <jorcs/move.h>
#include <jorcs/two_phase.h>

namespace
{
using jorcs::facelet::FaceletReconstructor;
using namespace jorcs::facelet::detail;

// Render a cube to its 54 facelets by scrambling a grid in lockstep with the same
// turns -- the exact input the scanner produces, and the inverse of reconstruct().
void gridToFacelets(const Grid &g, uint8_t f[54])
{
  for (int face = 0; face < 6; ++face)
    for (int r = 0; r < 3; ++r)
      for (int c = 0; c < 3; ++c)
        f[face * 9 + r * 3 + c] = g[face][r][c];
}

FaceletReconstructor &sharedReconstructor()
{
  static FaceletReconstructor r;
  return r;
}
} // namespace

TEST_CASE("facelet: solved facelets reconstruct to the solved cube")
{
  Grid g = solvedGrid();
  uint8_t f[54];
  gridToFacelets(g, f);
  Cube cube;
  REQUIRE(sharedReconstructor().reconstruct(f, cube));
  CHECK(cubesAreEqual(cube, Cube{}));
}

TEST_CASE("facelet: reconstruction inverts the move engine over random scrambles")
{
  FaceletReconstructor &recon = sharedReconstructor();
  std::mt19937 rng(2024);
  for (int trial = 0; trial < 3000; ++trial)
  {
    Cube cube;
    Grid g = solvedGrid();
    int prev = -1;
    const int len = 1 + static_cast<int>(rng() % 40);
    for (int s = 0; s < len; ++s)
    {
      int m;
      do
      {
        m = static_cast<int>(rng() % 12);
      } while (prev >= 0 && (m / 2) == (prev / 2));
      prev = m;
      applyMove(cube, static_cast<Move>(m));
      int side;
      bool cw;
      moveToRot(m, side, cw);
      applyGridMove(g, side, cw);
    }
    uint8_t f[54];
    gridToFacelets(g, f);
    Cube reconstructed;
    REQUIRE(recon.reconstruct(f, reconstructed));
    CHECK(cubesAreEqual(reconstructed, cube));
  }
}

TEST_CASE("facelet: a reconstructed scramble is solvable")
{
  FaceletReconstructor &recon = sharedReconstructor();
  jorcs::two_phase::TwoPhaseSolver solver;
  std::mt19937 rng(99);
  for (int trial = 0; trial < 30; ++trial)
  {
    Cube cube;
    Grid g = solvedGrid();
    int prev = -1;
    for (int s = 0; s < 25; ++s)
    {
      int m;
      do
      {
        m = static_cast<int>(rng() % 12);
      } while (prev >= 0 && (m / 2) == (prev / 2));
      prev = m;
      applyMove(cube, static_cast<Move>(m));
      int side;
      bool cw;
      moveToRot(m, side, cw);
      applyGridMove(g, side, cw);
    }
    uint8_t f[54];
    gridToFacelets(g, f);
    Cube reconstructed;
    REQUIRE(recon.reconstruct(f, reconstructed));

    auto result = solver.solve(reconstructed);
    REQUIRE(result.solved);
    Cube check = reconstructed;
    for (auto move : result.moves)
      applyHtm(check, move);
    CHECK(cubesAreEqual(check, Cube{}));
  }
}

TEST_CASE("facelet: an impossible scan is rejected")
{
  FaceletReconstructor &recon = sharedReconstructor();
  Cube cube;
  // Every sticker the same colour -- no cubie has three distinct real colours.
  uint8_t allOne[54];
  for (int i = 0; i < 54; ++i)
    allOne[i] = 0;
  CHECK_FALSE(recon.reconstruct(allOne, cube));
}
