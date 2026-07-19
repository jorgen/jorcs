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
} // namespace jorcs::ida_detail

// Optimal solver: IDA* (iterative-deepening DFS bounded by g + h) using an
// admissible corner pattern-database heuristic. The heuristic is the exact number
// of moves to solve just the 8 corners, which is a lower bound on solving the whole
// cube, so the first solution found is optimal. Memory is O(depth) for the search
// plus the fixed ~88 MB corner database (generated once in the constructor). Corners
// alone give weak guidance on edge-heavy scrambles; edge pattern databases are the
// next step for the deepest cubes.
class IdaSolver
{
public:
  IdaSolver()
    : tables_()
    , pdb_(jorcs::ida_detail::generateCornerPdb(tables_))
  {
  }

  SolveResult solve(const Cube &start, int max_depth = 30)
  {
    const Cube solved;
    int bound = pdb_[jorcs::ida_detail::cornerIndex(start)];
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
    const int h = pdb_[jorcs::ida_detail::cornerIndex(cube)];
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

  jorcs::ida_detail::CornerMoveTables tables_;
  std::vector<uint8_t> pdb_;
};
