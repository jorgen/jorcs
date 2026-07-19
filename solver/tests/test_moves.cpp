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

#include <doctest/doctest.h>
#include <jorcs/move.h>

Cube createSolvedCube() {
  Cube cube;
  for (int i = 0; i < 8; ++i) {
    cube.corner_pos[i] = i;
    cube.corner_ori[i] = 0;
  }
  for (int i = 0; i < 12; ++i) {
    cube.edge_pos[i] = i;
    cube.edge_ori[i] = 0;
  }
  return cube;
}

TEST_CASE("Applying a move and its inverse returns to the original state")
{
  Cube cube = createSolvedCube();
  Cube original_cube = cube;

  // Test each move and its inverse
  for (int move = U; move <= R; move += 2)
  {
    Cube test_cube = cube;
    applyMove(test_cube, static_cast<Move>(move));
    applyMove(test_cube, static_cast<Move>(move + 1)); // Apply inverse move

    CHECK(cubesAreEqual(original_cube, test_cube));
  }
}

TEST_CASE("Applying the same move four times returns to the original state")
{
  Cube cube = createSolvedCube();
  Cube original_cube = cube;

  // Quarter-turn moves should return to the original state after four applications
  for (int move = U; move <= R_PRIME; ++move)
  {
    Cube test_cube = cube;
    for (int i = 0; i < 4; ++i)
    {
      applyMove(test_cube, static_cast<Move>(move));
    }
    CHECK(cubesAreEqual(original_cube, test_cube));
  }
}

TEST_CASE("Two interacting (edge-sharing) faces have cycle order 105")
{
  // Rotating one face and then an adjacent face, repeated, returns the cube to the
  // solved state after exactly 105 rounds (the order of e.g. R·U) and never in
  // between. This holds for every pair of faces that share an edge, i.e. every pair
  // that is not opposite. Opposite pairs (U/D, F/B, L/R) are excluded.
  struct Pair
  {
    Move a;
    Move b;
    const char *name;
  };
  const Pair pairs[] = {
    {U, F, "U F"}, {U, B, "U B"}, {U, L, "U L"}, {U, R, "U R"},
    {D, F, "D F"}, {D, B, "D B"}, {D, L, "D L"}, {D, R, "D R"},
    {F, L, "F L"}, {F, R, "F R"}, {B, L, "B L"}, {B, R, "B R"},
  };

  const Cube solved = createSolvedCube();
  for (const Pair &pair : pairs)
  {
    CAPTURE(pair.name);
    Cube cube = createSolvedCube();
    bool solved_in_between = false;
    for (int i = 1; i <= 105; ++i)
    {
      applyMove(cube, pair.a);
      applyMove(cube, pair.b);
      const bool is_solved = cubesAreEqual(cube, solved);
      if (i < 105 && is_solved)
      {
        solved_in_between = true;
      }
      if (i == 105)
      {
        CHECK(is_solved);
      }
    }
    CHECK_FALSE(solved_in_between);
  }
}

TEST_CASE("Testing commutator [R, U]")
{
  Cube cube = createSolvedCube();

  Cube test_cube1 = cube;
  Cube test_cube2 = cube;

  // Apply R U R' U'
  applyMove(test_cube1, R);
  applyMove(test_cube1, U);
  applyMove(test_cube1, R_PRIME);
  applyMove(test_cube1, U_PRIME);

  // Apply U R U' R'
  applyMove(test_cube2, U);
  applyMove(test_cube2, R);
  applyMove(test_cube2, U_PRIME);
  applyMove(test_cube2, R_PRIME);

  // The commutator [R, U] should not be trivial, so test_cube1 and test_cube2 should not be equal
  CHECK_FALSE(cubesAreEqual(test_cube1, test_cube2));
}

TEST_CASE("Testing the Sexy Move sequence")
{
  Cube cube = createSolvedCube();
  Cube original_cube = cube;

  // The "Sexy Move" sequence (R U R' U') six times returns to solved state
  for (int i = 0; i < 6; i++)
  {
    applyMove(cube, R);
    applyMove(cube, U);
    applyMove(cube, R_PRIME);
    applyMove(cube, U_PRIME);
  }

  CHECK(cubesAreEqual(original_cube, cube));
}

TEST_CASE("A T-perm is an involution: once is not solved, twice returns to solved")
{
  Cube cube = createSolvedCube();
  Cube original_cube = cube;

  // The T-perm swaps two corners and two edges, so it is its own inverse: one
  // application does not return to solved, but two applications do.
  for (int t = 0; t < 2; ++t)
  {
    applyMove(cube, R);
    applyMove(cube, U);
    applyMove(cube, R_PRIME);
    applyMove(cube, U_PRIME);
    applyMove(cube, R_PRIME);
    applyMove(cube, F);
    applyMove(cube, R);
    applyMove(cube, R);  // R2 implemented as R twice
    applyMove(cube, U_PRIME);
    applyMove(cube, R_PRIME);
    applyMove(cube, U_PRIME);
    applyMove(cube, R);
    applyMove(cube, U);
    applyMove(cube, R_PRIME);
    applyMove(cube, F_PRIME);

    if (t == 0)
    {
      CHECK_FALSE(cubesAreEqual(original_cube, cube));
    }
  }

  CHECK(cubesAreEqual(original_cube, cube));
}
