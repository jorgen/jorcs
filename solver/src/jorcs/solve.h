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

#include <algorithm>
#include <cstddef>
#include <cstdint>
#include <vector>

#include <jorcs/cube.h>
#include <jorcs/move.h>

enum class SolveStatus
{
  Solved,
  DepthExceeded,
  BufferExhausted
};

struct SolveResult
{
  SolveStatus status = SolveStatus::DepthExceeded;
  std::vector<Move> moves;

  bool solved() const
  {
    return status == SolveStatus::Solved;
  }
};

// Breadth-first search for the shortest solution. BFS reaches every state by its
// shortest path first, so a visited set is safe here (unlike depth-first search) and
// the first time the solved state is generated it is at minimum depth, i.e. optimal.
//
// The node buffer doubles as the FIFO queue and as the parent links used to
// reconstruct the move sequence; an open-addressing (linear-probing) hash set over
// the packed cube state deduplicates. Both buffers are allocated once in the
// constructor and reused, so solve() allocates nothing beyond the small result.
//
// The frontier grows exponentially with depth, so this is a shallow-scramble oracle,
// not a general solver: when the node buffer fills before a solution is found it
// returns BufferExhausted. It is meant as the ground truth to validate faster
// solvers (IDA*) against.
class BfsSolver
{
public:
  explicit BfsSolver(std::size_t max_nodes = 4000000)
    : max_nodes_(max_nodes)
  {
    std::size_t capacity = 1;
    while (capacity < max_nodes_ + max_nodes_ / 2)
    {
      capacity <<= 1;
    }
    table_mask_ = capacity - 1;
    table_.assign(capacity, 0);
    nodes_.reserve(max_nodes_);
  }

  SolveResult solve(const Cube &start, int max_depth = 26)
  {
    reset();
    solved_ = packed(Cube{});

    Node root;
    root.state = packed(start);
    root.parent = kNoParent;
    root.move = 0;
    root.depth = 0;
    nodes_.push_back(root);
    table_[probe(root.state)] = 1;
    if (equal(root.state, solved_))
    {
      return SolveResult{SolveStatus::Solved, {}};
    }

    for (std::size_t head = 0; head < nodes_.size(); ++head)
    {
      const uint8_t depth = nodes_[head].depth;
      if (depth >= max_depth)
      {
        continue;
      }
      const bool has_prev = nodes_[head].parent != kNoParent;
      const int prev_move = nodes_[head].move;
      Cube cube;
      unpackCubeState(nodes_[head].state, cube);

      for (int m = 0; m < 12; ++m)
      {
        if (has_prev && m == (prev_move ^ 1))
        {
          continue; // never immediately undo the previous move (X then X' is wasted)
        }
        Cube child = cube;
        applyMove(child, static_cast<Move>(m));
        const CubeState child_state = packed(child);

        const std::size_t slot = probe(child_state);
        if (table_[slot] != 0)
        {
          continue; // already visited
        }
        if (nodes_.size() >= max_nodes_)
        {
          return SolveResult{SolveStatus::BufferExhausted, {}};
        }

        Node node;
        node.state = child_state;
        node.parent = static_cast<uint32_t>(head);
        node.move = static_cast<uint8_t>(m);
        node.depth = static_cast<uint8_t>(depth + 1);
        const uint32_t index = static_cast<uint32_t>(nodes_.size());
        nodes_.push_back(node);
        table_[slot] = index + 1;

        if (equal(child_state, solved_))
        {
          return reconstruct(index);
        }
      }
    }
    return SolveResult{SolveStatus::DepthExceeded, {}};
  }

private:
  struct Node
  {
    CubeState state;
    uint32_t parent;
    uint8_t move;
    uint8_t depth;
  };

  static constexpr uint32_t kNoParent = 0xffffffffu;

  static CubeState packed(const Cube &cube)
  {
    CubeState state{};
    packCubeState(cube, state);
    return state;
  }

  static bool equal(const CubeState &a, const CubeState &b)
  {
    return a.corners == b.corners && a.edges == b.edges;
  }

  static uint64_t hash(const CubeState &state)
  {
    uint64_t h = state.corners * 0x9E3779B97F4A7C15ull;
    h ^= state.edges + 0x9E3779B97F4A7C15ull + (h << 6) + (h >> 2);
    h ^= h >> 33;
    h *= 0xFF51AFD7ED558CCDull;
    h ^= h >> 33;
    return h;
  }

  // Returns the table slot for the state: either a matching entry or the first empty
  // slot along the probe sequence.
  std::size_t probe(const CubeState &state) const
  {
    std::size_t i = hash(state) & table_mask_;
    while (table_[i] != 0)
    {
      if (equal(nodes_[table_[i] - 1].state, state))
      {
        break;
      }
      i = (i + 1) & table_mask_;
    }
    return i;
  }

  SolveResult reconstruct(uint32_t index) const
  {
    SolveResult result;
    result.status = SolveStatus::Solved;
    for (uint32_t i = index; nodes_[i].parent != kNoParent; i = nodes_[i].parent)
    {
      result.moves.push_back(static_cast<Move>(nodes_[i].move));
    }
    std::reverse(result.moves.begin(), result.moves.end());
    return result;
  }

  void reset()
  {
    nodes_.clear();
    std::fill(table_.begin(), table_.end(), 0u);
  }

  std::size_t max_nodes_;
  std::size_t table_mask_;
  std::vector<uint32_t> table_;
  std::vector<Node> nodes_;
  CubeState solved_{};
};
