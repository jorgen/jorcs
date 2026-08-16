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

#include <random>

#include <doctest/doctest.h>

#include <jorcs/diagnose.h>
#include <jorcs/facelet.h>
#include <jorcs/move.h>
#include <jorcs/two_phase.h>

namespace
{
using namespace jorcs::diagnose;
using jorcs::facelet::FaceletReconstructor;
using jorcs::facelet::SlotStatus;
using namespace jorcs::facelet::detail;

FaceletReconstructor &recon()
{
  static FaceletReconstructor r;
  return r;
}

void solvedFacelets(uint8_t f[54])
{
  for (int face = 0; face < 6; ++face)
    for (int i = 0; i < 9; ++i)
      f[face * 9 + i] = static_cast<uint8_t>(face);
}

// Scramble a cube and a facelet grid in lockstep, the way the scanner would see it.
void scramble(std::mt19937 &rng, int len, Cube &cube, uint8_t f[54])
{
  Grid g = solvedGrid();
  int prev = -1;
  for (int s = 0; s < len; ++s)
  {
    int m;
    do
    {
      m = static_cast<int>(rng() % 12);
    } while (prev >= 0 && (m / 2) == (prev / 2));
    prev = m;
    applyMove(cube, static_cast<Move>(m));
    int side;
    bool cw;
    moveToRot(m, side, cw);
    applyGridMove(g, side, cw);
  }
  for (int face = 0; face < 6; ++face)
    for (int r = 0; r < 3; ++r)
      for (int c = 0; c < 3; ++c)
        f[face * 9 + r * 3 + c] = g[face][r][c];
}

Report diagnoseState(const Cube &cube) { return diagnoseCube(cube, SlotStatus{}); }
} // namespace

TEST_CASE("diagnose: the learned lookup tables are complete")
{
  // A gap here would make a CORRECT scan report an impossible cubie -- the new
  // diagnosis confidently blaming the user for our own bug.
  CHECK(recon().lutsComplete());
}

TEST_CASE("diagnose: valid cubes report nothing, and agree with isValidCube")
{
  std::mt19937 rng(7);
  for (int trial = 0; trial < 1000; ++trial)
  {
    Cube cube;
    uint8_t f[54];
    scramble(rng, 1 + static_cast<int>(rng() % 25), cube, f);

    const Report report = diagnoseFacelets(recon(), f);
    REQUIRE(report.pieces_readable);
    REQUIRE(report.well_formed);
    CHECK(report.faults == FAULT_NONE);
    CHECK(report.solvable);
    CHECK(report.solvable == jorcs::two_phase::isValidCube(cube));
    CHECK_FALSE(report.repair.needed());
  }
}

TEST_CASE("diagnose: a single corner sticker misread is ALWAYS an impossible corner")
{
  // The claim the whole confidence ladder rests on: at a corner slot the valid
  // colour triples are a Hamming-distance-2 code, so one wrong sticker can never
  // look like a legitimate corner. That is why a twist fault means the cube, not us.
  uint8_t solved[54];
  solvedFacelets(solved);
  for (int slot = 0; slot < 8; ++slot)
  {
    const int *stickers = recon().cornerStickers(slot);
    for (int k = 0; k < 3; ++k)
    {
      for (int colour = 0; colour < 6; ++colour)
      {
        if (colour == solved[stickers[k]])
          continue;
        uint8_t f[54];
        for (int i = 0; i < 54; ++i)
          f[i] = solved[i];
        f[stickers[k]] = static_cast<uint8_t>(colour);
        CHECK(recon().cornerAt(f, slot) < 0);
      }
    }
  }
}

