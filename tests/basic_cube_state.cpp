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

#include <doctest/doctest.h>
#include <iostream>

#include <jorcs/cube.h>

TEST_CASE("Testing pack and unpack functions with the solved cube") {
    Cube cube{};
    for (int i = 0; i < 8; ++i) {
        cube.corner_pos[i] = i;
        cube.corner_ori[i] = 0;
    }
    for (int i = 0; i < 12; ++i) {
        cube.edge_pos[i] = i;
        cube.edge_ori[i] = 0;
    }

    CubeState state{};
    packCubeState(cube, state);

    Cube unpacked_cube{};
    unpackCubeState(state, unpacked_cube);

    CHECK(cubesAreEqual(cube, unpacked_cube));
}

TEST_CASE("Testing pack and unpack functions with a scrambled cube") {
    Cube cube = {
        {3, 0, 2, 5, 7, 6, 1, 4}, // corner_pos
        {1, 2, 0, 1, 2, 0, 1, 0}, // corner_ori
        {8, 5, 10, 3, 11, 2, 9, 6, 1, 7, 0, 4}, // edge_pos
        {1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0}    // edge_ori
    };

    CubeState state{};
    packCubeState(cube, state);

    Cube unpacked_cube{};
    unpackCubeState(state, unpacked_cube);

    CHECK(cubesAreEqual(cube, unpacked_cube));
}

TEST_CASE("Testing pack and unpack functions with maximum orientations") {
    Cube cube{};
    for (int i = 0; i < 8; ++i) {
        cube.corner_pos[i] = i;
        cube.corner_ori[i] = 2;
    }
    for (int i = 0; i < 12; ++i) {
        cube.edge_pos[i] = i;
        cube.edge_ori[i] = 1;
    }

    CubeState state{};
    packCubeState(cube, state);

    Cube unpacked_cube{};
    unpackCubeState(state, unpacked_cube);

    CHECK(cubesAreEqual(cube, unpacked_cube));
}

TEST_CASE("Testing pack and unpack functions with invalid positions") {
    Cube cube{};
    for (int i = 0; i < 8; ++i) {
        cube.corner_pos[i] = i + 8;
        cube.corner_ori[i] = 0;
    }
    for (int i = 0; i < 12; ++i) {
        cube.edge_pos[i] = i + 12;
        cube.edge_ori[i] = 0;
    }

    CubeState state{};
    packCubeState(cube, state);

    Cube unpacked_cube{};
    unpackCubeState(state, unpacked_cube);

    for (unsigned char & corner_po : cube.corner_pos) {
        corner_po &= 0x07;
    }
    for (unsigned char & edge_po : cube.edge_pos) {
        edge_po &= 0x0F;
    }

    CHECK(cubesAreEqual(cube, unpacked_cube));
}

TEST_CASE("Testing pack and unpack functions with random cube states") {
    Cube cube = {
        {7, 6, 5, 4, 3, 2, 1, 0},
        {2, 1, 2, 1, 0, 2, 1, 0},
        {11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0},
        {0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1}
    };

    CubeState state{};
    packCubeState(cube, state);

    Cube unpacked_cube{};
    unpackCubeState(state, unpacked_cube);

    CHECK(cubesAreEqual(cube, unpacked_cube));
}

