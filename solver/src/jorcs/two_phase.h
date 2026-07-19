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
#pragma once

#include <jorcs/move.h>

#include <array>
#include <cstdint>
#include <string>
#include <vector>

// Kociemba's two-phase algorithm. Unlike the optimal IDA* solver, this is
// NEAR-optimal (~20-24 half-turns) but solves ANY cube in milliseconds with a
// few MB of tables built in well under a second -- suitable for the browser and
// for the eventual scan-then-solve of a real (deep) cube.
//
// Phase 1 takes the cube into the subgroup G1 = <U, D, R2, L2, F2, B2>, in which
// all corners and edges are oriented and the four E-slice edges (pieces 4..7 =
// LB, LF, RF, RB) sit in the E-slice (slots 4..7). Phase 2 then solves within G1.
//
// This lines up with jorcs' move model (move.h): orientation is measured against
// the U/D axis, so U/D quarter turns preserve orientation and F/B quarter turns
// flip edges -- exactly the standard Kociemba orientation conventions.
namespace jorcs::two_phase
{

// A half-turn-metric move: a face (0=U 1=D 2=F 3=B 4=L 5=R, matching cw_moves)
// turned `turns` times (1=CW, 2=180, 3=CCW).
struct HtmMove
{
  uint8_t face;
  uint8_t turns;
};

inline std::string moveName(HtmMove m)
{
  const char faces[6] = {'U', 'D', 'F', 'B', 'L', 'R'};
  std::string name(1, faces[m.face]);
  if (m.turns == 2)
    name += '2';
  else if (m.turns == 3)
    name += '\'';
  return name;
}

inline void applyHtm(Cube &cube, HtmMove m)
{
  for (int t = 0; t < m.turns; ++t)
    applyQuarterTurn(cube, cw_moves[m.face]);
}

// Parity of a permutation (0 = even, 1 = odd) via inversion count.
inline int permParity(const uint8_t *p, int n)
{
  int inversions = 0;
  for (int i = 0; i < n; ++i)
    for (int j = i + 1; j < n; ++j)
      if (p[i] > p[j])
        ++inversions;
  return inversions & 1;
}

// Whether a cube is a well-formed, SOLVABLE state. This guards the solver against
// malformed input -- most importantly a bad scan fed to twoPhaseSolveState. A
// non-permutation, an out-of-range orientation, a single twisted corner / flipped
// edge, or a single two-piece swap would otherwise drive the coordinate functions
// out of bounds, hang the search, or yield a bogus "solution".
inline bool isValidCube(const Cube &cube)
{
  bool seenCorner[8] = {false};
  for (int i = 0; i < 8; ++i)
  {
    const int v = cube.corner_pos[i];
    if (v >= 8 || seenCorner[v])
      return false;
    seenCorner[v] = true;
  }
  bool seenEdge[12] = {false};
  for (int i = 0; i < 12; ++i)
  {
    const int v = cube.edge_pos[i];
    if (v >= 12 || seenEdge[v])
      return false;
    seenEdge[v] = true;
  }
  int cornerOriSum = 0;
  for (int i = 0; i < 8; ++i)
  {
    if (cube.corner_ori[i] > 2)
      return false;
    cornerOriSum += cube.corner_ori[i];
  }
  if (cornerOriSum % 3 != 0)
    return false;
  int edgeOriSum = 0;
  for (int i = 0; i < 12; ++i)
  {
    if (cube.edge_ori[i] > 1)
      return false;
    edgeOriSum += cube.edge_ori[i];
  }
  if (edgeOriSum % 2 != 0)
    return false;
  // A single quarter turn is an odd permutation of both the corners and the edges,
  // so a solvable cube has matching corner/edge permutation parity.
  return permParity(cube.corner_pos, 8) == permParity(cube.edge_pos, 12);
}

namespace detail
{

// The E-slice edges and the U/D edges, by piece id, and the slots that are their
// home in the solved cube (slice edges live in slots 4..7, U/D edges elsewhere).
inline constexpr int kSlicePieces[4] = {4, 5, 6, 7};
inline constexpr int kSliceSlots[4] = {4, 5, 6, 7};
inline constexpr int kUdPieces[8] = {0, 1, 2, 3, 8, 9, 10, 11};
inline constexpr int kUdSlots[8] = {0, 1, 2, 3, 8, 9, 10, 11};

inline int factorial(int n)
{
  int f = 1;
  for (int i = 2; i <= n; ++i)
    f *= i;
  return f;
}

// Binomial coefficients up to C(12,4), for the slice combination coordinate.
inline int binomial(int n, int k)
{
  if (k < 0 || k > n)
    return 0;
  long long result = 1;
  for (int i = 0; i < k; ++i)
    result = result * (n - i) / (i + 1);
  return static_cast<int>(result);
}

// Lehmer-code rank/unrank of a permutation of {0..n-1}.
inline int permRank(const int *perm, int n)
{
  int rank = 0;
  for (int i = 0; i < n; ++i)
  {
    int smaller = 0;
    for (int j = i + 1; j < n; ++j)
      if (perm[j] < perm[i])
        ++smaller;
    rank = rank * (n - i) + smaller;
  }
  return rank;
}

inline void permUnrank(int rank, int n, int *perm)
{
  int elems[12];
  for (int i = 0; i < n; ++i)
    elems[i] = i;
  for (int i = 0; i < n; ++i)
  {
    int f = factorial(n - 1 - i);
    int idx = rank / f;
    rank %= f;
    perm[i] = elems[idx];
    for (int j = idx; j < n - 1 - i; ++j)
      elems[j] = elems[j + 1];
  }
}

// Rank/unrank of a 4-of-12 combination (which slots hold the slice edges), in
// lexicographic order 0..494.
inline int combRank(const int *positions) // positions[0..3] ascending
{
  int rank = 0;
  for (int k = 0; k < 4; ++k)
    rank += binomial(positions[k], k + 1);
  return rank;
}

inline void combUnrank(int rank, int *positions) // fills positions[0..3] ascending
{
  int k = 4;
  for (int p = 11; p >= 0 && k > 0; --p)
  {
    if (binomial(p, k) <= rank)
    {
      rank -= binomial(p, k);
      positions[k - 1] = p;
      --k;
    }
  }
}

// --- coordinate encoders (Cube -> coordinate) ---

inline int encodeCornerOri(const Cube &cube)
{
  int co = 0;
  for (int i = 0; i < 7; ++i)
    co = co * 3 + cube.corner_ori[i];
  return co;
}

inline int encodeEdgeOri(const Cube &cube)
{
  int eo = 0;
  for (int i = 0; i < 11; ++i)
    eo = eo * 2 + cube.edge_ori[i];
  return eo;
}

inline int encodeSlice(const Cube &cube)
{
  int positions[4];
  int n = 0;
  for (int slot = 0; slot < 12; ++slot)
  {
    const int piece = cube.edge_pos[slot];
    if (piece >= 4 && piece <= 7)
      positions[n++] = slot;
  }
  return combRank(positions);
}

inline int encodeCornerPerm(const Cube &cube)
{
  int perm[8];
  for (int i = 0; i < 8; ++i)
    perm[i] = cube.corner_pos[i];
  return permRank(perm, 8);
}

inline int udPieceIndex(int piece) // piece in {0,1,2,3,8,9,10,11} -> 0..7
{
  for (int i = 0; i < 8; ++i)
    if (kUdPieces[i] == piece)
      return i;
  return -1;
}

inline int slicePieceIndex(int piece) // piece in {4,5,6,7} -> 0..3
{
  return piece - 4;
}

inline int encodeUdEdgePerm(const Cube &cube)
{
  int perm[8];
  for (int k = 0; k < 8; ++k)
    perm[k] = udPieceIndex(cube.edge_pos[kUdSlots[k]]);
  return permRank(perm, 8);
}

inline int encodeSlicePerm(const Cube &cube)
{
  int perm[4];
  for (int k = 0; k < 4; ++k)
    perm[k] = slicePieceIndex(cube.edge_pos[kSliceSlots[k]]);
  return permRank(perm, 4);
}

// --- coordinate decoders (coordinate -> representative Cube) ---
//
// Each decoder builds a cube whose one coordinate matches and whose other state
// is solved/canonical. Because a move's effect on any one coordinate depends only
// on that coordinate (orientation twists depend on slot, permutation transports
// depend on permutation), the move tables generated by decode-apply-encode are
// exact for every real cube, not just these representatives.

inline Cube decodeCornerOri(int co)
{
  Cube cube;
  int sum = 0;
  for (int i = 6; i >= 0; --i)
  {
    cube.corner_ori[i] = co % 3;
    sum += cube.corner_ori[i];
    co /= 3;
  }
  cube.corner_ori[7] = (3 - sum % 3) % 3;
  return cube;
}

inline Cube decodeEdgeOri(int eo)
{
  Cube cube;
  int sum = 0;
  for (int i = 10; i >= 0; --i)
  {
    cube.edge_ori[i] = eo % 2;
    sum += cube.edge_ori[i];
    eo /= 2;
  }
  cube.edge_ori[11] = sum % 2;
  return cube;
}

inline Cube decodeSlice(int slice)
{
  int positions[4];
  combUnrank(slice, positions);
  bool isSliceSlot[12] = {false};
  for (int k = 0; k < 4; ++k)
    isSliceSlot[positions[k]] = true;

  Cube cube;
  int nextSlice = 0;
  int nextUd = 0;
  for (int slot = 0; slot < 12; ++slot)
  {
    if (isSliceSlot[slot])
      cube.edge_pos[slot] = kSlicePieces[nextSlice++];
    else
      cube.edge_pos[slot] = kUdPieces[nextUd++];
  }
  return cube;
}

inline Cube decodeCornerPerm(int cp)
{
  int perm[8];
  permUnrank(cp, 8, perm);
  Cube cube;
  for (int i = 0; i < 8; ++i)
    cube.corner_pos[i] = perm[i];
  return cube;
}

inline Cube decodeUdEdgePerm(int ep)
{
  int perm[8];
  permUnrank(ep, 8, perm);
  Cube cube; // slice slots already hold slice pieces (identity)
  for (int k = 0; k < 8; ++k)
    cube.edge_pos[kUdSlots[k]] = kUdPieces[perm[k]];
  return cube;
}

inline Cube decodeSlicePerm(int sp)
{
  int perm[4];
  permUnrank(sp, 4, perm);
  Cube cube; // U/D slots already hold U/D pieces (identity)
  for (int k = 0; k < 4; ++k)
    cube.edge_pos[kSliceSlots[k]] = kSlicePieces[perm[k]];
  return cube;
}

// Phase-1 move set: all 18 half-turn moves. Phase-2 move set: the 10 moves of G1.
inline constexpr HtmMove kPhase1Moves[18] = {
  {0, 1}, {0, 2}, {0, 3}, {1, 1}, {1, 2}, {1, 3}, {2, 1}, {2, 2}, {2, 3},
  {3, 1}, {3, 2}, {3, 3}, {4, 1}, {4, 2}, {4, 3}, {5, 1}, {5, 2}, {5, 3}};
inline constexpr int kNumPhase1Moves = 18;

inline constexpr HtmMove kPhase2Moves[10] = {
  {0, 1}, {0, 2}, {0, 3}, {1, 1}, {1, 2}, {1, 3}, {2, 2}, {3, 2}, {4, 2}, {5, 2}};
inline constexpr int kNumPhase2Moves = 10;

inline constexpr int kNumCornerOri = 2187; // 3^7
inline constexpr int kNumEdgeOri = 2048;   // 2^11
inline constexpr int kNumSlice = 495;      // C(12,4)
inline constexpr int kNumCornerPerm = 40320; // 8!
inline constexpr int kNumUdEdgePerm = 40320; // 8!
inline constexpr int kNumSlicePerm = 24;     // 4!

} // namespace detail

// The two-phase solver. Building the move + pruning tables (a few MB) takes well
// under a second; solving is milliseconds.
class TwoPhaseSolver
{
public:
  struct Result
  {
    bool solved = false;
    std::vector<HtmMove> moves;
  };