TEST_CASE("diagnose: a single edge sticker misread always changes which piece it is")
{
  // Edges are only a distance-1 code, so one misread often still reads as a real
  // edge -- but never as the SAME edge, so it always shows up as a duplicate piece
  // rather than sneaking through to break an invariant.
  uint8_t solved[54];
  solvedFacelets(solved);
  for (int slot = 0; slot < 12; ++slot)
  {
    const int *stickers = recon().edgeStickers(slot);
    const int original = recon().edgeAt(solved, slot);
    REQUIRE(original >= 0);
    for (int k = 0; k < 2; ++k)
    {
      for (int colour = 0; colour < 6; ++colour)
      {
        if (colour == solved[stickers[k]])
          continue;
        uint8_t f[54];
        for (int i = 0; i < 54; ++i)
          f[i] = solved[i];
        f[stickers[k]] = static_cast<uint8_t>(colour);
        const int changed = recon().edgeAt(f, slot);
        if (changed >= 0)
          CHECK((changed / 2) != (original / 2));
      }
    }
  }
}

TEST_CASE("diagnose: an impossible corner is located, not just detected")
{
  uint8_t f[54];
  solvedFacelets(f);
  const int slot = 2; // URF
  f[recon().cornerStickers(slot)[0]] = 3;

  const Report report = diagnoseFacelets(recon(), f);
  CHECK((report.faults & FAULT_IMPOSSIBLE_CORNER) != 0u);
  CHECK(report.bad_corners == (1u << slot));
  CHECK_FALSE(report.pieces_readable);
  CHECK_FALSE(report.solvable);
  CHECK(report.badSlotCount() == 1);
}

TEST_CASE("diagnose: out-of-range facelets are rejected, not indexed")
{
  // 255 is what an unscanned sticker arrives as; 255*36 is far outside the table.
  uint8_t f[54];
  solvedFacelets(f);
  f[0] = 255;
  const Report report = diagnoseFacelets(recon(), f);
  CHECK((report.faults & FAULT_RANGE) != 0u);
  CHECK_FALSE(report.pieces_readable);
  CHECK_FALSE(report.solvable);

  uint8_t all_bad[54];
  for (int i = 0; i < 54; ++i)
    all_bad[i] = 200;
  const Report worse = diagnoseFacelets(recon(), all_bad);
  CHECK((worse.faults & FAULT_RANGE) != 0u);
  CHECK_FALSE(worse.solvable);
}

TEST_CASE("diagnose: THE DINNER PARTY -- a twisted corner is named as a cube fault")
{
  // Cycle one corner's three stickers: colour counts stay nine of each, every piece
  // stays real and unique, and only the twist sum gives it away.
  uint8_t f[54];
  solvedFacelets(f);
  const int slot = 2; // URF
  const int *st = recon().cornerStickers(slot);
  const uint8_t a = f[st[0]], b = f[st[1]], c = f[st[2]];
  f[st[0]] = c;
  f[st[1]] = a;
  f[st[2]] = b;

  int counts[6] = {0};
  for (int i = 0; i < 54; ++i)
    counts[f[i]]++;
  for (int colour = 0; colour < 6; ++colour)
    REQUIRE(counts[colour] == 9); // the old error message would have been a lie

  const Report report = diagnoseFacelets(recon(), f);
  CHECK(report.pieces_readable);
  CHECK(report.well_formed);
  CHECK_FALSE(report.solvable);
  CHECK(report.faults == FAULT_CORNER_TWIST);
  CHECK(report.residues.twist != 0);
  CHECK(report.residues.flip == 0);
  CHECK_FALSE(report.residues.parity_mismatch);
  CHECK(report.repair.needed());
  CHECK(report.repair.twist_slot >= 0);
}

TEST_CASE("diagnose: THE REFUTATION -- two misreads fake a parity fault")
{
  // Why parity must NOT be blamed on the cube. Read the UF edge's front sticker as
  // red and the UR edge's right sticker as green: both slots still hold real,
  // distinct edges, the colour counts still balance, and nothing is out of place
  // except that those two edges have swapped. Exactly a parity fault, from two
  // ordinary misreads of the sort this scanner makes.
  uint8_t f[54];
  solvedFacelets(f);
  f[faceletIndex(4, 0, 1, 1)] = 0; // UF's front sticker: green -> red
  f[faceletIndex(0, 1, 1, 0)] = 4; // UR's right sticker: red -> green

  int counts[6] = {0};
  for (int i = 0; i < 54; ++i)
    counts[f[i]]++;
  for (int colour = 0; colour < 6; ++colour)
    REQUIRE(counts[colour] == 9);

  const Report report = diagnoseFacelets(recon(), f);
  CHECK(report.pieces_readable);
  CHECK(report.well_formed);
  CHECK_FALSE(report.solvable);
  CHECK(report.faults == FAULT_PARITY);
  CHECK(report.residues.parity_mismatch);
  CHECK(report.residues.twist == 0);
  CHECK(report.residues.flip == 0);
}

