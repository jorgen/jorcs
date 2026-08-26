// Why there is no colour calibration in the app.
//
// Adapting to the camera and the room is an obvious idea and a well-founded one:
// warm light really does put too much red in the reading, and correcting for it is
// chromatic adaptation. Four versions were built and measured against the labeller:
//
//   stage 2  illuminant gain from the cube's own known mean reflectance
//   stage 3  per-colour reference offsets, fitted by EM after each assignment
//   stage 4  gain re-fitted from labelled squares, corrections weighing most
//   stage 5  the calibration carried into a later scan
//
// None of them earned their place. This file is the evidence, kept runnable so the
// decision can be re-measured rather than re-argued -- if the camera pipeline or the
// world model changes, run it again before assuming the answer still holds.
import { build } from './build.mjs';
const out = build();
const { relabelCube } = await import(`${out}/cubeAssignment.js`);
const { CANONICAL_LABS } = await import(`${out}/colorRecognition.js`);
import {
  labToLinear, linearToLab, makeScan, countErrors, ALL_FACELETS, SIDE_ORDER,
  FAR_FROM_REFERENCE, TYPICAL,
} from './harness.mjs';

// ---------- the estimators ----------
const CUBE_MEAN = (() => {
  const acc = [0, 0, 0];
  for (const lab of CANONICAL_LABS) {
    const l = labToLinear(lab);
    for (let k = 0; k < 3; k++) acc[k] += l[k] / 6;
  }
  return acc;
})();
const CANONICAL_LINEAR = CANONICAL_LABS.map(labToLinear);

const GAIN_CLAMP = Math.log(2.2);
const normalise = (g) => {
  const m = Math.cbrt(Math.max(g[0] * g[1] * g[2], 1e-12));
  return g.map((v) => Math.exp(Math.max(-GAIN_CLAMP, Math.min(GAIN_CLAMP, Math.log(Math.max(v / m, 1e-6))))));
};
const applyGain = (lab, gain) => {
  const l = labToLinear(lab);
  return linearToLab(l[0] * gain[0], l[1] * gain[1], l[2] * gain[2]);
};
const shiftedRefs = (offsets) =>
  CANONICAL_LABS.map((r, k) => ({ L: r.L + offsets[k].L, a: r.a + offsets[k].a, b: r.b + offsets[k].b }));

// stage 2. NOT grey-world: the cube's mean reflectance is strongly red-heavy, and
// assuming grey is worse than not bothering. Trusted in proportion to how much of
// the cube has been seen, because nine squares are not a fair sample of six colours.
function gainFromCubeMean(measurements) {
  const mean = [0, 0, 0];
  for (const m of measurements) {
    const l = labToLinear(m.lab);
    for (let k = 0; k < 3; k++) mean[k] += l[k] / measurements.length;
  }
  const full = normalise([0, 1, 2].map((k) => CUBE_MEAN[k] / Math.max(mean[k], 1e-6)));
  const seen = Math.min(1, measurements.length / 54);
  return normalise([0, 1, 2].map((k) => Math.exp(seen * Math.log(full[k]))));
}

// stage 4. Fit the gain mapping each measurement onto the reference for the colour
// it was called. Channels carrying no information (a reference channel at zero, a
// clipped measurement) contribute nothing; a white square is worth far more than a
// red one, whose green and blue are sensor floor rather than illuminant.
function gainFromLabels(samples) {
  const num = [0, 0, 0];
  const den = [0, 0, 0];
  for (const s of samples) {
    const ref = CANONICAL_LINEAR[s.color];
    for (let k = 0; k < 3; k++) {
      const m = s.linear[k];
      const r = ref[k];
      if (m <= 1e-4 || r <= 1e-4) continue;
      const w = s.weight * Math.min(m, r);
      num[k] += w * Math.log(r / m);
      den[k] += w;
    }
  }
  return normalise([0, 1, 2].map((k) => (den[k] > 1e-9 ? Math.exp(num[k] / den[k]) : 1)));
}

