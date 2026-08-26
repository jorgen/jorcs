// Correctness and accuracy of the whole-cube labeller (src/cubeAssignment.ts).
//
// The Hungarian implementation is hand-rolled, so it is checked against exhaustive
// search rather than trusted. The rest measures what the labelling actually buys.
import { build } from './build.mjs';
const out = build();
const { solveAssignment, assignWithCapacity, relabelCube } = await import(`${out}/cubeAssignment.js`);
const { CANONICAL_LABS } = await import(`${out}/colorRecognition.js`);
const { colorTally, preflight, colorId, COLOR_NAMES } = await import(`${out}/cubeDiagnosis.js`);
const { blankCubeColors } = await import(`${out}/cubeColors.js`);
import { rngFor, makeScan, makeTruth, countErrors, ALL_FACELETS, SIDE_ORDER, check, finish } from './harness.mjs';

console.log('=== cubeAssignment: correctness ===\n');

// --- the Hungarian, against exhaustive search ---
{
  // No pruning: with negative costs a partial sum above the best so far can still
  // finish below it, so a branch-and-bound reference would be wrong, not the solver.
  const brute = (cost, n, m) => {
    let best = Infinity;
    const used = new Array(m).fill(false);
    const rec = (i, acc) => {
      if (i === n) {
        if (acc < best) best = acc;
        return;
      }
      for (let j = 0; j < m; j++) {
        if (used[j]) continue;
        used[j] = true;
        rec(i + 1, acc + cost[i * m + j]);
        used[j] = false;
      }
    };
    rec(0, 0);
    return best;
  };
  let wrong = 0;
  const TRIALS = 500;
  for (let t = 0; t < TRIALS; t++) {
    const rng = rngFor(t * 7919 + 13);
    const n = 1 + Math.floor(rng() * 5);
    const m = n + Math.floor(rng() * 3);
    const cost = new Float64Array(n * m);
    // integers (many ties) and reals (negatives included)
    for (let i = 0; i < n * m; i++) cost[i] = t % 3 === 0 ? Math.round(rng() * 6) : rng() * 200 - 100;
    const got = solveAssignment(cost, n, m);
    const total = got.reduce((s, j, i) => s + cost[i * m + j], 0);
    if (Math.abs(total - brute(cost, n, m)) > 1e-9 || new Set(got).size !== n) wrong++;
  }
  check(`Hungarian is optimal on ${TRIALS} random matrices (ties, negatives, rectangular)`, wrong === 0, `${wrong} wrong`);
}

// --- capacity ---
{
  const rng = rngFor(99);
  const costs = new Float64Array(54 * 6);
  for (let i = 0; i < 54 * 6; i++) costs[i] = rng() * 1000;
  const counts = new Array(6).fill(0);
  assignWithCapacity(costs, 54, [9, 9, 9, 9, 9, 9]).forEach((c) => counts[c]++);
  check('54 items fill exactly nine of each colour', counts.every((c) => c === 9), JSON.stringify(counts));

  const same = new Float64Array(12 * 6);
  for (let i = 0; i < 12; i++) for (let k = 0; k < 6; k++) same[i * 6 + k] = k === 3 ? 0 : 500;
  const forced = new Array(6).fill(0);
  assignWithCapacity(same, 12, [9, 9, 9, 9, 9, 9]).forEach((c) => forced[c]++);
  check('twelve identical yellows cannot all be yellow', forced[3] === 9, JSON.stringify(forced));

  check('over capacity returns null', assignWithCapacity(new Float64Array(60 * 6), 60, [9, 9, 9, 9, 9, 9]) === null);
  check('zero items is empty, not an error', JSON.stringify(assignWithCapacity(new Float64Array(0), 0, [9, 9, 9, 9, 9, 9])) === '[]');
}

