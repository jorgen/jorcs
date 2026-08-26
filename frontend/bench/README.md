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

## What a real scan corrected

The model assumed a camera reports roughly the sticker's own colour. A real webcam
renders far flatter than that, and every benchmark here missed a bug that one real
scan found immediately: yellow squares labelled white and an orange labelled red.

The mechanism is that the references are the colours the *viewer* paints, as
saturated as a screen can make them, while white sits at the achromatic origin. A
washed-out reading lands inside that constellation, so plain distance drags it
toward white -- and it takes the most saturated colours first: yellow gives way at
about half its reference chroma, orange just after, blue not until a sixth.

`measurementChromaScale` now stretches the measurements back out to the scale the
references live on, using one number taken from the cube itself. On the first face,
where nine squares against a cap of nine is no constraint at all, that takes errors
from 6.6 of 9 to 0.5 at the flattest setting, and roughly halves them everywhere
else. `saturation` and `flatten` are now part of `harness.mjs`, and
`assignment.bench.mjs` asserts on them, so this cannot go unnoticed again.

It costs something in the heavy-drift world (final errors 2.6 -> 3.4): one global
chroma scale fits worse when every face is exposed differently. That trade is worth
taking, and per-face exposure swings got smaller when the camera stopped being
restarted between captures.

## The world model is the weak link

`harness.mjs` models per-cube sticker variation, fade as a contraction toward grey,
a diagonal illuminant, exposure, per-square shading and sensor noise, and 8-bit
clipping. It does not model lens flare, mixed lighting across one face, a camera's
non-diagonal colour matrix (except where a benchmark adds one deliberately), or
motion blur. The numbers rank the options reliably; treat the absolute percentages
as indicative only.

**Only one real scan has ever been compared against this**, and it found a bug none
of the benchmarks did — see above. When a real scan and this harness disagree, the
harness is wrong.