// stage 3. Whatever a gain cannot express -- fade, brand, the camera's own colour
// rendering -- lands in a per-colour residual. Shrunk by the evidence behind it and
// clamped, so one odd face cannot move a reference far.
const OFFSET_TAU = 6;
const OFFSET_CLAMP = 20;
function fitOffsets(labelled) {
  const acc = Array.from({ length: 6 }, () => ({ L: 0, a: 0, b: 0, n: 0 }));
  for (const { lab, color } of labelled) {
    const r = CANONICAL_LABS[color];
    const A = acc[color];
    A.L += lab.L - r.L;
    A.a += lab.a - r.a;
    A.b += lab.b - r.b;
    A.n++;
  }
  return acc.map((A) => {
    if (!A.n) return { L: 0, a: 0, b: 0 };
    const shrink = A.n / (A.n + OFFSET_TAU);
    let o = { L: (shrink * A.L) / A.n, a: (shrink * A.a) / A.n, b: (shrink * A.b) / A.n };
    const mag = Math.hypot(o.a, o.b);
    if (mag > OFFSET_CLAMP) {
      const k = OFFSET_CLAMP / mag;
      o = { L: o.L * k, a: o.a * k, b: o.b * k };
    }
    o.L = Math.max(-OFFSET_CLAMP, Math.min(OFFSET_CLAMP, o.L));
    return o;
  });
}

// EM between "what colour is each square" and "what do this camera, this light and
// this cube actually look like".
function calibratedRelabel(measurements, pins, prior, opts) {
  const { meanGain = false, labelGain = false, offsets: useOffsets = false, iterations = 3, damping = 0.6 } = opts;
  let gain = prior?.gain ? [...prior.gain] : [1, 1, 1];
  let offsets = prior?.offsets ? prior.offsets.map((o) => ({ ...o })) : Array.from({ length: 6 }, () => ({ L: 0, a: 0, b: 0 }));
  if (meanGain && !prior?.gain) gain = gainFromCubeMean(measurements);

  let result = null;
  for (let it = 0; it < iterations; it++) {
    const corrected = measurements.map((m) => ({ facelet: m.facelet, lab: applyGain(m.lab, gain) }));
    result = relabelCube(corrected, pins, useOffsets ? shiftedRefs(offsets) : CANONICAL_LABS);
    const labelled = corrected
      .map((m) => ({ lab: m.lab, color: result.colorOf.get(m.facelet) }))
      .filter((x) => x.color !== undefined);
    if (labelGain && labelled.length) {
      const samples = corrected
        .map((m) => {
          const color = result.colorOf.get(m.facelet);
          if (color === undefined) return null;
          const pinned = pins.some((p) => p.facelet === m.facelet);
          return { linear: labToLinear(m.lab), color, weight: (pinned ? 3 : 1) * (color === 2 ? 3 : 1) };
        })
        .filter(Boolean);
      const step = gainFromLabels(samples);
      gain = normalise([0, 1, 2].map((k) => Math.exp((1 - damping) * Math.log(gain[k]) + damping * Math.log(gain[k] * step[k]))));
    }
    if (useOffsets && labelled.length) offsets = fitOffsets(labelled);
  }
  return { ...result, calibration: { gain, offsets } };
}

const VARIANTS = {
  'shipping (none)': { iterations: 1 },
  'stage 2 (mean gain)': { meanGain: true, iterations: 1 },
  'stage 3 (offsets)': { offsets: true, iterations: 3 },
  'stage 4 (label gain)': { meanGain: true, labelGain: true, iterations: 3 },
  'stages 2+3+4': { meanGain: true, labelGain: true, offsets: true, iterations: 3 },
};
const WORLDS = {
  'neutral, bright': { gains: [1, 1, 1], exposure: 1.0, fade: 0, drift: 0.05 },
  'warm, dim': { gains: [1, 0.84, 0.6], exposure: 0.5, fade: 0, drift: 0.1 },
  'warm, very dim': { gains: [1, 0.78, 0.5], exposure: 0.3, fade: 0, drift: 0.15 },
  'faded cube, warm': { gains: [1, 0.84, 0.6], exposure: 0.6, fade: 0.4, drift: 0.1 },
  'heavy drift': { gains: [1, 0.84, 0.6], exposure: 0.55, fade: 0.2, drift: 0.45 },
};