  TwoPhaseSolver()
  {
    buildMoveTables();
    buildPruningTables();
    solved_slice_ = detail::encodeSlice(Cube{});
  }

  // Returns a near-optimal solution (list of half-turn moves) taking `start` to
  // solved, or {solved=false} if none is found within `max_length`.
  Result solve(const Cube &start, int max_length = 30)
  {
    using namespace detail;
    // Reject malformed/unsolvable input up front: the coordinate functions and the
    // search assume a valid, solvable cube. Without this an invalid scan could read
    // out of bounds or search unbounded.
    if (!isValidCube(start))
      return Result{};
    if (max_length > 31)
      max_length = 31; // keep within the phase path buffers
    start_ = start;
    best_length_ = max_length + 1;
    best_.clear();
    found_ = false;
    nodes_ = 0;

    const int co = encodeCornerOri(start);
    const int eo = encodeEdgeOri(start);
    const int slice = encodeSlice(start);

    for (int bound1 = phase1Heuristic(co, eo, slice); bound1 < best_length_ && bound1 <= max_length; ++bound1)
    {
      phase1_path_len_ = 0;
      phase1Search(co, eo, slice, 0, bound1, -1);
      if (nodes_ > kNodeBudget)
        break;
    }

    // Defense in depth: never report success for a solution that does not actually
    // solve the cube, whatever the cause (a coordinate-model gap, a future bug).
    if (found_)
    {
      Cube check = start;
      for (HtmMove m : best_)
        applyHtm(check, m);
      if (!cubesAreEqual(check, Cube{}))
      {
        found_ = false;
        best_.clear();
      }
    }

    Result result;
    result.solved = found_;
    result.moves = best_;
    return result;
  }

private:
  static constexpr long long kNodeBudget = 20'000'000;