TEST_CASE("diagnose: two corners twisted opposite ways is a legal cube")
{
  // Residue 0 -- nothing is wrong and it must simply be solved, not reported.
  Cube cube;
  twistCorner(cube, 0, 1);
  twistCorner(cube, 1, 2);

  const Report report = diagnoseState(cube);
  CHECK(report.solvable);
  CHECK(report.faults == FAULT_NONE);
  CHECK(report.solvable == jorcs::two_phase::isValidCube(cube));
  CHECK_FALSE(report.repair.needed());
}

TEST_CASE("diagnose: the three faults are independent and compose")
{
  Cube cube;
  twistCorner(cube, 0, 1);
  flipEdge(cube, 0);
  swapEdges(cube, 4, 5);

  const Report report = diagnoseState(cube);
  CHECK(report.well_formed);
  CHECK_FALSE(report.solvable);
  CHECK(report.faults == (FAULT_CORNER_TWIST | FAULT_EDGE_FLIP | FAULT_PARITY));
  CHECK(report.residues.twist == 1);
  CHECK(report.residues.flip == 1);
  CHECK(report.residues.parity_mismatch);

  // ...and one composed repair fixes all three at once.
  Cube repaired = cube;
  applyRepair(repaired, report.repair);
  CHECK(jorcs::two_phase::isValidCube(repaired));
  CHECK(diagnoseState(repaired).solvable);
}

TEST_CASE("diagnose: a swap changes parity without disturbing the orientation sums")
{
  Cube cube;
  twistCorner(cube, 3, 1);
  const Residues before = residuesOf(cube, true);
  swapCorners(cube, 0, 1);
  const Residues after = residuesOf(cube, true);
  CHECK(after.twist == before.twist);
  CHECK(after.flip == before.flip);
  CHECK(after.parity_mismatch != before.parity_mismatch);
}

TEST_CASE("diagnose: every single-fault repair yields a solvable cube")
{
  jorcs::two_phase::TwoPhaseSolver solver;
  std::mt19937 rng(31);
  for (int trial = 0; trial < 12; ++trial)
  {
    Cube base;
    uint8_t f[54];
    scramble(rng, 12, base, f);

    for (int variant = 0; variant < 3; ++variant)
    {
      Cube broken = base;
      if (variant == 0)
        twistCorner(broken, static_cast<int>(rng() % 8), 1);
      else if (variant == 1)
        flipEdge(broken, static_cast<int>(rng() % 12));
      else
        swapEdges(broken, 0, 1);

      const Report report = diagnoseState(broken);
      REQUIRE(report.well_formed);
      REQUIRE_FALSE(report.solvable);
      REQUIRE(report.repair.needed());

      Cube repaired = broken;
      applyRepair(repaired, report.repair);
      REQUIRE(jorcs::two_phase::isValidCube(repaired));

      const auto result = solver.solve(repaired);
      REQUIRE(result.solved);
      Cube check = repaired;
      for (const auto move : result.moves)
        jorcs::two_phase::applyHtm(check, move);
      CHECK(cubesAreEqual(check, Cube{}));
    }
  }
}

