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

TEST_CASE("Applying a move and its inverse returns to the original state")
{
  Cube cube;
  // Initialize a solved cube
  for (int i = 0; i < 8; ++i)
  {
    cube.corner_pos[i] = i;
    cube.corner_ori[i] = 0;
  }
  for (int i = 0; i < 12; ++i)
  {
    cube.edge_pos[i] = i;
    cube.edge_ori[i] = 0;
  }

  Cube original_cube = cube;

  // Test each move and its inverse
  for (int move = U; move <= R; move += 2)
  {
    Cube test_cube = cube;
    applyMove(test_cube, static_cast<Move>(move));
    applyMove(test_cube,
              static_cast<Move>(move + 1)); // Apply inverse move

    CHECK(cubesAreEqual(original_cube, test_cube));
  }
}

TEST_CASE("Applying the same move four times returns to the original state")
{
  Cube cube;
  // Initialize a solved cube
  for (int i = 0; i < 8; ++i)
  {
    cube.corner_pos[i] = i;
    cube.corner_ori[i] = 0;
  }
  for (int i = 0; i < 12; ++i)
  {
    cube.edge_pos[i] = i;
    cube.edge_ori[i] = 0;
  }

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

TEST_CASE("Move front and right 105 times and assert its back to initial state")
{
  Cube cube;
  Cube expected_cube = cube;

  for (int i = 0; i < 105; i++)
  {
    applyMove(cube, F);
    applyMove(cube, R);
  }
  CHECK(cubesAreEqual(cube, expected_cube));
}

TEST_CASE("Testing commutator [R, U]")
{
  Cube cube;
  // Initialize a solved cube
  for (int i = 0; i < 8; ++i)
  {
    cube.corner_pos[i] = i;
    cube.corner_ori[i] = 0;
  }
  for (int i = 0; i < 12; ++i)
  {
    cube.edge_pos[i] = i;
    cube.edge_ori[i] = 0;
  }

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

TEST_CASE("Testing that a sequence returns to the original state")
{
  Cube cube;
  // Initialize a solved cube
  for (int i = 0; i < 8; ++i)
  {
    cube.corner_pos[i] = i;
    cube.corner_ori[i] = 0;
  }
  for (int i = 0; i < 12; ++i)
  {
    cube.edge_pos[i] = i;
    cube.edge_ori[i] = 0;
  }

  Cube original_cube = cube;

  // Apply a known sequence that cycles back to the solved state
  Move sequence[] = {R, U, R_PRIME, U_PRIME, R_PRIME, F, R, R, U_PRIME, R_PRIME, U_PRIME, R, U, R_PRIME, F_PRIME};

  // Since R2 and F_PRIME are not defined yet, let's define them
  const Move R2 = static_cast<Move>(12);     // We'll need to extend our Move enum and moves array
  const Move F_PRIME = static_cast<Move>(5); // Assuming F_PRIME is at index 5

  // Note: For this test, ensure that R2 is defined as two R moves
  // Since we don't have R2, we'll simulate it by applying R twice
  for (Move m : sequence)
  {
    if (m == R2)
    {
      applyMove(cube, R);
      applyMove(cube, R);
    }
    else
    {
      applyMove(cube, m);
    }
  }

  // Since we applied a known cube-solving algorithm, the cube should be back to the solved state
  CHECK(cubesAreEqual(original_cube, cube));
}