  // --- table construction ---

  void buildMoveTables()
  {
    using namespace detail;
    co_move_.resize(kNumCornerOri * kNumPhase1Moves);
    eo_move_.resize(kNumEdgeOri * kNumPhase1Moves);
    slice_move_.resize(kNumSlice * kNumPhase1Moves);
    for (int i = 0; i < kNumCornerOri; ++i)
    {
      Cube base = decodeCornerOri(i);
      for (int m = 0; m < kNumPhase1Moves; ++m)
      {
        Cube c = base;
        applyHtm(c, kPhase1Moves[m]);
        co_move_[i * kNumPhase1Moves + m] = static_cast<uint16_t>(encodeCornerOri(c));
      }
    }
    for (int i = 0; i < kNumEdgeOri; ++i)
    {
      Cube base = decodeEdgeOri(i);
      for (int m = 0; m < kNumPhase1Moves; ++m)
      {
        Cube c = base;
        applyHtm(c, kPhase1Moves[m]);
        eo_move_[i * kNumPhase1Moves + m] = static_cast<uint16_t>(encodeEdgeOri(c));
      }
    }
    for (int i = 0; i < kNumSlice; ++i)
    {
      Cube base = decodeSlice(i);
      for (int m = 0; m < kNumPhase1Moves; ++m)
      {
        Cube c = base;
        applyHtm(c, kPhase1Moves[m]);
        slice_move_[i * kNumPhase1Moves + m] = static_cast<uint16_t>(encodeSlice(c));
      }
    }

    cp_move_.resize(kNumCornerPerm * kNumPhase2Moves);
    ep_move_.resize(kNumUdEdgePerm * kNumPhase2Moves);
    slicep_move_.resize(kNumSlicePerm * kNumPhase2Moves);
    for (int i = 0; i < kNumCornerPerm; ++i)
    {
      Cube base = decodeCornerPerm(i);
      for (int m = 0; m < kNumPhase2Moves; ++m)
      {
        Cube c = base;
        applyHtm(c, kPhase2Moves[m]);
        cp_move_[i * kNumPhase2Moves + m] = static_cast<uint16_t>(encodeCornerPerm(c));
      }
    }
    for (int i = 0; i < kNumUdEdgePerm; ++i)
    {
      Cube base = decodeUdEdgePerm(i);
      for (int m = 0; m < kNumPhase2Moves; ++m)
      {
        Cube c = base;
        applyHtm(c, kPhase2Moves[m]);
        ep_move_[i * kNumPhase2Moves + m] = static_cast<uint16_t>(encodeUdEdgePerm(c));
      }
    }
    for (int i = 0; i < kNumSlicePerm; ++i)
    {
      Cube base = decodeSlicePerm(i);
      for (int m = 0; m < kNumPhase2Moves; ++m)
      {
        Cube c = base;
        applyHtm(c, kPhase2Moves[m]);
        slicep_move_[i * kNumPhase2Moves + m] = static_cast<uint16_t>(encodeSlicePerm(c));
      }
    }
  }

