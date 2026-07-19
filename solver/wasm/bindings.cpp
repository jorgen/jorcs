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

#include <cstdint>
#include <memory>
#include <sstream>
#include <string>
#include <vector>

#include <emscripten/bind.h>
#include <emscripten/val.h>

#include <jorcs/cube.h>
#include <jorcs/ida.h>
#include <jorcs/move.h>
#include <jorcs/two_phase.h>

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

std::unique_ptr<IdaSolver> g_solver;

const char *moveName(Move move)
{
  static const char *names[] = {"U", "U'", "D", "D'", "F", "F'", "B", "B'", "L", "L'", "R", "R'"};
  return names[move];
}

// Bulk-copy a JS Uint8Array into a std::vector<uint8_t> via a memory view (fast,
// unlike element-by-element conversion).
std::vector<uint8_t> bytesFrom(const val &array)
{
  const unsigned length = array["length"].as<unsigned>();
  std::vector<uint8_t> out(length);
  val view = val(typed_memory_view(length, out.data()));
  view.call<void>("set", array);
  return out;
}

std::string solutionOf(const Cube &cube)
{
  if (!g_solver)
  {
    return std::string("ERROR:no-solver");
  }
  SolveResult result = g_solver->solve(cube);
  if (!result.solved())
  {
    return std::string("ERROR:unsolved");
  }
  std::string out;
  for (std::size_t i = 0; i < result.moves.size(); ++i)
  {
    if (i != 0)
    {
      out += ' ';
    }
    out += moveName(result.moves[i]);
  }
  return out;
}

// Load the prebuilt (decompressed) pattern databases so the solver is ready.
void loadSolver(const val &corner, const val &edge_a, const val &edge_b)
{
  g_solver = std::make_unique<IdaSolver>(jorcs::ida_detail::loadPatternDatabases(bytesFrom(corner), bytesFrom(edge_a), bytesFrom(edge_b)));
}

bool solverReady()
{
  return g_solver != nullptr;
}

// Solve the cube reached by applying a scramble to the solved cube (used for demos
// and validation — needs no colour recognition).
std::string solveScramble(const std::string &scramble)
{
  Cube cube;
  std::istringstream stream(scramble);
  std::string token;
  while (stream >> token)
  {
    const int move = lookupMove(token);
    if (move >= 0)
    {
      applyMove(cube, static_cast<Move>(move));
    }
  }
  return solutionOf(cube);
}

// Reconstruct a Cube from the four cubie arrays, or report a size mismatch.
bool cubeFromArrays(const val &corner_pos, const val &corner_ori, const val &edge_pos,
                    const val &edge_ori, Cube &cube)
{
  const std::vector<uint8_t> cp = bytesFrom(corner_pos);
  const std::vector<uint8_t> co = bytesFrom(corner_ori);
  const std::vector<uint8_t> ep = bytesFrom(edge_pos);
  const std::vector<uint8_t> eo = bytesFrom(edge_ori);
  if (cp.size() != 8 || co.size() != 8 || ep.size() != 12 || eo.size() != 12)
  {
    return false;
  }
  for (int i = 0; i < 8; ++i)
  {
    cube.corner_pos[i] = cp[i];
    cube.corner_ori[i] = co[i];
  }
  for (int i = 0; i < 12; ++i)
  {
    cube.edge_pos[i] = ep[i];
    cube.edge_ori[i] = eo[i];
  }
  return true;
}

// Solve a cube given directly as the cubie model (corner/edge positions + orientations).
std::string solveState(const val &corner_pos, const val &corner_ori, const val &edge_pos, const val &edge_ori)
{
  Cube cube;
  if (!cubeFromArrays(corner_pos, corner_ori, edge_pos, edge_ori, cube))
  {
    return std::string("ERROR:bad-state");
  }
  return solutionOf(cube);
}

// --- Kociemba two-phase solver ---
//
// Near-optimal (~20-24 half turns) but solves ANY cube in milliseconds with a few
// MB of tables built in-place (no external pattern-database download). Solutions
// are returned in half-turn metric, e.g. "U R2 F' D2 ...".

std::unique_ptr<jorcs::two_phase::TwoPhaseSolver> g_two_phase;

// Build the two-phase tables (a few hundred ms). Idempotent; call once up front.
void initTwoPhase()
{
  if (!g_two_phase)
  {
    g_two_phase = std::make_unique<jorcs::two_phase::TwoPhaseSolver>();
  }
}

bool twoPhaseReady()
{
  return g_two_phase != nullptr;
}

std::string twoPhaseSolutionOf(const Cube &cube)
{
  initTwoPhase();
  const auto result = g_two_phase->solve(cube);
  if (!result.solved)
  {
    return std::string("ERROR:unsolved");
  }
  std::string out;
  for (std::size_t i = 0; i < result.moves.size(); ++i)
  {
    if (i != 0)
    {
      out += ' ';
    }
    out += jorcs::two_phase::moveName(result.moves[i]);
  }
  return out;
}

// Two-phase solve of the cube reached by applying a (quarter-turn) scramble to the
// solved cube. Returns a half-turn-metric solution.
std::string twoPhaseSolveScramble(const std::string &scramble)
{
  Cube cube;
  std::istringstream stream(scramble);
  std::string token;
  while (stream >> token)
  {
    const int move = lookupMove(token);
    if (move >= 0)
    {
      applyMove(cube, static_cast<Move>(move));
    }
  }
  return twoPhaseSolutionOf(cube);
}

// Two-phase solve of a cube given directly as the cubie model (for a scanned cube).
std::string twoPhaseSolveState(const val &corner_pos, const val &corner_ori, const val &edge_pos, const val &edge_ori)
{
  Cube cube;
  if (!cubeFromArrays(corner_pos, corner_ori, edge_pos, edge_ori, cube))
  {
    return std::string("ERROR:bad-state");
  }
  return twoPhaseSolutionOf(cube);
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

  function("loadSolver", &loadSolver);
  function("solverReady", &solverReady);
  function("solveScramble", &solveScramble);
  function("solveState", &solveState);

  function("initTwoPhase", &initTwoPhase);
  function("twoPhaseReady", &twoPhaseReady);
  function("twoPhaseSolveScramble", &twoPhaseSolveScramble);
  function("twoPhaseSolveState", &twoPhaseSolveState);
}
