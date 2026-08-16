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

#include <jorcs/cube.h>
#include <jorcs/facelet.h>
#include <jorcs/two_phase.h>

#include <cstdint>

// Why a cube can't be solved -- in enough detail to tell the user something true.
//
// isValidCube() answers "is this solvable" with one bit, which is all a solver
// needs and nowhere near enough to explain anything. The same checks, kept apart,
// say a great deal more, because the check that fails tells you how many stickers
// would have had to be misread to produce it:
//
//   impossible cubie   a slot's colours are not a real piece  -> one misread
//   duplicate cubie    the same piece read into two slots     -> one or two
//   corner twist       orientations don't sum to 0 mod 3      -> THREE, in a cycle
//   edge flip          orientations don't sum to 0 mod 2      -> two, on one edge
//   parity             corner and edge permutations disagree  -> two, plausible
//
// The corner-twist row is the useful one. At any corner slot the 24 valid colour
// triples form a Hamming-distance-2 code: an ordered pair of adjacent stickers
// already fixes the piece and its orientation, so changing ONE sticker always
// lands outside the code (an impossible cubie), and changing two lands on some
// other piece (a duplicate). Only a three-sticker cycle survives to break the
// twist sum -- which is exactly what a corner physically reinserted the wrong way
// round looks like. So a twist fault on an otherwise clean scan really can be
// blamed on the cube, whereas a parity fault cannot: two independent misreads of
// similar colours produce one routinely.
//
// The three residues are INDEPENDENT -- a cube taken apart and reassembled at
// random is legal only 1 time in 12, and can break all three at once -- so they
// are computed separately and their repairs compose.
namespace jorcs::diagnose
{

using jorcs::facelet::FaceletReconstructor;
using jorcs::facelet::SlotStatus;

enum Fault : uint32_t
{
  FAULT_NONE = 0,
  FAULT_RANGE = 1u << 0,             // a facelet value outside 0..5
  FAULT_IMPOSSIBLE_CORNER = 1u << 1, // a corner slot's colours aren't a real corner
  FAULT_IMPOSSIBLE_EDGE = 1u << 2,
  FAULT_DUPLICATE_CORNER = 1u << 3, // the same corner piece read into two slots
  FAULT_DUPLICATE_EDGE = 1u << 4,
  FAULT_CORNER_TWIST = 1u << 5, // corner orientations don't sum to 0 mod 3
  FAULT_EDGE_FLIP = 1u << 6,    // edge orientations don't sum to 0 mod 2
  FAULT_PARITY = 1u << 7,       // corner and edge permutation parity disagree
};

struct Residues
{
  int twist = 0;               // corner orientation sum mod 3
  int flip = 0;                // edge orientation sum mod 2
  bool parity_mismatch = false;
  bool clean() const { return twist == 0 && flip == 0 && !parity_mismatch; }
};

// How to make an unsolvable-but-well-formed cube solvable. Not a choice between
// three options -- as many of the three parts as are needed, applied together.
//
// Each part names the slot to act on and the PIECE that will end up visibly wrong
// once the repaired solution is played on the real cube (see leftoverOf below).
struct Repair
{
  int twist_slot = -1;
  int twist_amount = 0; // 1 or 2, added mod 3
  int twist_piece = -1;

  int flip_slot = -1;
  int flip_piece = -1;

  int swap_slot_a = -1, swap_slot_b = -1;
  int swap_piece_a = -1, swap_piece_b = -1;
  bool swap_is_edges = true;

  bool needed() const { return twist_slot >= 0 || flip_slot >= 0 || swap_slot_a >= 0; }
};

struct Report
{
  uint32_t faults = FAULT_NONE;
  bool pieces_readable = false; // every slot read as SOME real cubie
  bool well_formed = false;     // ...and no piece was read twice
  bool solvable = false;        // ...and all three invariants hold

  uint32_t bad_corners = 0, bad_edges = 0; // slots whose colours aren't a real piece
  uint32_t dup_corners = 0, dup_edges = 0; // slots holding a piece that appears twice

  Residues residues;
  Repair repair; // populated when well_formed && !solvable

