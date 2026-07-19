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

#include <cstdint>
#include <cstring>
#include <utility>
#include <vector>

#include <jorcs/cube.h>
#include <jorcs/move.h>
#include <jorcs/solve.h>

namespace jorcs::ida_detail
{
constexpr int kCornerPermCount = 40320;                             // 8!
constexpr int kCornerOriCount = 2187;                              // 3^7
constexpr int kCornerStates = kCornerPermCount * kCornerOriCount; // 88,179,840

inline int factorial(int n)
{
  int f = 1;
  for (int i = 2; i <= n; ++i)
  {
    f *= i;
  }
  return f;
}

// Rank an 8-element permutation to [0, 8!) via its Lehmer code.
inline int cornerPermRank(const uint8_t perm[8])
{
  int rank = 0;
  for (int i = 0; i < 8; ++i)
  {
    int smaller = 0;
    for (int j = i + 1; j < 8; ++j)
    {
      if (perm[j] < perm[i])
      {
        ++smaller;
      }
    }
    rank = rank * (8 - i) + smaller;
  }
  return rank;
}

inline void cornerPermUnrank(int rank, uint8_t perm[8])
{
  uint8_t available[8] = {0, 1, 2, 3, 4, 5, 6, 7};
  for (int i = 0; i < 8; ++i)
  {
    const int remaining = 8 - i;
    const int f = factorial(remaining - 1);
    const int d = rank / f;
    rank %= f;
    perm[i] = available[d];
    for (int k = d; k < remaining - 1; ++k)
    {
      available[k] = available[k + 1];
    }
  }
}

// Rank corner orientation to [0, 3^7); the 8th is fixed by the other seven.
inline int cornerOriRank(const uint8_t ori[8])
{
  int rank = 0;
  for (int i = 0; i < 7; ++i)
  {
    rank = rank * 3 + ori[i];
  }
  return rank;
}

inline void cornerOriUnrank(int rank, uint8_t ori[8])
{
  int sum = 0;
  for (int i = 6; i >= 0; --i)
  {
    ori[i] = static_cast<uint8_t>(rank % 3);
    rank /= 3;
    sum += ori[i];
  }
  ori[7] = static_cast<uint8_t>((3 - sum % 3) % 3);
}

inline int cornerIndex(const Cube &cube)
{
  return cornerPermRank(cube.corner_pos) * kCornerOriCount + cornerOriRank(cube.corner_ori);
}

inline void applyCornerMove(uint8_t perm[8], uint8_t ori[8], Move move)
{
  const int face = move / 2;
  const int quarter_turns = (move % 2 == 0) ? 1 : 3;
  for (int t = 0; t < quarter_turns; ++t)
  {
    const MoveData &m = cw_moves[face];
    uint8_t np[8];
    uint8_t no[8];
    for (int i = 0; i < 8; ++i)
    {
      np[m.corner_perm[i]] = perm[i];
      no[m.corner_perm[i]] = (ori[i] + m.corner_ori_delta[i]) % 3;
    }
    std::memcpy(perm, np, 8);
    std::memcpy(ori, no, 8);
  }
}

// Move transition tables in the two corner coordinates. A move permutes the
// permutation coordinate independently of orientation and vice versa (the move's
// permutation/deltas are fixed), so the two coordinates can be moved separately.
struct CornerMoveTables
{
  std::vector<int32_t> perm_move; // [kCornerPermCount * 12]
  std::vector<int32_t> ori_move;  // [kCornerOriCount * 12]