// --- invariants on adversarial input ---
{
  const rng = rngFor(5);
  const noise = Array.from({ length: 54 }, (_, facelet) => ({
    facelet,
    lab: { L: rng() * 100, a: rng() * 160 - 80, b: rng() * 160 - 80 },
  }));
  const { colorOf } = relabelCube(noise, [], CANONICAL_LABS);
  const counts = new Array(6).fill(0);
  for (let i = 0; i < 54; i++) counts[colorOf.get(i)]++;
  check('pure noise still yields nine of each', counts.every((c) => c === 9), JSON.stringify(counts));
  check('pure noise still yields six distinct centres', new Set([4, 13, 22, 31, 40, 49].map((i) => colorOf.get(i))).size === 6);
  check('nothing measured is not an error', relabelCube([], [], CANONICAL_LABS).colorOf.size === 0);
}

// --- pins ---
{
  const confident = Array.from({ length: 54 }, (_, facelet) => ({ facelet, lab: CANONICAL_LABS[Math.floor(facelet / 9)] }));
  const { colorOf } = relabelCube(confident, [{ facelet: 0, color: 5 }], CANONICAL_LABS);
  check('a pin is honoured over a confident measurement', colorOf.get(0) === 5);
  const counts = new Array(6).fill(0);
  for (let i = 0; i < 54; i++) counts[colorOf.get(i)]++;
  check('a pin does not create a tenth of its colour', counts.every((c) => c === 9), JSON.stringify(counts));

  const many = Array.from({ length: 10 }, (_, i) => ({ facelet: i < 4 ? i : i + 1, color: 3 }));
  const over = relabelCube(confident, many, CANONICAL_LABS);
  check('ten pins of one colour are reported', over.overPinned.includes(3), JSON.stringify(over.overPinned));
  check('all ten pins are still honoured exactly', many.every((p) => over.colorOf.get(p.facelet) === 3));
}

console.log('\n=== accuracy: a scan, face by face ===\n');

const WORLDS = {
  'neutral, bright': { gains: [1, 1, 1], exposure: 1.0, fade: 0, drift: 0.05 },
  'warm, dim': { gains: [1, 0.84, 0.6], exposure: 0.5, fade: 0, drift: 0.1 },
  'warm, very dim': { gains: [1, 0.78, 0.5], exposure: 0.3, fade: 0, drift: 0.15 },
  'faded cube, warm': { gains: [1, 0.84, 0.6], exposure: 0.6, fade: 0.4, drift: 0.1 },
  'heavy exposure drift': { gains: [1, 0.84, 0.6], exposure: 0.55, fade: 0.2, drift: 0.45 },
};
const N = 250;
console.log('  world                    final errors   clean scans   wrong squares on each face as it is scanned');
for (const [name, world] of Object.entries(WORLDS)) {
  let total = 0;
  let clean = 0;
  const perFace = [0, 0, 0, 0, 0, 0];
  for (let s = 0; s < N; s++) {
    const { truth, measurements } = makeScan(s * 7919 + name.length, world);
    const seen = [];
    SIDE_ORDER.forEach((face, step) => {
      for (let k = 0; k < 9; k++) seen.push(measurements[face * 9 + k]);
      const { colorOf } = relabelCube(seen, [], CANONICAL_LABS);
      perFace[step] += countErrors(colorOf, truth, Array.from({ length: 9 }, (_, k) => face * 9 + k));
      if (step === 5) {
        const e = countErrors(colorOf, truth, ALL_FACELETS);
        total += e;
        if (!e) clean++;
      }
    });
  }
  console.log(
    `  ${name.padEnd(22)} ${(total / N).toFixed(2).padStart(9)}   ${String(Math.round((100 * clean) / N)).padStart(9)}%   [${perFace.map((v) => (v / N).toFixed(2)).join(' ')}]`,
  );
}
console.log('\n  The per-face column is what the user sees at the moment they look at a');
console.log('  face. It falls as more of the cube is measured, and earlier faces correct');
console.log('  themselves -- which is why the final answer is better than any face was.');