  int badSlotCount() const
  {
    int n = 0;
    for (int i = 0; i < 32; ++i)
      n += ((bad_corners >> i) & 1u) + ((bad_edges >> i) & 1u);
    return n;
  }
};

// --- state surgery -----------------------------------------------------------
//
// These are the only ways a well-formed cube can be off the solvable coset, and
// each one COMMUTES with every move. That is what makes "solve it anyway" work:
// a move acts on orientations as a permutation of the slots plus a constant, so
// two states differing by one unit of twist still differ by one unit after any
// sequence of moves -- at whichever slot that piece ended up in.

inline void twistCorner(Cube &cube, int slot, int amount)
{
  cube.corner_ori[slot] = static_cast<uint8_t>((cube.corner_ori[slot] + amount) % 3);
}

inline void flipEdge(Cube &cube, int slot)
{
  cube.edge_ori[slot] = static_cast<uint8_t>(cube.edge_ori[slot] ^ 1u);
}

// Swap which PIECE sits in each slot, leaving the orientation numbers with the
// slots. Orientation is measured against the slot's frame, so carrying it with the
// piece (a corner moving from a U slot to a D slot) would not mean anything -- and
// would stop the swap commuting with moves. Keeping it slot-side is also why a
// swap cannot disturb the twist or flip sums.
inline void swapCorners(Cube &cube, int a, int b)
{
  const uint8_t t = cube.corner_pos[a];
  cube.corner_pos[a] = cube.corner_pos[b];
  cube.corner_pos[b] = t;
}

inline void swapEdges(Cube &cube, int a, int b)
{
  const uint8_t t = cube.edge_pos[a];
  cube.edge_pos[a] = cube.edge_pos[b];
  cube.edge_pos[b] = t;
}

// --- diagnosis ---------------------------------------------------------------

namespace detail
{

inline int slotOfCorner(const Cube &cube, int piece)
{
  for (int i = 0; i < 8; ++i)
    if (cube.corner_pos[i] == piece)
      return i;
  return -1;
}

inline int slotOfEdge(const Cube &cube, int piece)
{
  for (int i = 0; i < 12; ++i)
    if (cube.edge_pos[i] == piece)
      return i;
  return -1;
}

} // namespace detail

// The three residues. Orientation sums are meaningful even when a piece was read
// twice (they don't depend on which piece is where), but permutation parity is
// not, so `permutation_ok` gates it.
inline Residues residuesOf(const Cube &cube, bool permutation_ok)
{
  Residues r;
  int corner_sum = 0;
  for (int i = 0; i < 8; ++i)
    corner_sum += cube.corner_ori[i];
  r.twist = corner_sum % 3;

  int edge_sum = 0;
  for (int i = 0; i < 12; ++i)
    edge_sum += cube.edge_ori[i];
  r.flip = edge_sum % 2;

  if (permutation_ok)
  {
    r.parity_mismatch =
      jorcs::two_phase::permParity(cube.corner_pos, 8) != jorcs::two_phase::permParity(cube.edge_pos, 12);
  }
  return r;
}

// Pick the repair that leaves the defect on pieces the user can actually see.
// Every corner is an equally valid culprit -- the state cannot say which one is
// physically wrong -- so we choose, and choose something visible.
inline Repair chooseRepair(const Cube &cube, const Residues &residues, int corner_piece, int edge_piece,
                           int edge_piece_b)
{
  Repair repair;
  if (residues.twist != 0)
  {
    repair.twist_piece = corner_piece;
    repair.twist_slot = detail::slotOfCorner(cube, corner_piece);
    repair.twist_amount = (3 - residues.twist) % 3;
  }
  if (residues.flip != 0)
  {
    repair.flip_piece = edge_piece;
    repair.flip_slot = detail::slotOfEdge(cube, edge_piece);
  }
  if (residues.parity_mismatch)
  {
    // Two edges rather than two corners: physically it is the commoner reassembly
    // mistake, and "these two pieces are in each other's places" is easier to say.
    repair.swap_is_edges = true;
    repair.swap_piece_a = edge_piece;
    repair.swap_piece_b = edge_piece_b;
    repair.swap_slot_a = detail::slotOfEdge(cube, edge_piece);
    repair.swap_slot_b = detail::slotOfEdge(cube, edge_piece_b);
  }
  return repair;
}

inline void applyRepair(Cube &cube, const Repair &repair)
{
  if (repair.twist_slot >= 0)
    twistCorner(cube, repair.twist_slot, repair.twist_amount);
  if (repair.flip_slot >= 0)
    flipEdge(cube, repair.flip_slot);
  if (repair.swap_slot_a >= 0)
  {
    if (repair.swap_is_edges)
      swapEdges(cube, repair.swap_slot_a, repair.swap_slot_b);
    else
      swapCorners(cube, repair.swap_slot_a, repair.swap_slot_b);
  }
}

// Diagnose a cubie model. `status` says which slots failed to read at all (pass a
// default-constructed one when the cube didn't come from a scan).
//
// Nothing here early-returns: a cube can be wrong in several ways at once, and
// which of them is worth telling the user about is a ranking decision, not an
// ordering one. (A single misread sticker always breaks the colour counts too, so
// answering "the counts are off" first would bury the useful part every time.)
inline Report diagnoseCube(const Cube &cube, const SlotStatus &status, int corner_piece = 2, int edge_piece = 2,
                           int edge_piece_b = 3)
{
  Report report;
  report.bad_corners = status.bad_corners;
  report.bad_edges = status.bad_edges;
  if (status.range_error)
    report.faults |= FAULT_RANGE;
  if (status.bad_corners)
    report.faults |= FAULT_IMPOSSIBLE_CORNER;
  if (status.bad_edges)
    report.faults |= FAULT_IMPOSSIBLE_EDGE;

  // Anything a bad slot left behind is 0xFF, so treat out-of-range the same way.
  bool readable = !status.range_error;
  for (int i = 0; i < 8; ++i)
    if (cube.corner_pos[i] >= 8 || cube.corner_ori[i] > 2)
      readable = false;
  for (int i = 0; i < 12; ++i)
    if (cube.edge_pos[i] >= 12 || cube.edge_ori[i] > 1)
      readable = false;
  report.pieces_readable = readable;
  if (!readable)
    return report;

  int corner_seen[8] = {0};
  for (int i = 0; i < 8; ++i)
    corner_seen[cube.corner_pos[i]]++;
  for (int i = 0; i < 8; ++i)
    if (corner_seen[cube.corner_pos[i]] > 1)
      report.dup_corners |= 1u << i;

  int edge_seen[12] = {0};
  for (int i = 0; i < 12; ++i)
    edge_seen[cube.edge_pos[i]]++;
  for (int i = 0; i < 12; ++i)
    if (edge_seen[cube.edge_pos[i]] > 1)
      report.dup_edges |= 1u << i;

  if (report.dup_corners)
    report.faults |= FAULT_DUPLICATE_CORNER;
  if (report.dup_edges)
    report.faults |= FAULT_DUPLICATE_EDGE;

  const bool permutation_ok = report.dup_corners == 0 && report.dup_edges == 0;
  report.well_formed = permutation_ok;
  report.residues = residuesOf(cube, permutation_ok);

  if (report.residues.twist != 0)
    report.faults |= FAULT_CORNER_TWIST;
  if (report.residues.flip != 0)
    report.faults |= FAULT_EDGE_FLIP;
  if (report.residues.parity_mismatch)
    report.faults |= FAULT_PARITY;

  report.solvable = permutation_ok && report.residues.clean();
  if (report.well_formed && !report.solvable)
    report.repair = chooseRepair(cube, report.residues, corner_piece, edge_piece, edge_piece_b);
  return report;
}

inline Report diagnoseFacelets(const FaceletReconstructor &reconstructor, const uint8_t facelets[54],
                               int corner_piece = 2, int edge_piece = 2, int edge_piece_b = 3)
{
  Cube cube;
  const SlotStatus status = reconstructor.reconstructDetailed(facelets, cube);
  return diagnoseCube(cube, status, corner_piece, edge_piece, edge_piece_b);
}

// --- what would make it solvable? --------------------------------------------

inline bool solvableWith(const FaceletReconstructor &reconstructor, const uint8_t facelets[54])
{
  Cube cube;
  if (!reconstructor.reconstruct(facelets, cube))
    return false;
  return jorcs::two_phase::isValidCube(cube);
}

// A whole face read a quarter turn round -- the cube was turned the wrong way
// between shots. Far likelier than two independent misreads, and only 18 things to
// try, so it is worth asking before blaming individual squares.
struct FaceRotation
{
  int face = -1;   // viewer side order, 0=R 1=L 2=U 3=D 4=F 5=B
  int turns = 0;   // clockwise quarter turns that would put it right
  bool found() const { return face >= 0; }
};

inline FaceRotation findFaceRotation(const FaceletReconstructor &reconstructor, const uint8_t facelets[54])
{
  for (int face = 0; face < 6; ++face)
  {
    uint8_t candidate[54];
    for (int i = 0; i < 54; ++i)
      candidate[i] = facelets[i];
    for (int turn = 1; turn <= 3; ++turn)
    {
      uint8_t rotated[9];
      for (int r = 0; r < 3; ++r)
        for (int c = 0; c < 3; ++c)
          rotated[r * 3 + c] = candidate[face * 9 + (2 - c) * 3 + r]; // one quarter turn
      for (int i = 0; i < 9; ++i)
        candidate[face * 9 + i] = rotated[i];
      if (solvableWith(reconstructor, candidate))
        return FaceRotation{face, turn};
    }
  }
  return FaceRotation{};
}

// A sticker (or a pair of them) that, read differently, would make the cube
// solvable -- "that orange is probably red".
struct Suggestion
{
  int facelet_a = -1, color_a = -1;
  int facelet_b = -1, color_b = -1; // -1,-1 when one change is enough
  int cost = 0;                     // lower = closer to what the camera actually saw
};

namespace detail
{

inline bool isCentre(int facelet) { return facelet % 9 == 4; }

// How much worse it is to call facelet `i` colour `to` instead of `from`. `costs`
// is an optional 54x6 of squared Lab distances from the scanner; without it every
// re-reading is equally plausible and the ordering falls back to position.
inline int relabelCost(const uint16_t *costs, int facelet, int from, int to)
{
  if (costs == nullptr)
    return 0;
  return static_cast<int>(costs[facelet * 6 + to]) - static_cast<int>(costs[facelet * 6 + from]);
}

// Keep the `max_out` cheapest, in order. `stored` is how many we kept; the caller
// tracks how many there were altogether, because "one square explains this" and
// "any of thirty-six pairs would" are very different things to tell someone.
inline void insertSuggestion(Suggestion *out, int &stored, int max_out, const Suggestion &s)
{
  int at = stored < max_out ? stored : max_out - 1;
  if (stored >= max_out && out[max_out - 1].cost <= s.cost)
    return;
  while (at > 0 && out[at - 1].cost > s.cost)
  {
    out[at] = out[at - 1];
    --at;
  }
  out[at] = s;
  if (stored < max_out)
    ++stored;
}

} // namespace detail

// Find re-readings of the scan that would make it a solvable cube.
//
// The colour counts prune this to almost nothing. A single changed sticker moves
// one colour's count up and another's down, so it can only help when the counts
// are off by exactly one -- and then only stickers showing the surplus colour, re-
// read as the missing one, are worth trying (at most nine). When the counts are
// already nine of each, the cheapest fix is a PAIR of stickers exchanging colours,
// which is exactly what two red/orange confusions look like.
//
// Centres are excluded: re-reading a centre would redefine which face is which and
// invalidate every other sticker's meaning.
// Returns how many re-readings would work ALTOGETHER, and fills `out` with the
// `max_out` most plausible. One is an answer; thirty-six is a shortlist.
inline int findRelabels(const FaceletReconstructor &reconstructor, const uint8_t facelets[54],
                        const uint16_t *costs, Suggestion *out, int max_out, int *stored_out = nullptr)
{
  int stored = 0;
  if (stored_out != nullptr)
    *stored_out = 0;
  int counts[6] = {0};
  for (int i = 0; i < 54; ++i)
  {
    if (facelets[i] > 5)
      return 0;
    counts[facelets[i]]++;
  }

  int over = -1, under = -1, wrong = 0;
  for (int colour = 0; colour < 6; ++colour)
  {
    if (counts[colour] == 9)
      continue;
    ++wrong;
    if (counts[colour] == 10)
      over = colour;
    if (counts[colour] == 8)
      under = colour;
  }

  int found = 0;
  uint8_t candidate[54];

  if (wrong == 2 && over >= 0 && under >= 0)
  {
    for (int i = 0; i < 54; ++i)
    {
      if (detail::isCentre(i) || facelets[i] != over)
        continue;
      for (int k = 0; k < 54; ++k)
        candidate[k] = facelets[k];
      candidate[i] = static_cast<uint8_t>(under);
      if (solvableWith(reconstructor, candidate))
      {
        Suggestion s;
        s.facelet_a = i;
        s.color_a = under;
        s.cost = detail::relabelCost(costs, i, over, under);
        detail::insertSuggestion(out, stored, max_out, s);
        ++found;
      }
    }
    if (stored_out != nullptr)
      *stored_out = stored;
    return found;
  }

  if (wrong != 0)
    return 0; // counts are further out than one sticker can explain

  for (int a = 0; a < 6; ++a)
  {
    for (int b = a + 1; b < 6; ++b)
    {
      for (int i = 0; i < 54; ++i)
      {
        if (detail::isCentre(i) || facelets[i] != a)
          continue;
        for (int j = 0; j < 54; ++j)
        {
          if (detail::isCentre(j) || facelets[j] != b)
            continue;
          for (int k = 0; k < 54; ++k)
            candidate[k] = facelets[k];
          candidate[i] = static_cast<uint8_t>(b);
          candidate[j] = static_cast<uint8_t>(a);
          if (!solvableWith(reconstructor, candidate))
            continue;
          Suggestion s;
          s.facelet_a = i;
          s.color_a = b;
          s.facelet_b = j;
          s.color_b = a;
          s.cost = detail::relabelCost(costs, i, a, b) + detail::relabelCost(costs, j, b, a);
          detail::insertSuggestion(out, stored, max_out, s);
          ++found;
        }
      }
    }
  }
  if (stored_out != nullptr)
    *stored_out = stored;
  return found;
}

} // namespace jorcs::diagnose