  CornerMoveTables()
  {
    perm_move.resize(static_cast<std::size_t>(kCornerPermCount) * 12);
    ori_move.resize(static_cast<std::size_t>(kCornerOriCount) * 12);

    for (int p = 0; p < kCornerPermCount; ++p)
    {
      uint8_t perm[8];
      uint8_t ori[8] = {0, 0, 0, 0, 0, 0, 0, 0};
      cornerPermUnrank(p, perm);
      for (int mv = 0; mv < 12; ++mv)
      {
        uint8_t tp[8];
        uint8_t to[8];
        std::memcpy(tp, perm, 8);
        std::memcpy(to, ori, 8);
        applyCornerMove(tp, to, static_cast<Move>(mv));
        perm_move[static_cast<std::size_t>(p) * 12 + mv] = cornerPermRank(tp);
      }
    }
    for (int o = 0; o < kCornerOriCount; ++o)
    {
      uint8_t perm[8] = {0, 1, 2, 3, 4, 5, 6, 7};
      uint8_t ori[8];
      cornerOriUnrank(o, ori);
      for (int mv = 0; mv < 12; ++mv)
      {
        uint8_t tp[8];
        uint8_t to[8];
        std::memcpy(tp, perm, 8);
        std::memcpy(to, ori, 8);
        applyCornerMove(tp, to, static_cast<Move>(mv));
        ori_move[static_cast<std::size_t>(o) * 12 + mv] = cornerOriRank(to);
      }
    }
  }
};

// Exact distance-to-solved for the 8 corners, BFS from the solved state.
inline std::vector<uint8_t> generateCornerPdb(const CornerMoveTables &tables)
{
  std::vector<uint8_t> pdb(static_cast<std::size_t>(kCornerStates), 0xFF);
  pdb[0] = 0;
  std::vector<int32_t> frontier;
  std::vector<int32_t> next;
  frontier.push_back(0);
  uint8_t depth = 0;
  std::size_t filled = 1;
  while (!frontier.empty() && filled < static_cast<std::size_t>(kCornerStates))
  {
    for (int32_t index : frontier)
    {
      const int p = index / kCornerOriCount;
      const int o = index % kCornerOriCount;
      for (int mv = 0; mv < 12; ++mv)
      {
        const int np = tables.perm_move[static_cast<std::size_t>(p) * 12 + mv];
        const int no = tables.ori_move[static_cast<std::size_t>(o) * 12 + mv];
        const int next_index = np * kCornerOriCount + no;
        if (pdb[next_index] == 0xFF)
        {
          pdb[next_index] = static_cast<uint8_t>(depth + 1);
          next.push_back(next_index);
          ++filled;
        }
      }
    }
    frontier.swap(next);
    next.clear();
    ++depth;
  }
  return pdb;
}

constexpr int kEdgePosCount = 665280;                        // 12 * 11 * 10 * 9 * 8 * 7 = 12! / 6!
constexpr int kEdgeOriCount = 64;                            // 2^6
constexpr int kEdgeStates = kEdgePosCount * kEdgeOriCount;   // 42,577,920

// Rank the ordered positions of 6 distinguishable edges among the 12 slots.
inline int edgePosRank(const uint8_t slots[6])
{
  int rank = 0;
  bool used[12] = {};
  for (int i = 0; i < 6; ++i)
  {
    int smaller = 0;
    for (int j = 0; j < slots[i]; ++j)
    {
      if (!used[j])
      {
        ++smaller;
      }
    }
    rank = rank * (12 - i) + smaller;
    used[slots[i]] = true;
  }
  return rank;
}

inline void edgePosUnrank(int rank, uint8_t slots[6])
{
  int digit[6];
  for (int i = 5; i >= 0; --i)
  {
    digit[i] = rank % (12 - i);
    rank /= (12 - i);
  }
  bool used[12] = {};
  for (int i = 0; i < 6; ++i)
  {
    int d = digit[i];
    int s = 0;
    for (;;)
    {
      if (!used[s])
      {
        if (d == 0)
        {
          break;
        }
        --d;
      }
      ++s;
    }
    slots[i] = static_cast<uint8_t>(s);
    used[s] = true;
  }
}

// The (position, orientation) coordinate of a group of 6 edges, identified by their
// solved labels. The coordinate tracks the six group edges by label, so slots[l] is
// where group edge l currently sits and its orientation contributes bit (5 - l).
inline void edgeGroupCoord(const Cube &cube, const uint8_t group[6], int &pos_coord, int &ori_coord)
{
  uint8_t slot_of[12];
  for (int i = 0; i < 12; ++i)
  {
    slot_of[cube.edge_pos[i]] = static_cast<uint8_t>(i);
  }
  uint8_t slots[6];
  int ori = 0;
  for (int l = 0; l < 6; ++l)
  {
    const int s = slot_of[group[l]];
    slots[l] = static_cast<uint8_t>(s);
    ori = (ori << 1) | cube.edge_ori[s];
  }
  pos_coord = edgePosRank(slots);
  ori_coord = ori;
}

// Slot-based move tables for any 6-edge group: pos_move transforms the ordered slots,
// flip_mask is the per-group-edge parity a move XORs into the orientation coordinate.
// Both depend only on the slots, not on which six edges, so one pair serves both
// groups.
struct EdgeMoveTables
{
  std::vector<int32_t> pos_move;  // [kEdgePosCount * 12]
  std::vector<uint8_t> flip_mask; // [kEdgePosCount * 12]