  // BFS from the goal over the product of two coordinates, giving an admissible
  // distance lower bound (each pruning table ignores one of the three coordinates
  // of its phase; the search takes the max of the two tables).
  void buildPruningTables()
  {
    using namespace detail;
    const int solvedSlice = encodeSlice(Cube{});

    buildProductPruning(co_slice_prune_, kNumCornerOri, kNumSlice, kNumPhase1Moves,
                        co_move_, slice_move_, 0, solvedSlice);
    buildProductPruning(eo_slice_prune_, kNumEdgeOri, kNumSlice, kNumPhase1Moves,
                        eo_move_, slice_move_, 0, solvedSlice);
    buildProductPruning(cp_slicep_prune_, kNumCornerPerm, kNumSlicePerm, kNumPhase2Moves,
                        cp_move_, slicep_move_, 0, 0);
    buildProductPruning(ep_slicep_prune_, kNumUdEdgePerm, kNumSlicePerm, kNumPhase2Moves,
                        ep_move_, slicep_move_, 0, 0);
  }

  static void buildProductPruning(std::vector<uint8_t> &table, int sizeA, int sizeB,
                                  int numMoves, const std::vector<uint16_t> &moveA,
                                  const std::vector<uint16_t> &moveB, int goalA, int goalB)
  {
    table.assign(static_cast<size_t>(sizeA) * sizeB, 0xFF);
    std::vector<int> frontier;
    std::vector<int> next;
    const int start = goalA * sizeB + goalB;
    table[start] = 0;
    frontier.push_back(start);
    uint8_t depth = 0;
    while (!frontier.empty())
    {
      next.clear();
      for (int idx : frontier)
      {
        const int a = idx / sizeB;
        const int b = idx % sizeB;
        for (int m = 0; m < numMoves; ++m)
        {
          const int na = moveA[a * numMoves + m];
          const int nb = moveB[b * numMoves + m];
          const int nidx = na * sizeB + nb;
          if (table[nidx] == 0xFF)
          {
            table[nidx] = depth + 1;
            next.push_back(nidx);
          }
        }
      }
      frontier.swap(next);
      ++depth;
    }
  }

