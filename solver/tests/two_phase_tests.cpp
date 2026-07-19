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
#include <vector>

#include <doctest/doctest.h>

#include <jorcs/move.h>
#include <jorcs/two_phase.h>

namespace
{
using jorcs::two_phase::HtmMove;
using jorcs::two_phase::TwoPhaseSolver;

bool solves(Cube cube, const std::vector<HtmMove> &solution)
{
  for (HtmMove move : solution)
    applyHtm(cube, move);
  return cubesAreEqual(cube, Cube{});
}

// A random scramble of `n` half-turn moves, never turning the same face twice
// in a row.
Cube randomScramble(std::mt19937 &rng, int n)
{
  Cube cube;
  int prev = -1;
  for (int i = 0; i < n; ++i)
  {
    int face;
    do
    {
      face = rng() % 6;
    } while (face == prev);
    HtmMove move{static_cast<uint8_t>(face), static_cast<uint8_t>(1 + rng() % 3)};
    applyHtm(cube, move);
    prev = face;
  }
  return cube;
}

TwoPhaseSolver &sharedSolver()
{
  static TwoPhaseSolver solver;
  return solver;
}
} // namespace

TEST_CASE("two-phase: the solved cube needs no moves")
{
  auto result = sharedSolver().solve(Cube{});
  REQUIRE(result.solved);
  CHECK(result.moves.empty());
}

TEST_CASE("two-phase: single quarter turns are solved in one move")
{
  TwoPhaseSolver &solver = sharedSolver();
  for (int face = 0; face < 6; ++face)
  {
    Cube cube;
    applyHtm(cube, HtmMove{static_cast<uint8_t>(face), 1});
    auto result = solver.solve(cube);
    REQUIRE(result.solved);
    CHECK(result.moves.size() == 1);
    CHECK(solves(cube, result.moves));
  }
}

TEST_CASE("two-phase: solutions actually solve random scrambles")
{
  TwoPhaseSolver &solver = sharedSolver();
  std::mt19937 rng(20240719);
  for (int depth : {2, 6, 12, 18, 25, 40})
  {
    for (int trial = 0; trial < 12; ++trial)
    {
      Cube cube = randomScramble(rng, depth);
      auto result = solver.solve(cube);
      REQUIRE(result.solved);
      CHECK(solves(cube, result.moves));
      // Two-phase is near-optimal; any cube is within God's number (20 HTM),
      // and the two-phase upper bound is well under 30.
      CHECK(result.moves.size() <= 25u);
    }
  }
}

TEST_CASE("two-phase: superflip is solved correctly")
{
  Cube superflip; // every edge flipped in place, corners solved
  for (int i = 0; i < 12; ++i)
    superflip.edge_ori[i] = 1;

  auto result = sharedSolver().solve(superflip);
  REQUIRE(result.solved);
  CHECK(solves(superflip, result.moves));
  CHECK(result.moves.size() <= 24u);
}

TEST_CASE("two-phase: deep scrambles stay near-optimal")
{
  TwoPhaseSolver &solver = sharedSolver();
  std::mt19937 rng(7);
  for (int trial = 0; trial < 20; ++trial)
  {
    Cube cube = randomScramble(rng, 60);
    auto result = solver.solve(cube);
    REQUIRE(result.solved);
    CHECK(solves(cube, result.moves));
    CHECK(result.moves.size() <= 23u);
  }
}