  EdgeMoveTables()
  {
    pos_move.resize(static_cast<std::size_t>(kEdgePosCount) * 12);
    flip_mask.resize(static_cast<std::size_t>(kEdgePosCount) * 12);
    for (int p = 0; p < kEdgePosCount; ++p)
    {
      uint8_t slots[6];
      edgePosUnrank(p, slots);
      for (int mv = 0; mv < 12; ++mv)
      {
        const int face = mv / 2;
        const int quarter_turns = (mv % 2 == 0) ? 1 : 3;
        uint8_t s[6];
        std::memcpy(s, slots, 6);
        uint8_t flip[6] = {};
        for (int t = 0; t < quarter_turns; ++t)
        {
          const MoveData &m = cw_moves[face];
          for (int l = 0; l < 6; ++l)
          {
            flip[l] ^= m.edge_ori_delta[s[l]];
            s[l] = m.edge_perm[s[l]];
          }
        }
        int mask = 0;
        for (int l = 0; l < 6; ++l)
        {
          mask = (mask << 1) | flip[l];
        }
        pos_move[static_cast<std::size_t>(p) * 12 + mv] = edgePosRank(s);
        flip_mask[static_cast<std::size_t>(p) * 12 + mv] = static_cast<uint8_t>(mask);
      }
    }
  }
};

// Exact distance to solve one 6-edge group, BFS from that group's solved coordinate.
inline std::vector<uint8_t> generateEdgePdb(const EdgeMoveTables &tables, int solved_index)
{
  std::vector<uint8_t> pdb(static_cast<std::size_t>(kEdgeStates), 0xFF);
  pdb[solved_index] = 0;
  std::vector<int32_t> frontier;
  std::vector<int32_t> next;
  frontier.push_back(solved_index);
  uint8_t depth = 0;
  std::size_t filled = 1;
  while (!frontier.empty() && filled < static_cast<std::size_t>(kEdgeStates))
  {
    for (int32_t index : frontier)
    {
      const int p = index / kEdgeOriCount;
      const int o = index % kEdgeOriCount;
      for (int mv = 0; mv < 12; ++mv)
      {
        const int np = tables.pos_move[static_cast<std::size_t>(p) * 12 + mv];
        const int no = o ^ tables.flip_mask[static_cast<std::size_t>(p) * 12 + mv];
        const int next_index = np * kEdgeOriCount + no;
        if (pdb[next_index] == 0xFF)
        {
          pdb[next_index] = static_cast<uint8_t>(depth + 1);
          next.push_back(next_index);
          ++filled;
        }
      }
    }
    frontier.swap(next);
    next.clear();
    ++depth;
  }
  return pdb;
}

constexpr uint8_t kEdgeGroupA[6] = {0, 1, 2, 3, 4, 5};
constexpr uint8_t kEdgeGroupB[6] = {6, 7, 8, 9, 10, 11};

// The three pattern databases, each 4-bit-packed (every distance fits in a nibble,
// so this halves the memory to ~86 MB). Solving reads them; nothing else is needed.
struct PatternDatabases
{
  std::vector<uint8_t> corner; // (kCornerStates + 1) / 2 bytes
  std::vector<uint8_t> edge_a; // (kEdgeStates + 1) / 2 bytes
  std::vector<uint8_t> edge_b;