TEST_CASE("diagnose: THE FLAGSHIP -- solving the repair leaves the defect on the chosen piece")
{
  // "Solve it anyway": play the repaired cube's solution on the REAL, broken cube
  // and everything comes home except the one piece we chose to blame -- twisted, in
  // its own home slot. This is what lets the app hand back a real solution for a
  // cube that cannot be solved.
  jorcs::two_phase::TwoPhaseSolver solver;
  std::mt19937 rng(2026);

  for (int trial = 0; trial < 8; ++trial)
  {
    Cube base;
    uint8_t f[54];
    scramble(rng, 15, base, f);

    for (int piece = 0; piece < 8; ++piece)
    {
      // A physically mis-assembled corner: some corner is in its slot turned round.
      Cube broken = base;
      twistCorner(broken, static_cast<int>(rng() % 8), 1 + static_cast<int>(rng() % 2));

      // Blame `piece`, whichever corner that is and wherever it currently sits.
      const Report report = diagnoseCube(broken, SlotStatus{}, piece);
      REQUIRE(report.faults == FAULT_CORNER_TWIST);
      REQUIRE(report.repair.twist_piece == piece);

      Cube repaired = broken;
      applyRepair(repaired, report.repair);
      REQUIRE(jorcs::two_phase::isValidCube(repaired));
      const auto result = solver.solve(repaired);
      REQUIRE(result.solved);

      Cube check = broken;
      for (const auto move : result.moves)
        jorcs::two_phase::applyHtm(check, move);

      Cube expected;
      twistCorner(expected, piece, (3 - report.repair.twist_amount) % 3);
      CHECK(cubesAreEqual(check, expected));
    }
  }
}

TEST_CASE("diagnose: a whole face scanned a quarter turn round is identified")
{
  std::mt19937 rng(5);
  for (int trial = 0; trial < 20; ++trial)
  {
    Cube cube;
    uint8_t f[54];
    scramble(rng, 10, cube, f);

    const int face = static_cast<int>(rng() % 6);
    const int turns = 1 + static_cast<int>(rng() % 3);
    for (int t = 0; t < turns; ++t)
    {
      uint8_t rotated[9];
      for (int r = 0; r < 3; ++r)
        for (int c = 0; c < 3; ++c)
          rotated[r * 3 + c] = f[face * 9 + (2 - c) * 3 + r];
      for (int i = 0; i < 9; ++i)
        f[face * 9 + i] = rotated[i];
    }

    REQUIRE_FALSE(solvableWith(recon(), f));
    const FaceRotation guess = findFaceRotation(recon(), f);
    REQUIRE(guess.found());
    // Undoing the guess must actually produce a solvable cube -- which is the only
    // claim we make to the user.
    uint8_t fixed[54];
    for (int i = 0; i < 54; ++i)
      fixed[i] = f[i];
    for (int t = 0; t < guess.turns; ++t)
    {
      uint8_t rotated[9];
      for (int r = 0; r < 3; ++r)
        for (int c = 0; c < 3; ++c)
          rotated[r * 3 + c] = fixed[guess.face * 9 + (2 - c) * 3 + r];
      for (int i = 0; i < 9; ++i)
        fixed[guess.face * 9 + i] = rotated[i];
    }
    CHECK(solvableWith(recon(), fixed));
  }
}

TEST_CASE("diagnose: one misread sticker is pinned down exactly")
{
  std::mt19937 rng(17);
  int exact = 0, total = 0;
  for (int trial = 0; trial < 40; ++trial)
  {
    Cube cube;
    uint8_t f[54];
    scramble(rng, 10, cube, f);

    int spot;
    do
    {
      spot = static_cast<int>(rng() % 54);
    } while (spot % 9 == 4); // never a centre
    const uint8_t truth = f[spot];
    uint8_t wrong;
    do
    {
      wrong = static_cast<uint8_t>(rng() % 6);
    } while (wrong == truth);
    f[spot] = wrong;

    Suggestion suggestions[8];
    int stored = 0;
    const int n = findRelabels(recon(), f, nullptr, suggestions, 8, &stored);
    REQUIRE(n > 0);
    ++total;
    // Whatever it suggests must genuinely work...
    for (int i = 0; i < stored; ++i)
    {
      uint8_t fixed[54];
      for (int k = 0; k < 54; ++k)
        fixed[k] = f[k];
      fixed[suggestions[i].facelet_a] = static_cast<uint8_t>(suggestions[i].color_a);
      if (suggestions[i].facelet_b >= 0)
        fixed[suggestions[i].facelet_b] = static_cast<uint8_t>(suggestions[i].color_b);
      CHECK(solvableWith(recon(), fixed));
    }
    // ...and in practice it is the actual sticker, uniquely.
    if (n == 1 && suggestions[0].facelet_a == spot && suggestions[0].color_a == truth)
      ++exact;
  }
  MESSAGE("single misread pinned to exactly one square in " << exact << "/" << total << " cases");
  CHECK(exact == total);
}