function incrementalScan(scan, opts, prior) {
  const seen = [];
  const perFace = [];
  let calibration = prior ?? null;
  let final = 0;
  SIDE_ORDER.forEach((face, step) => {
    for (let k = 0; k < 9; k++) seen.push(scan.measurements[face * 9 + k]);
    const outcome = calibratedRelabel(seen, [], calibration, opts);
    calibration = outcome.calibration;
    perFace.push(countErrors(outcome.colorOf, scan.truth, Array.from({ length: 9 }, (_, k) => face * 9 + k)));
    if (step === 5) final = countErrors(outcome.colorOf, scan.truth, ALL_FACELETS);
  });
  return { perFace, final, calibration };
}

const N = 200;
const names = Object.keys(VARIANTS);
console.log('=== stages 2-4 over a whole scan ===\n');
console.log('final errors out of 54, then [wrong squares on each face as it is scanned]\n');
const grand = Object.fromEntries(names.map((n) => [n, 0]));
for (const [wname, world] of Object.entries(WORLDS)) {
  console.log(wname);
  for (const name of names) {
    let total = 0;
    let clean = 0;
    const perFace = [0, 0, 0, 0, 0, 0];
    for (let s = 0; s < N; s++) {
      const r = incrementalScan(makeScan(s * 7919 + wname.length, world), VARIANTS[name], null);
      total += r.final;
      if (!r.final) clean++;
      r.perFace.forEach((v, i) => (perFace[i] += v));
    }
    grand[name] += total;
    console.log(
      `  ${name.padEnd(22)}${(total / N).toFixed(2).padStart(5)}  clean ${String(Math.round((100 * clean) / N)).padStart(3)}%  [${perFace.map((v) => (v / N).toFixed(2)).join(' ')}]`,
    );
  }
  console.log('');
}
console.log('mean final errors across all worlds:');
for (const name of names) console.log(`  ${name.padEnd(22)}${(grand[name] / (N * Object.keys(WORLDS).length)).toFixed(3)}`);

console.log('\n=== the fair test: a cube far from the references ===\n');
console.log('If calibration cannot help here, it cannot help anywhere.\n');
console.log('  cube / camera                    shipping   stages 2+3');
for (const [label, world] of [
  ['reference-like cube', { base: TYPICAL, gains: [1, 0.9, 0.75], exposure: 0.7 }],
  ['far from the references', { base: FAR_FROM_REFERENCE, gains: [1, 0.9, 0.75], exposure: 0.7 }],
  ['far + camera crosstalk', { base: FAR_FROM_REFERENCE, gains: [1, 0.85, 0.62], exposure: 0.55, crosstalk: 0.06 }],
]) {
  let plain = 0;
  let calib = 0;
  for (let s = 0; s < N; s++) {
    const scan = makeScan(s * 7919 + label.length, world);
    plain += countErrors(relabelCube(scan.measurements, [], CANONICAL_LABS).colorOf, scan.truth, ALL_FACELETS);
    calib += countErrors(
      calibratedRelabel(scan.measurements, [], null, { meanGain: true, offsets: true, iterations: 4 }).colorOf,
      scan.truth,
      ALL_FACELETS,
    );
  }
  console.log(`  ${label.padEnd(32)}${(plain / N).toFixed(2).padStart(8)}${(calib / N).toFixed(2).padStart(13)}`);
}