  static uint8_t nibble(const std::vector<uint8_t> &packed, int index)
  {
    return (packed[static_cast<std::size_t>(index) >> 1] >> ((index & 1) << 2)) & 0x0F;
  }
};

inline std::vector<uint8_t> packNibbles(const std::vector<uint8_t> &distances)
{
  std::vector<uint8_t> packed((distances.size() + 1) / 2, 0);
  for (std::size_t i = 0; i < distances.size(); ++i)
  {
    packed[i >> 1] |= static_cast<uint8_t>((distances[i] & 0x0F) << ((i & 1) << 2));
  }
  return packed;
}

// Build all three databases from scratch (~19 s). Used by the prebuild tool and by
// the native tests; the browser loads the prebuilt copies instead.
inline PatternDatabases generatePatternDatabases()
{
  const CornerMoveTables corner_tables;
  const EdgeMoveTables edge_tables;
  const Cube solved;

  int pos_a = 0;
  int ori_a = 0;
  int pos_b = 0;
  int ori_b = 0;
  edgeGroupCoord(solved, kEdgeGroupA, pos_a, ori_a);
  edgeGroupCoord(solved, kEdgeGroupB, pos_b, ori_b);

  PatternDatabases pdbs;
  pdbs.corner = packNibbles(generateCornerPdb(corner_tables));
  pdbs.edge_a = packNibbles(generateEdgePdb(edge_tables, pos_a * kEdgeOriCount + ori_a));
  pdbs.edge_b = packNibbles(generateEdgePdb(edge_tables, pos_b * kEdgeOriCount + ori_b));
  return pdbs;
}

constexpr std::size_t kCornerPackedBytes = (static_cast<std::size_t>(kCornerStates) + 1) / 2;
constexpr std::size_t kEdgePackedBytes = (static_cast<std::size_t>(kEdgeStates) + 1) / 2;

// Wrap already-packed database bytes (the prebuilt, decompressed files) for solving.
inline PatternDatabases loadPatternDatabases(std::vector<uint8_t> corner, std::vector<uint8_t> edge_a, std::vector<uint8_t> edge_b)
{
  PatternDatabases pdbs;
  pdbs.corner = std::move(corner);
  pdbs.edge_a = std::move(edge_a);
  pdbs.edge_b = std::move(edge_b);
  return pdbs;
}
} // namespace jorcs::ida_detail

// Optimal solver: IDA* (iterative-deepening DFS bounded by g + h). The heuristic is
// max(corner PDB, two 6-edge PDBs) — an admissible lower bound, so the first solution
// found is optimal. Memory is O(depth) for the search plus the three 4-bit-packed
// databases (~86 MB total). Default-construct to build them (~19 s); construct from a
// PatternDatabases to load prebuilt copies.
class IdaSolver
{
public:
  IdaSolver()
    : IdaSolver(jorcs::ida_detail::generatePatternDatabases())
  {
  }

  explicit IdaSolver(jorcs::ida_detail::PatternDatabases pdbs)
    : pdbs_(std::move(pdbs))
  {
  }

  // An admissible lower bound on the number of moves to solve the cube: the maximum
  // of the corner and two edge-group pattern-database distances.
  int heuristic(const Cube &cube) const
  {
    namespace detail = jorcs::ida_detail;
    int h = detail::PatternDatabases::nibble(pdbs_.corner, detail::cornerIndex(cube));

    int pos_coord = 0;
    int ori_coord = 0;
    detail::edgeGroupCoord(cube, detail::kEdgeGroupA, pos_coord, ori_coord);
    const int ha = detail::PatternDatabases::nibble(pdbs_.edge_a, pos_coord * detail::kEdgeOriCount + ori_coord);
    if (ha > h)
    {
      h = ha;
    }
    detail::edgeGroupCoord(cube, detail::kEdgeGroupB, pos_coord, ori_coord);
    const int hb = detail::PatternDatabases::nibble(pdbs_.edge_b, pos_coord * detail::kEdgeOriCount + ori_coord);
    if (hb > h)
    {
      h = hb;
    }
    return h;
  }

  SolveResult solve(const Cube &start, int max_depth = 30)
  {
    const Cube solved;
    int bound = heuristic(start);
    std::vector<Move> path;
    while (bound <= max_depth)
    {
      const int t = search(start, solved, 0, bound, -1, path);
      if (t == kFound)
      {
        return SolveResult{SolveStatus::Solved, path};
      }
      if (t == kInfinity)
      {
        break;
      }
      bound = t;
    }
    return SolveResult{SolveStatus::DepthExceeded, {}};
  }

private:
  static constexpr int kFound = -1;
  static constexpr int kInfinity = 1000000;

  int search(const Cube &cube, const Cube &solved, int g, int bound, int prev_move, std::vector<Move> &path)
  {
    const int h = heuristic(cube);
    const int f = g + h;
    if (f > bound)
    {
      return f;
    }
    if (h == 0 && cubesAreEqual(cube, solved))
    {
      return kFound;
    }
    int min = kInfinity;
    for (int m = 0; m < 12; ++m)
    {
      if (prev_move >= 0 && m == (prev_move ^ 1))
      {
        continue; // never immediately undo the previous move
      }
      Cube child = cube;
      applyMove(child, static_cast<Move>(m));
      path.push_back(static_cast<Move>(m));
      const int t = search(child, solved, g + 1, bound, m, path);
      if (t == kFound)
      {
        return kFound;
      }
      if (t < min)
      {
        min = t;
      }
      path.pop_back();
    }
    return min;
  }

  jorcs::ida_detail::PatternDatabases pdbs_;
};
