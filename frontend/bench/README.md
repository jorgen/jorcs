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

## What the room's brightness was costing

The same argument as the chroma stretch, on the lightness axis, and the bigger of the
two. A webcam in a room reports every square far darker than the references — the cube
in the scan above measures a mean L* of 29.6 against references averaging 65 — and
`stickerCost` charged that whole gap to every square.

On a finished cube that costs nothing: all 54 readings move together and the cheapest
permutation does not change. On a partial scan the nine-of-each rule is an upper bound
rather than an equality, so nothing absorbs it and every square is dragged toward
whichever reference is darkest. Which is why the face in front of the camera showed a
wrong square about half the time while the finished cube came out at 0.1 of 54: the
scan was never as bad as it looked, but the thing on screen was.

`measurementLightnessOffset` subtracts it. Being a translation it only ever adds one
constant per square and one per colour to the cost, and a tight assignment cancels
both, so it cannot move a finished cube. Wrong squares on each face as it is scanned:

    neutral, bright   [0.34 0.37 0.28 0.22 0.09] -> [0.26 0.27 0.18 0.19 0.08]
    warm, dim         [0.88 0.82 0.60 0.50 0.28] -> [0.43 0.28 0.26 0.15 0.16]
    warm, very dim    [2.34 2.04 1.76 1.47 0.82] -> [0.80 0.70 0.54 0.46 0.29]
    heavy drift       [2.20 2.17 2.16 1.66 1.44] -> [1.64 1.73 1.70 1.51 1.42]

with final errors and clean-scan rates unchanged to the digit. The benchmark asserts
the invariance rather than the numbers: re-run any scan 25 L* darker and not one square
may move, finished cube or partial. Before this, a partial scan moved 159–708 squares
per 200 under that shift, and a finished cube already moved none.

The chroma stretch's cap needed the same treatment. It was documented as the thing that
stops noise being inflated into colour on an all-white face, and it is not — the ratio
there runs to about 27, so the cap still applies its full 4x to nine readings of sensor
noise. `CHROMA_NOISE_FLOOR` fades the stretch out when there is no chroma to measure
from instead. Scanning the white side first is a common opening; across the six
single-colour first faces this takes 0.59 wrong of 9 to 0.23, orange alone 3.27 to 0.69.

## Two corrections to the section above

The chroma stretch's heavy-drift cost is **white balance, not exposure**. Splitting the
harness's `drift` into its two components: ±45% pure exposure drift leaves the stretch
ahead (0.18 against 0.41 final), while pure white-balance wander accounts for the whole
regression. The sentence above blaming "every face exposed differently" has it backwards.

And that world does not resemble the camera it was written for. Measured off two frames
of the real scan above — the same wall patches, one frame with a cube and a hand in it,
the other with a face — exposure moves about 7% and white balance at most 1.1%, against
the ±45% independent per-channel gain the world assumes. Per-face chroma estimation was
built and measured as the fix and rejected: it recovers under half the gap even in that
world, and loses on every degenerate face and in a world calibrated to the real camera.

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