TEST_CASE("diagnose: the two-misread parity case is offered as a sticker fix")
{
  // The refutation case again: counts all nine, so the cheapest explanation is a
  // PAIR of stickers that swapped colours. Every suggestion must really work.
  uint8_t f[54];
  solvedFacelets(f);
  f[faceletIndex(4, 0, 1, 1)] = 0;
  f[faceletIndex(0, 1, 1, 0)] = 4;

  Suggestion suggestions[512];
  int stored = 0;
  const int n = findRelabels(recon(), f, nullptr, suggestions, 512, &stored);
  REQUIRE(n > 0);
  // This case is genuinely ambiguous -- many pairs of re-readings produce SOME
  // solvable cube -- which is why it must be offered as a shortlist and not as an
  // answer, and why the count is reported alongside.
  MESSAGE("pairs of re-readings that would make this cube solvable: " << n);
  CHECK(n > 1);
  CHECK(stored == n); // the buffer is big enough here to hold them all
  bool found_the_real_one = false;
  for (int i = 0; i < stored; ++i)
  {
    uint8_t fixed[54];
    for (int k = 0; k < 54; ++k)
      fixed[k] = f[k];
    fixed[suggestions[i].facelet_a] = static_cast<uint8_t>(suggestions[i].color_a);
    REQUIRE(suggestions[i].facelet_b >= 0);
    fixed[suggestions[i].facelet_b] = static_cast<uint8_t>(suggestions[i].color_b);
    CHECK(solvableWith(recon(), fixed));

    const int a = suggestions[i].facelet_a, b = suggestions[i].facelet_b;
    if ((a == faceletIndex(4, 0, 1, 1) && b == faceletIndex(0, 1, 1, 0)) ||
        (b == faceletIndex(4, 0, 1, 1) && a == faceletIndex(0, 1, 1, 0)))
      found_the_real_one = true;
  }
  CHECK(found_the_real_one);
}

TEST_CASE("diagnose: a mis-assembled cube has no sticker fix at all")
{
  // The twisted corner: counts are nine of each and no pair of re-readings can
  // rescue it, which is exactly why it gets blamed on the cube.
  uint8_t f[54];
  solvedFacelets(f);
  const int *st = recon().cornerStickers(2);
  const uint8_t a = f[st[0]], b = f[st[1]], c = f[st[2]];
  f[st[0]] = c;
  f[st[1]] = a;
  f[st[2]] = b;

  Suggestion suggestions[8];
  CHECK(findRelabels(recon(), f, nullptr, suggestions, 8) == 0);
  CHECK_FALSE(findFaceRotation(recon(), f).found());
}

TEST_CASE("diagnose: the same argument holds for a flipped edge")
{
  jorcs::two_phase::TwoPhaseSolver solver;
  std::mt19937 rng(11);
  Cube base;
  uint8_t f[54];
  scramble(rng, 15, base, f);

  for (int piece = 0; piece < 12; ++piece)
  {
    Cube broken = base;
    flipEdge(broken, static_cast<int>(rng() % 12));

    const Report report = diagnoseCube(broken, SlotStatus{}, 2, piece);
    REQUIRE(report.faults == FAULT_EDGE_FLIP);
    REQUIRE(report.repair.flip_piece == piece);

    Cube repaired = broken;
    applyRepair(repaired, report.repair);
    const auto result = solver.solve(repaired);
    REQUIRE(result.solved);

    Cube check = broken;
    for (const auto move : result.moves)
      jorcs::two_phase::applyHtm(check, move);

    Cube expected;
    flipEdge(expected, piece);
    CHECK(cubesAreEqual(check, expected));
  }
}