console.log('\n=== where the labelling actually breaks ===\n');
console.log('  shading spread = brightest sampled square over darkest, as a fraction\n');
console.log('  shade  noise    shipping   stages 2+3');
for (const [shadeSpread, noise] of [[0.3, 0.05], [0.6, 0.1], [0.9, 0.2], [1.2, 0.35], [1.5, 0.5], [1.8, 0.7]]) {
  let plain = 0;
  let calib = 0;
  for (let s = 0; s < N; s++) {
    const scan = makeScan(s * 7919 + Math.round(shadeSpread * 100), {
      gains: [1, 0.84, 0.6], exposure: 0.55, shadeSpread, noise,
    });
    plain += countErrors(relabelCube(scan.measurements, [], CANONICAL_LABS).colorOf, scan.truth, ALL_FACELETS);
    calib += countErrors(
      calibratedRelabel(scan.measurements, [], null, { meanGain: true, offsets: true, iterations: 4 }).colorOf,
      scan.truth, ALL_FACELETS,
    );
  }
  console.log(`  ${shadeSpread.toFixed(1)}    ${noise.toFixed(2)}   ${(plain / N).toFixed(2).padStart(9)}${(calib / N).toFixed(2).padStart(13)}`);
}

console.log('\n=== and on partial scans, which is what the user is looking at ===\n');
console.log('  faces scanned   shipping   stages 2+3');
for (const faces of [1, 2, 3, 4, 5, 6]) {
  let plain = 0;
  let calib = 0;
  for (let s = 0; s < N; s++) {
    const scan = makeScan(s * 104729 + faces, { gains: [1, 0.84, 0.6], exposure: 0.55, shadeSpread: 0.9, noise: 0.2 });
    const facelets = SIDE_ORDER.slice(0, faces).flatMap((face) => Array.from({ length: 9 }, (_, k) => face * 9 + k));
    const seen = facelets.map((facelet) => scan.measurements[facelet]);
    plain += countErrors(relabelCube(seen, [], CANONICAL_LABS).colorOf, scan.truth, facelets);
    calib += countErrors(
      calibratedRelabel(seen, [], null, { meanGain: true, offsets: true, iterations: 4 }).colorOf,
      scan.truth, facelets,
    );
  }
  console.log(`  ${String(faces).padStart(6)}       ${(plain / N).toFixed(2).padStart(9)}${(calib / N).toFixed(2).padStart(13)}   (of ${faces * 9} squares)`);
}

console.log('\n=== stage 5: a calibration carried into a later scan ===\n');
console.log('  world                     cold start   warm start   (face 1 errors)');
for (const [wname, world] of Object.entries(WORLDS)) {
  let cold = 0;
  let warm = 0;
  let coldFirst = 0;
  let warmFirst = 0;
  for (let s = 0; s < N; s++) {
    const opts = VARIANTS['stages 2+3+4'];
    const learnt = incrementalScan(makeScan(s * 7919 + wname.length, world), opts, null).calibration;
    const later = makeScan(s * 7919 + wname.length + 500000, world);
    const c = incrementalScan(later, opts, null);
    // restored at a discount, so one fresh face outvotes yesterday
    const discounted = { gain: learnt.gain, offsets: learnt.offsets.map((o) => ({ L: o.L / 2, a: o.a / 2, b: o.b / 2 })) };
    const w = incrementalScan(later, opts, discounted);
    cold += c.final;
    warm += w.final;
    coldFirst += c.perFace[0];
    warmFirst += w.perFace[0];
  }
  console.log(
    `  ${wname.padEnd(24)}${(cold / N).toFixed(2).padStart(10)}${(warm / N).toFixed(2).padStart(13)}   ${(coldFirst / N).toFixed(2)} -> ${(warmFirst / N).toFixed(2)}`,
  );
}

console.log('\nConclusion: on a full cube the labelling is already exact, so there is');
console.log('nothing for a calibration to remove; on a partial scan it makes things');
console.log('worse, because nine squares are not a fair sample of six colours and the');
console.log('EM step fits noise and then reinforces it. It hurts where the user is');
console.log('looking and is redundant where it would be safe.');
