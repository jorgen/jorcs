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

#include <jorcs/ida.h>
#include <jorcs/move.h>
#include <jorcs/solve.h>

namespace
{
Cube scrambledBy(const std::vector<Move> &moves)
{
  Cube cube;
  for (Move move : moves)
  {
    applyMove(cube, move);
  }
  return cube;
}

bool solves(Cube cube, const std::vector<Move> &solution)
{
  for (Move move : solution)
  {
    applyMove(cube, move);
  }
  return cubesAreEqual(cube, Cube{});
}

// The corner pattern database takes a few seconds to build, so share one solver
// across the test cases.
IdaSolver &sharedIda()
{
  static IdaSolver ida;
  return ida;
}
} // namespace

TEST_CASE("IDA*: trivial and single-move cubes")
{
  IdaSolver &ida = sharedIda();

  SolveResult solved = ida.solve(Cube{});
  CHECK(solved.solved());
  CHECK(solved.moves.empty());

  for (int m = 0; m < 12; ++m)
  {
    CAPTURE(m);
    const Cube cube = scrambledBy({static_cast<Move>(m)});
    SolveResult result = ida.solve(cube);
    REQUIRE(result.solved());
    CHECK(result.moves.size() == 1);
    CHECK(solves(cube, result.moves));
  }
}

TEST_CASE("IDA*: optimal length matches the BFS oracle on random scrambles")
{
  IdaSolver &ida = sharedIda();
  BfsSolver bfs(4000000);

  std::mt19937 rng(12345u);
  std::uniform_int_distribution<int> depth_dist(4, 6);
  std::uniform_int_distribution<int> move_dist(0, 11);

  for (int trial = 0; trial < 10; ++trial)
  {
    CAPTURE(trial);
    std::vector<Move> scramble;
    const int depth = depth_dist(rng);
    for (int i = 0; i < depth; ++i)
    {
      scramble.push_back(static_cast<Move>(move_dist(rng)));
    }
    const Cube cube = scrambledBy(scramble);

    SolveResult bfs_result = bfs.solve(cube, 8);
    SolveResult ida_result = ida.solve(cube);
    REQUIRE(bfs_result.solved());
    REQUIRE(ida_result.solved());

    // Both are optimal, so they must agree on the solution length.
    CHECK(ida_result.moves.size() == bfs_result.moves.size());
    CHECK(solves(cube, ida_result.moves));
  }
}