  int phase1Heuristic(int co, int eo, int slice) const
  {
    const int a = co_slice_prune_[static_cast<size_t>(co) * detail::kNumSlice + slice];
    const int b = eo_slice_prune_[static_cast<size_t>(eo) * detail::kNumSlice + slice];
    return a > b ? a : b;
  }

  int phase2Heuristic(int cp, int ep, int slicep) const
  {
    const int a = cp_slicep_prune_[static_cast<size_t>(cp) * detail::kNumSlicePerm + slicep];
    const int b = ep_slicep_prune_[static_cast<size_t>(ep) * detail::kNumSlicePerm + slicep];
    return a > b ? a : b;
  }

  // Move-cancellation pruning: never turn the same face twice in a row, and for
  // opposite faces (same axis) enforce a canonical order so commuting pairs are
  // only tried one way. Faces: axis = face / 2.
  static bool allowedAfter(int face, int prevFace)
  {
    if (prevFace < 0)
      return true;
    if (face == prevFace)
      return false;
    if (face / 2 == prevFace / 2 && face < prevFace)
      return false;
    return true;
  }

  // --- phase 1: reach G1 ---

  void phase1Search(int co, int eo, int slice, int g, int bound, int prevFace)
  {
    ++nodes_;
    if (nodes_ > kNodeBudget)
      return;
    const int h = phase1Heuristic(co, eo, slice);
    if (g + h > bound)
      return;
    if (h == 0)
    {
      // Reached G1 at depth g. Only process solutions of the current target
      // length; shorter ones were handled in earlier iterations. Also skip a
      // trailing move that belongs to phase 2 (it would just make phase 1 longer
      // than necessary for the same split).
      if (g != bound)
        return;
      if (g > 0 && isPhase2Move(detail::kPhase1Moves[phase1_path_[g - 1]]))
        return;
      handlePhase1Solution(g);
      return;
    }

    for (int m = 0; m < detail::kNumPhase1Moves; ++m)
    {
      const int face = detail::kPhase1Moves[m].face;
      if (!allowedAfter(face, prevFace))
        continue;
      const int nco = co_move_[co * detail::kNumPhase1Moves + m];
      const int neo = eo_move_[eo * detail::kNumPhase1Moves + m];
      const int nslice = slice_move_[slice * detail::kNumPhase1Moves + m];
      phase1_path_[g] = m;
      phase1_path_len_ = g + 1;
      phase1Search(nco, neo, nslice, g + 1, bound, face);
    }
  }

