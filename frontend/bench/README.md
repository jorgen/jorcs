# Colour-recognition benchmarks

Simulation harnesses for the scanning pipeline. They exercise the real modules from
`src/` against a synthetic cube under a synthetic light, so a change to the colour
model can be judged by a number rather than by argument.

```
npm run bench                  # all three
node bench/assignment.bench.mjs
node bench/measurement.bench.mjs
node bench/calibration.bench.mjs
```

`build.mjs` compiles the handful of `src/` modules the benchmarks need into
`bench/.build/` (gitignored) and rewrites tsc's extensionless import specifiers,
which Vite resolves but node does not. Everything is seeded, so the numbers
reproduce exactly.

## What each one is for

**`assignment.bench.mjs`** — correctness and accuracy of `src/cubeAssignment.ts`.
The Jonker-Volgenant solver is hand-rolled, so it is checked against exhaustive
search on 500 random matrices (including ties, negatives and rectangular shapes)
rather than trusted. Then the capacity and pin invariants, and the accuracy of a
whole scan face by face. This is the closest thing the frontend has to a test
suite; run it after touching the labeller.

**`measurement.bench.mjs`** — what a bad reading costs. This is the one that says
where to spend effort.

**`calibration.bench.mjs`** — the record of why there is no colour calibration in
the app. Illuminant estimation, per-colour reference offsets, correction-driven
gain and per-camera persistence were all built and measured; none of them helped.
Re-run this before rebuilding any of them.

## What they showed

The nine-of-each-colour constraint does nearly all the work. Classifying each
square on its own gets roughly 10 of 54 wrong under warm indoor light; the
constraint takes that to well under one, and the errors that remain clear
themselves as more faces arrive — the final answer is better than any single face
was at the time it was scanned.

What the constraint does not fix is a **confidently wrong measurement**. Because a
wrong square evicts a correct one of the same colour, one bad reading costs about
2.3 squares rather than one. But that is specific to confident errors: a deep
shadow costs about 0.4, because a dark washed-out reading does not strongly claim
any colour and the assignment parks it correctly anyway. Letting a doubtful square
abstain instead of vote takes a bad reading from 2.3 squares to 0.5 — with 53 good
readings and one abstention, nine-of-each determines the missing square outright.

Colour calibration, by contrast, has almost nothing to offer. The constraint is
close to invariant to what calibration corrects: a shift in the light moves all 54
measurements together and usually leaves the cheapest permutation unchanged. On a
cube far from the references the labelling is genuinely imperfect (~2.7 of 54), but
calibration makes it slightly worse rather than better, and on a partial scan it is
worse again — nine squares are not a fair sample of six colours, so the illuminant
estimate is biased early and the EM step fits noise and then reinforces it.

## The world model is the weak link

`harness.mjs` models per-cube sticker variation, fade as a contraction toward grey,
a diagonal illuminant, exposure, per-square shading and sensor noise, and 8-bit
clipping. It does not model lens flare, mixed lighting across one face, a camera's
non-diagonal colour matrix (except where a benchmark adds one deliberately), or
motion blur. **No real cube has been measured against any of this.** The numbers
rank the options reliably; treat the absolute percentages as indicative only.
