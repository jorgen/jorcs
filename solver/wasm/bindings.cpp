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
#include <jorcs/diagnose.h>
#include <jorcs/facelet.h>
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
  // Reject a malformed or unsolvable cube (e.g. a bad colour scan) rather than
  // feeding it to a solver that assumes a valid, solvable state.
  return jorcs::two_phase::isValidCube(cube);
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
std::unique_ptr<jorcs::facelet::FaceletReconstructor> g_reconstructor;

// Just the facelet reconstructor -- cheap next to the solver's few MB of tables.
// Diagnosing a scan needs only this, so checking a cube as it is scanned doesn't
// drag the whole solver build in with it.
void ensureReconstructor()
{
  if (!g_reconstructor)
  {
    g_reconstructor = std::make_unique<jorcs::facelet::FaceletReconstructor>();
  }
}

// Build the two-phase tables + the facelet reconstructor (a few hundred ms).
// Idempotent; call once up front.
void initTwoPhase()
{
  if (!g_two_phase)
  {
    g_two_phase = std::make_unique<jorcs::two_phase::TwoPhaseSolver>();
  }
  ensureReconstructor();
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

// Two-phase solve of a SCANNED cube given as 54 facelets. Each value is the
// face-index (0..5) of that sticker's colour; layout is face*9 + row*3 + col with
// faces in viewer side order (0=R 1=L 2=U 3=D 4=F 5=B). Reconstructs the cubie
// model and solves, or reports "ERROR:bad-scan" if the stickers don't form a real,
// solvable cube (a misread scan).
std::string twoPhaseSolveFacelets(const val &faceArray)
{
  const std::vector<uint8_t> faces = bytesFrom(faceArray);
  if (faces.size() != 54)
  {
    return std::string("ERROR:bad-scan");
  }
  for (const uint8_t v : faces)
  {
    if (v > 5)
    {
      return std::string("ERROR:bad-scan");
    }
  }
  initTwoPhase();
  Cube cube;
  if (!g_reconstructor->reconstruct(faces.data(), cube) || !jorcs::two_phase::isValidCube(cube))
  {
    return std::string("ERROR:bad-scan");
  }
  return twoPhaseSolutionOf(cube);
}

// --- diagnosis ---------------------------------------------------------------

// The facelet indices of the stickers making up the flagged slots, so the caller
// can point at the squares on screen without re-deriving the cube's geometry.
val flaggedFacelets(uint32_t corners, uint32_t edges)
{
  val out = val::array();
  int n = 0;
  for (int slot = 0; slot < 8; ++slot)
  {
    if (!((corners >> slot) & 1u))
      continue;
    const int *stickers = g_reconstructor->cornerStickers(slot);
    for (int k = 0; k < 3; ++k)
      out.set(n++, stickers[k]);
  }
  for (int slot = 0; slot < 12; ++slot)
  {
    if (!((edges >> slot) & 1u))
      continue;
    const int *stickers = g_reconstructor->edgeStickers(slot);
    for (int k = 0; k < 2; ++k)
      out.set(n++, stickers[k]);
  }
  return out;
}

val repairToVal(const jorcs::diagnose::Repair &repair)
{
  val out = val::object();
  out.set("twistSlot", repair.twist_slot);
  out.set("twistAmount", repair.twist_amount);
  out.set("twistPiece", repair.twist_piece);
  out.set("flipSlot", repair.flip_slot);
  out.set("flipPiece", repair.flip_piece);
  out.set("swapSlotA", repair.swap_slot_a);
  out.set("swapSlotB", repair.swap_slot_b);
  out.set("swapPieceA", repair.swap_piece_a);
  out.set("swapPieceB", repair.swap_piece_b);
  out.set("swapIsEdges", repair.swap_is_edges);
  return out;
}

// Everything we can say about a scanned cube, in one round trip: the solution if
// it has one, and otherwise what is wrong, which stickers are implicated, and --
// when the cube is well-formed but unsolvable -- a solution to the repaired cube
// plus the piece that solution will leave visibly wrong.
//
// A JS object rather than a string: there is no JSON library here and the build
// is -fno-exceptions, so encoding a struct as text would mean hand-rolling a
// serialiser and parsing `any` back on the other side.
// `costArray` is an optional 54*6 Uint16Array of how far each square's reading sat
// from each colour, used only to rank possible re-readings. Pass an empty array
// when the scan's own measurements aren't available or can't be trusted.
val analyzeFacelets(const val &faceArray, const val &costArray)
{
  using namespace jorcs::diagnose;

  val out = val::object();
  out.set("status", std::string("bad-input"));
  out.set("faults", 0);

  const std::vector<uint8_t> faces = bytesFrom(faceArray);
  if (faces.size() != 54)
  {
    return out;
  }

  std::vector<uint16_t> costs;
  if (!costArray.isUndefined() && !costArray.isNull())
  {
    const unsigned length = costArray["length"].as<unsigned>();
    if (length == 54 * 6)
    {
      costs.resize(length);
      val view = val(typed_memory_view(length, costs.data()));
      view.call<void>("set", costArray);
    }
  }

  ensureReconstructor();
  Cube cube;
  const jorcs::facelet::SlotStatus slots = g_reconstructor->reconstructDetailed(faces.data(), cube);
  const Report report = diagnoseCube(cube, slots);

  out.set("faults", static_cast<int>(report.faults));
  out.set("piecesReadable", report.pieces_readable);
  out.set("wellFormed", report.well_formed);
  out.set("solvable", report.solvable);
  out.set("badCornerSlots", static_cast<int>(report.bad_corners));
  out.set("badEdgeSlots", static_cast<int>(report.bad_edges));
  out.set("badSlotCount", report.badSlotCount());
  out.set("twistResidue", report.residues.twist);
  out.set("flipResidue", report.residues.flip);
  out.set("parityMismatch", report.residues.parity_mismatch);
  out.set("highlightFacelets",
          flaggedFacelets(report.bad_corners | report.dup_corners, report.bad_edges | report.dup_edges));

  if (report.solvable)
  {
    const std::string solution = twoPhaseSolutionOf(cube);
    if (solution.rfind("ERROR", 0) == 0)
    {
      out.set("status", std::string("solver-failed"));
      return out;
    }
    out.set("status", std::string("solved"));
    out.set("solution", solution);
    return out;
  }

  out.set("status", std::string("unsolvable"));

  // Before blaming anything, ask the cheap questions: was a whole face scanned
  // turned round, and is there a re-reading of one or two squares that would make
  // this a real cube? Both are far likelier than a mis-assembled cube.
  const FaceRotation rotation = findFaceRotation(*g_reconstructor, faces.data());
  if (rotation.found())
  {
    val rot = val::object();
    rot.set("face", rotation.face);
    rot.set("turns", rotation.turns);
    out.set("faceRotation", rot);
  }

  Suggestion suggestions[6];
  int stored = 0;
  const int total =
    findRelabels(*g_reconstructor, faces.data(), costs.empty() ? nullptr : costs.data(), suggestions, 6, &stored);
  out.set("suggestionCount", total);
  val list = val::array();
  for (int i = 0; i < stored; ++i)
  {
    val s = val::object();
    s.set("faceletA", suggestions[i].facelet_a);
    s.set("colorA", suggestions[i].color_a);
    s.set("faceletB", suggestions[i].facelet_b);
    s.set("colorB", suggestions[i].color_b);
    list.set(i, s);
  }
  out.set("suggestions", list);

  if (!report.well_formed)
  {
    return out;
  }

  // Well-formed but off the solvable coset: repair it, solve that, and say which
  // piece the solution will leave behind. Playing these moves on the real cube
  // brings everything home except that one piece -- which IS the cube's defect.
  Cube repaired = cube;
  applyRepair(repaired, report.repair);
  const std::string solution = twoPhaseSolutionOf(repaired);
  out.set("repair", repairToVal(report.repair));
  if (solution.rfind("ERROR", 0) != 0)
  {
    out.set("repairedSolution", solution);
  }
  return out;
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
  function("twoPhaseSolveFacelets", &twoPhaseSolveFacelets);

  function("ensureReconstructor", &ensureReconstructor);
  function("analyzeFacelets", &analyzeFacelets);
}