  static bool isPhase2Move(HtmMove m)
  {
    // A move is in G1 if it is U/D (any amount) or a half turn of F/B/L/R.
    if (m.face == 0 || m.face == 1)
      return true;
    return m.turns == 2;
  }

  void handlePhase1Solution(int len1)
  {
    using namespace detail;
    // Rebuild the phase-2 starting cube by replaying the phase-1 moves.
    Cube cube = start_;
    for (int i = 0; i < len1; ++i)
      applyHtm(cube, kPhase1Moves[phase1_path_[i]]);

    const int cp = encodeCornerPerm(cube);
    const int ep = encodeUdEdgePerm(cube);
    const int slicep = encodeSlicePerm(cube);

    const int maxPhase2 = best_length_ - len1 - 1;
    for (int bound2 = phase2Heuristic(cp, ep, slicep); bound2 <= maxPhase2; ++bound2)
    {
      phase2_path_len_ = 0;
      if (phase2Search(cp, ep, slicep, 0, bound2, -1))
      {
        recordSolution(len1, phase2_path_len_);
        return;
      }
    }
  }

  // --- phase 2: solve within G1 ---

  bool phase2Search(int cp, int ep, int slicep, int g, int bound, int prevFace)
  {
    ++nodes_;
    if (nodes_ > kNodeBudget)
      return false;
    const int h = phase2Heuristic(cp, ep, slicep);
    if (g + h > bound)
      return false;
    if (h == 0)
    {
      phase2_path_len_ = g;
      return true;
    }
    for (int m = 0; m < detail::kNumPhase2Moves; ++m)
    {
      const int face = detail::kPhase2Moves[m].face;
      if (!allowedAfter(face, prevFace))
        continue;
      const int ncp = cp_move_[cp * detail::kNumPhase2Moves + m];
      const int nep = ep_move_[ep * detail::kNumPhase2Moves + m];
      const int nslicep = slicep_move_[slicep * detail::kNumPhase2Moves + m];
      phase2_path_[g] = m;
      if (phase2Search(ncp, nep, nslicep, g + 1, bound, face))
        return true;
    }
    return false;
  }

  void recordSolution(int len1, int len2)
  {
    using namespace detail;
    std::vector<HtmMove> moves;
    moves.reserve(len1 + len2);
    for (int i = 0; i < len1; ++i)
      moves.push_back(kPhase1Moves[phase1_path_[i]]);
    for (int i = 0; i < len2; ++i)
      moves.push_back(kPhase2Moves[phase2_path_[i]]);
    if (static_cast<int>(moves.size()) < best_length_)
    {
      best_length_ = static_cast<int>(moves.size());
      best_ = std::move(moves);
      found_ = true;
    }
  }

  // move tables (indexed [coord * numMoves + move])
  std::vector<uint16_t> co_move_, eo_move_, slice_move_;
  std::vector<uint16_t> cp_move_, ep_move_, slicep_move_;
  // pruning tables (distance-to-goal over a coordinate product)
  std::vector<uint8_t> co_slice_prune_, eo_slice_prune_;
  std::vector<uint8_t> cp_slicep_prune_, ep_slicep_prune_;

  int solved_slice_ = 0;

  // per-solve state
  Cube start_;
  int best_length_ = 0;
  std::vector<HtmMove> best_;
  bool found_ = false;
  long long nodes_ = 0;
  int phase1_path_[32] = {};
  int phase1_path_len_ = 0;
  int phase2_path_[32] = {};
  int phase2_path_len_ = 0;
};

} // namespace jorcs::two_phase