console.log('\n=== a camera that renders flat, which is the case a real scan found ===\n');
console.log('  A webcam reports far less chroma than the viewer paints. Whatever is');
console.log('  measured then sits inside the reference constellation, and white -- at');
console.log('  the origin -- is the nearest reference to anything short of chroma.');
console.log('  The first face is where this bites, because nine squares against a cap');
console.log('  of nine is no constraint at all: it is nearest-reference and nothing else.\n');
console.log('  saturation   face 1 (of 9)   whole cube (of 54)');
for (const saturation of [1.0, 0.8, 0.65, 0.5, 0.4, 0.3]) {
  let firstFace = 0;
  let whole = 0;
  const runs = 200;
  for (let s = 0; s < runs; s++) {
    const world = { gains: [1, 0.9, 0.78], exposure: 0.8, saturation, flatten: (1 - saturation) * 0.45 };
    const { truth, measurements } = makeScan(s * 7919 + Math.round(saturation * 100), world);
    const face = SIDE_ORDER[0];
    const faceFacelets = Array.from({ length: 9 }, (_, k) => face * 9 + k);
    firstFace += countErrors(
      relabelCube(faceFacelets.map((f) => measurements[f]), [], CANONICAL_LABS).colorOf,
      truth,
      faceFacelets,
    );
    whole += countErrors(relabelCube(measurements, [], CANONICAL_LABS).colorOf, truth, ALL_FACELETS);
  }
  console.log(
    `  ${saturation.toFixed(2).padStart(8)}   ${(firstFace / runs).toFixed(2).padStart(13)}   ${(whole / runs).toFixed(2).padStart(18)}`,
  );
  if (saturation <= 0.5) {
    check(
      `a flat camera (saturation ${saturation}) still reads the first face`,
      firstFace / runs < 1.0,
      `${(firstFace / runs).toFixed(2)} wrong of 9`,
    );
  }
}

console.log('\n=== the grid the app ends up with is legal ===\n');
{
  let badTally = 0;
  let badPreflight = 0;
  const runs = 200;
  for (let s = 0; s < runs; s++) {
    const { truth, measurements } = makeScan(s * 31 + 3, WORLDS['warm, dim']);
    const { colorOf } = relabelCube(measurements, [], CANONICAL_LABS);
    const grid = blankCubeColors();
    for (const [facelet, id] of colorOf) {
      grid[Math.floor(facelet / 9)][Math.floor((facelet % 9) / 3)][facelet % 3] = COLOR_NAMES[id];
    }
    const t = colorTally(grid);
    if (!t.tallies.every((x) => x.count === 9) || t.scanned !== 54) badTally++;
    const pre = preflight(grid);
    if (!pre.ok || pre.countFault) badPreflight++;
    void truth;
  }
  check('every scan tallies nine of each', badTally === 0, `${badTally} of ${runs}`);
  check('every scan produces a grid preflight accepts', badPreflight === 0, `${badPreflight} of ${runs}`);
}
{
  const partial = makeScan(555, WORLDS['warm, dim']);
  const three = partial.measurements.filter((m) => m.facelet < 27);
  const { colorOf } = relabelCube(three, [], CANONICAL_LABS);
  const grid = blankCubeColors();
  for (const [facelet, id] of colorOf) {
    grid[Math.floor(facelet / 9)][Math.floor((facelet % 9) / 3)][facelet % 3] = COLOR_NAMES[id];
  }
  const t = colorTally(grid);
  check('a partial scan counts only what was scanned', t.scanned === 27, String(t.scanned));
  check('a partial scan never exceeds nine of a colour', t.tallies.every((x) => x.count <= 9));
  check('a partial scan leaves unscanned faces blank', grid[3].flat().every((c) => colorId(c) === -1));
  const pre = preflight(grid);
  check('a partial scan reads as unscanned, not as broken', !pre.ok && pre.fault.kind === 'unscanned', String(pre.fault?.kind));
}
void makeTruth;

finish('assignment.bench');
