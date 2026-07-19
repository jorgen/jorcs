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

#include <sstream>
#include <string>
#include <vector>

#include <emscripten/bind.h>

#include <jorcs/cube.h>
#include <jorcs/move.h>

using namespace emscripten;

namespace
{
int lookupMove(const std::string &token)
{
  static const struct
  {
    const char *name;
    Move move;
  } table[] = {{"U", U}, {"U'", U_PRIME}, {"D", D}, {"D'", D_PRIME}, {"F", F},  {"F'", F_PRIME},
               {"B", B}, {"B'", B_PRIME}, {"L", L}, {"L'", L_PRIME}, {"R", R}, {"R'", R_PRIME}};
  for (const auto &entry : table)
  {
    if (token == entry.name)
    {
      return entry.move;
    }
  }
  return -1;
}

void cubeApply(Cube &cube, Move move)
{
  applyMove(cube, move);
}

bool cubeIsSolved(const Cube &cube)
{
  return cubesAreEqual(cube, Cube());
}

std::vector<int> toVector(const uint8_t *data, int count)
{
  return std::vector<int>(data, data + count);
}

std::vector<int> cubeCornerPos(const Cube &cube)
{
  return toVector(cube.corner_pos, 8);
}
std::vector<int> cubeCornerOri(const Cube &cube)
{
  return toVector(cube.corner_ori, 8);
}
std::vector<int> cubeEdgePos(const Cube &cube)
{
  return toVector(cube.edge_pos, 12);
}
std::vector<int> cubeEdgeOri(const Cube &cube)
{
  return toVector(cube.edge_ori, 12);
}

// Apply a whitespace-separated move sequence (e.g. "U R U' R'") to a solved cube.
// Unknown tokens are skipped.
Cube applyScramble(const std::string &sequence)
{
  Cube cube;
  std::istringstream stream(sequence);
  std::string token;
  while (stream >> token)
  {
    const int move = lookupMove(token);
    if (move >= 0)
    {
      applyMove(cube, static_cast<Move>(move));
    }
  }
  return cube;
}

std::string version()
{
  return "jorcs 0.0.1";
}
} // namespace

EMSCRIPTEN_BINDINGS(jorcs)
{
  enum_<Move>("Move")
    .value("U", U)
    .value("Uprime", U_PRIME)
    .value("D", D)
    .value("Dprime", D_PRIME)
    .value("F", F)
    .value("Fprime", F_PRIME)
    .value("B", B)
    .value("Bprime", B_PRIME)
    .value("L", L)
    .value("Lprime", L_PRIME)
    .value("R", R)
    .value("Rprime", R_PRIME);

  class_<Cube>("Cube")
    .constructor<>()
    .function("apply", &cubeApply)
    .function("isSolved", &cubeIsSolved)
    .function("cornerPos", &cubeCornerPos)
    .function("cornerOri", &cubeCornerOri)
    .function("edgePos", &cubeEdgePos)
    .function("edgeOri", &cubeEdgeOri);

  register_vector<int>("VectorInt");

  function("applyScramble", &applyScramble);
  function("version", &version);
}
