// What a BAD MEASUREMENT costs, now that the constraint does the labelling.
//
// This is the benchmark that says where to spend effort. Classifying each square on
// its own loses one square per bad reading. An assignment can lose more, because a
// confidently wrong square displaces a correct one of that colour -- but only if it
// is confident. A weak reading is nearly free, because it does not compete.
import { build } from './build.mjs';
const out = build();
const { relabelCube } = await import(`${out}/cubeAssignment.js`);
const { CANONICAL_LABS } = await import(`${out}/colorRecognition.js`);
import { rngFor, makeBrand, makeTruth, sample, TYPICAL } from './harness.mjs';

const WORLD = { gains: [1, 0.84, 0.6], exposure: 0.55, shadeSpread: 0.28, noise: 0.04 };

const nearestOnItsOwn = (lab) => {
  let best = 0;
  let bestCost = Infinity;
  for (let k = 0; k < 6; k++) {
    const r = CANONICAL_LABS[k];
    const cost = 0.7 * (lab.L - r.L) ** 2 + (lab.a - r.a) ** 2 + (lab.b - r.b) ** 2;
    if (cost < bestCost) {
      bestCost = cost;
      best = k;
    }
  }
  return best;
};

// How a corrupted square goes wrong.
const CORRUPTIONS = {
  'crop straddled onto a neighbouring sticker': (lab, rng, brand, truth) => {
    let other = Math.floor(rng() * 6);
    if (other === truth) other = (other + 1) % 6;
    return sample(rng, brand, other, WORLD);
  },
  'deep shadow': (lab) => ({ L: lab.L * 0.35, a: lab.a * 0.35, b: lab.b * 0.35 }),
  'blown glare': (lab) => ({ L: Math.min(100, lab.L * 1.5 + 30), a: lab.a * 0.2, b: lab.b * 0.2 }),
};

function scanWithCorruption(seed, badCount, corrupt, { abstain = false } = {}) {
  const rng = rngFor(seed);
  const brand = makeBrand(rng, { base: TYPICAL });
  const truth = makeTruth(rng);
  const labs = new Array(54);
  for (let i = 0; i < 54; i++) labs[i] = sample(rng, brand, truth[i], WORLD);

  // Corrupt non-centre squares only; a centre is a different (worse) story.
  const candidates = [...Array(54).keys()].filter((i) => i % 9 !== 4);
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  const bad = new Set(candidates.slice(0, badCount));
  for (const i of bad) labs[i] = corrupt(labs[i], rng, brand, truth[i]);

  const measurements = [];
  for (let i = 0; i < 54; i++) {
    if (abstain && bad.has(i)) continue;
    measurements.push({ facelet: i, lab: labs[i] });
  }
  const { colorOf } = relabelCube(measurements, [], CANONICAL_LABS);

  // An abstaining square is not unlabelled: the nine-of-each rule places it by what
  // is left over.
  if (abstain) {
    const used = new Array(6).fill(0);
    for (const [, c] of colorOf) used[c]++;
    const leftovers = [];
    for (let c = 0; c < 6; c++) for (let n = used[c]; n < 9; n++) leftovers.push(c);
    let p = 0;
    for (let i = 0; i < 54; i++) if (!colorOf.has(i)) colorOf.set(i, leftovers[p++]);
  }

  let assigned = 0;
  let independent = 0;
  let collateral = 0;
  for (let i = 0; i < 54; i++) {
    if (colorOf.get(i) !== truth[i]) {
      assigned++;
      if (!bad.has(i)) collateral++;
    }
    if (nearestOnItsOwn(labs[i]) !== truth[i]) independent++;
  }
  return { assigned, independent, collateral };
}

const N = 300;
console.log('=== what one bad reading costs (errors out of 54) ===\n');
for (const [name, corrupt] of Object.entries(CORRUPTIONS)) {
  console.log(name);
  console.log('  bad squares   classified alone   assignment   of which collateral');
  for (const badCount of [0, 1, 2, 3, 5, 8]) {
    let a = 0;
    let i2 = 0;
    let c = 0;
    for (let s = 0; s < N; s++) {
      const r = scanWithCorruption(s * 7919 + badCount * 13 + name.length, badCount, corrupt);
      a += r.assigned;
      i2 += r.independent;
      c += r.collateral;
    }
    console.log(
      `  ${String(badCount).padStart(6)}       ${(i2 / N).toFixed(2).padStart(14)}   ${(a / N).toFixed(2).padStart(10)}   ${(c / N).toFixed(2).padStart(18)}`,
    );
  }
  console.log('');
}
console.log('Shadow is nearly free; a straddled crop and blown glare are not. The');
console.log('difference is confidence -- a dark washed-out reading does not strongly');
console.log('claim any colour, so the assignment parks it correctly anyway.\n');

console.log('=== so: would abstaining beat competing? ===\n');
console.log('  bad squares   competing at full confidence   abstaining');
for (const badCount of [1, 2, 3, 5, 8]) {
  let competing = 0;
  let abstaining = 0;
  for (let s = 0; s < N; s++) {
    const seed = s * 7919 + badCount * 13;
    const corrupt = CORRUPTIONS['crop straddled onto a neighbouring sticker'];
    competing += scanWithCorruption(seed, badCount, corrupt).assigned;
    abstaining += scanWithCorruption(seed, badCount, corrupt, { abstain: true }).assigned;
  }
  console.log(
    `  ${String(badCount).padStart(6)}       ${(competing / N).toFixed(2).padStart(26)}   ${(abstaining / N).toFixed(2).padStart(10)}`,
  );
}
console.log('\nWith 53 good readings and one abstention the nine-of-each rule determines');
console.log('the missing square outright. This is the argument for measuring per-square');
console.log('confidence (spread within the sampled crop, or how much of it the shadow');
console.log('and glare gate threw away) and letting a doubtful square decline to vote.');
