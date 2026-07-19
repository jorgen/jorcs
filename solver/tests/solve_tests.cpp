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

#include <vector>

#include <doctest/doctest.h>

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
} // namespace

TEST_CASE("BFS: an already-solved cube needs no moves")
{
  BfsSolver solver;
  SolveResult result = solver.solve(Cube{});
  CHECK(result.solved());
  CHECK(result.moves.empty());
}

TEST_CASE("BFS: every single move is undone in exactly one move")
{
  BfsSolver solver;
  for (int m = 0; m < 12; ++m)
  {
    CAPTURE(m);
    const Cube cube = scrambledBy({static_cast<Move>(m)});
    SolveResult result = solver.solve(cube);
    REQUIRE(result.solved());
    CHECK(result.moves.size() == 1);
    CHECK(solves(cube, result.moves));
  }
}

TEST_CASE("BFS: a two-move scramble is solved optimally in two moves")
{
  BfsSolver solver;
  const Cube cube = scrambledBy({U, R});
  SolveResult result = solver.solve(cube);
  REQUIRE(result.solved());
  CHECK(result.moves.size() == 2);
  CHECK(solves(cube, result.moves));
}

TEST_CASE("BFS: solutions solve the cube and are no longer than the scramble")
{
  BfsSolver solver;
  const std::vector<std::vector<Move>> scrambles = {
    {U, R, F},
    {R, U, R_PRIME, U_PRIME},
    {F, R, U, R_PRIME, U_PRIME, F_PRIME},
    {L, U, B, D_PRIME, R_PRIME, F},
  };

  for (const std::vector<Move> &scramble : scrambles)
  {
    const Cube cube = scrambledBy(scramble);
    SolveResult result = solver.solve(cube, 12);
    REQUIRE(result.solved());
    // The reversed scramble is always a valid solution, so the optimal one cannot be
    // longer than the scramble.
    CHECK(result.moves.size() <= scramble.size());
    CHECK(solves(cube, result.moves));
  }
}

TEST_CASE("BFS: a redundant scramble collapses to a shorter optimal solution")
{
  BfsSolver solver;
  // U U' is the identity and R R R == R', so this five-move scramble is really just
  // R', which the optimal solver should undo in a single move (R).
  const Cube cube = scrambledBy({U, U_PRIME, R, R, R});
  SolveResult result = solver.solve(cube);
  REQUIRE(result.solved());
  CHECK(result.moves.size() == 1);
  CHECK(solves(cube, result.moves));
}
