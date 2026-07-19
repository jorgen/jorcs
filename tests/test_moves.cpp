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

TEST_CASE("Move front and right has correct cycle order")
{
  // The correct cycle order for F·R is 30
  const int FR_CYCLE_LENGTH = 30;

  Cube cube = createSolvedCube();
  Cube expected_cube = cube;

  // Apply F·R the cycle length number of times - should return to solved state
  for (int i = 0; i < FR_CYCLE_LENGTH; i++)
  {
    applyMove(cube, F);
    applyMove(cube, R);
  }
  CHECK(cubesAreEqual(cube, expected_cube));

  // Apply F·R 15 times - should not return to solved state
  cube = createSolvedCube();
  for (int i = 0; i < 15; i++)
  {
    applyMove(cube, F);
    applyMove(cube, R);
  }
  CHECK_FALSE(cubesAreEqual(cube, expected_cube));
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

TEST_CASE("Testing that a known algorithm returns to the original state")
{
  Cube cube = createSolvedCube();
  Cube original_cube = cube;

  // Apply a known sequence that cycles back to the solved state
  // This is a simplification of the T-perm algorithm
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

  // Since we applied a known cube-solving algorithm, the cube should be back to the solved state
  CHECK(cubesAreEqual(original_cube, cube));
}
