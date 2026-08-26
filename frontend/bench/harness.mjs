// Shared simulation for the benchmarks: colour plumbing, a model of a cube under
// a light, and a deterministic RNG so every number here reproduces exactly.
//
// The world model is the weak link in all of this, and it is worth being explicit
// about what it does and does not claim. It models: per-cube sticker colour
// variation (brand), sticker fade as a radial contraction toward grey, a diagonal
// illuminant, exposure, per-square shading from the face's tilt, per-square sensor
// noise, clipping at 8 bits, and how flat the camera renders (see `saturation`).
// It does not model lens flare, mixed lighting across one face, a camera's
// non-diagonal colour matrix (except where a benchmark adds one explicitly), or
// motion blur. Results rank the options reliably; the absolute percentages are only
// as good as this model.
//
// `saturation` was added after the model was caught being wrong. It assumed a
// camera reports roughly the sticker's own colour; a real webcam renders far
// flatter than that, and every benchmark here missed a bug that a real scan found
// in one shot. Anything below about 0.5 is where the interesting failures live.

// ---------- colour ----------
const M = [
  [0.4124, 0.3576, 0.1805],
  [0.2126, 0.7152, 0.0722],
  [0.0193, 0.1192, 0.9505],
];
const MINV = [
  [3.2406, -1.5372, -0.4986],
  [-0.9689, 1.8758, 0.0415],
  [0.0557, -0.204, 1.057],
];
const Xn = 0.95047;
const Zn = 1.08883;
const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
const finv = (v) => {
  const c = v * v * v;
  return c > 0.008856 ? c : (v - 16 / 116) / 7.787;
};

export const srgbToLinear = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
export const linearToSrgb = (c) =>
  255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

export function linearToLab(rl, gl, bl) {
  const X = (M[0][0] * rl + M[0][1] * gl + M[0][2] * bl) / Xn;
  const Y = M[1][0] * rl + M[1][1] * gl + M[1][2] * bl;
  const Z = (M[2][0] * rl + M[2][1] * gl + M[2][2] * bl) / Zn;
  const fx = f(X);
  const fy = f(Y);
  const fz = f(Z);
  return { L: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

// Exact inverse of the above, so a measurement can be moved into linear RGB,
// scaled by an illuminant estimate, and moved back without losing anything.
export function labToLinear(lab) {
  const fy = (lab.L + 16) / 116;
  const fx = fy + lab.a / 500;
  const fz = fy - lab.b / 200;
  const X = finv(fx) * Xn;
  const Y = finv(fy);
  const Z = finv(fz) * Zn;
  return [
    MINV[0][0] * X + MINV[0][1] * Y + MINV[0][2] * Z,
    MINV[1][0] * X + MINV[1][1] * Y + MINV[1][2] * Z,
    MINV[2][0] * X + MINV[2][1] * Y + MINV[2][2] * Z,
  ];
}

export const srgbToLab = (r, g, b) =>
  linearToLab(srgbToLinear(r), srgbToLinear(g), srgbToLinear(b));

// ---------- deterministic RNG ----------
export function rngFor(seed) {
  let a = seed | 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- the cube ----------
// Colour ids follow COLOR_NAMES: red, orange, white, yellow, green, blue.
export const COLORS = ['red', 'orange', 'white', 'yellow', 'green', 'blue'];

// Typical measured vinyl sticker colours under neutral light -- deliberately not
// the idealised FACE_COLORS hex values, which no real cube matches.
export const TYPICAL = [
  [168, 42, 52],
  [222, 110, 40],
  [228, 228, 222],
  [235, 205, 60],
  [40, 150, 90],
  [35, 85, 160],
];

// A cube far from the canonical references: dark red-leaning orange, pale yellow,
// teal green, cream white. Used to check that the labelling does not secretly
// depend on the references being right.
export const FAR_FROM_REFERENCE = [
  [150, 55, 58],
  [186, 96, 54],
  [236, 232, 205],
  [228, 214, 120],
  [62, 146, 120],
  [52, 92, 150],
];

// One physical cube: per-colour sticker values, jittered, optionally faded.
// `fade` pulls each colour toward its own grey, which is what a used cube does and
// what no white-balance model can express.
export function makeBrand(rng, { fade = 0, base = TYPICAL } = {}) {
  const jitter = (v, spread) =>
    Math.max(0, Math.min(255, v + (rng() - 0.5) * 2 * spread));
  // Many cubes have a dark, red-leaning orange; that is the classic red/orange
  // confusion, so it is sampled rather than fixed.
  const orangeDarkness = rng();
  const brand = base.map((rgb, id) => {
    // Same jitter magnitudes whatever the base, so two bases can be compared.
    if (id === 1) {
      return [
        jitter(rgb[0] - 55 * orangeDarkness, 25),
        jitter(rgb[1] - 40 * orangeDarkness, 15),
        jitter(rgb[2], 12),
      ];
    }
    return rgb.map((v) => jitter(v, id === 2 ? 15 : 20));
  });
  if (fade > 0) {
    for (let id = 0; id < 6; id++) {
      if (id === 2) continue; // white cannot fade toward grey in the same way
      const p = brand[id];
      const mean = (p[0] + p[1] + p[2]) / 3;
      for (let k = 0; k < 3; k++) p[k] = p[k] * (1 - fade) + mean * fade;
    }
  }
  return brand;
}

// A real cube state: exactly nine stickers of each colour, and six distinct
// centres. Facelet numbering is face * 9 + row * 3 + col.
export function makeTruth(rng) {
  const bag = [];
  for (let id = 0; id < 6; id++) for (let i = 0; i < 9; i++) bag.push(id);
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
  const centres = [0, 1, 2, 3, 4, 5];
  for (let i = 5; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [centres[i], centres[j]] = [centres[j], centres[i]];
  }
  const truth = new Array(54);
  const pool = bag.slice();
  for (let face = 0; face < 6; face++) {
    const want = centres[face];
    pool.splice(pool.indexOf(want), 1);
    truth[face * 9 + 4] = want;
  }
  let p = 0;
  for (let i = 0; i < 54; i++) {
    if (i % 9 === 4) continue;
    truth[i] = pool[p++];
  }
  return truth;
}

// What the camera reports for one sticker. `saturation` scales the reported chroma
// and `flatten` pulls lightness toward mid grey -- together, how flat this camera
// renders. Applied after the sensor model because that is where it comes from: the
// pipeline that turns sensor counts into an image, not the light.
export function sample(
  rng,
  brand,
  colorId,
  { gains, exposure, shadeSpread = 0.32, noise = 0.04, crosstalk = 0, saturation = 1, flatten = 0 },
) {
  const shade = 1 - shadeSpread / 2 + shadeSpread * rng();
  let v = [0, 1, 2].map(
    (k) => srgbToLinear(brand[colorId][k]) * gains[k] * exposure * shade * (1 + noise * (rng() - 0.5)),
  );
  if (crosstalk > 0) {
    v = [0, 1, 2].map((k) => v[k] * (1 - 2 * crosstalk) + crosstalk * (v[(k + 1) % 3] + v[(k + 2) % 3]));
  }
  const lab = srgbToLab(...v.map((c) => Math.max(0, Math.min(255, linearToSrgb(Math.min(1, c))))));
  if (saturation === 1 && flatten === 0) return lab;
  return {
    L: lab.L * (1 - flatten) + 70 * flatten,
    a: lab.a * saturation,
    b: lab.b * saturation,
  };
}

// The order the app walks the faces in (useCubeStore.sideOrder).
export const SIDE_ORDER = [0, 5, 1, 4, 2, 3];

/**
 * A whole scan. Each face is captured at its own moment, so it gets its own
 * exposure and white balance -- `drift` is how much they wander between faces.
 * Returns the truth and the measurement per facelet.
 */
export function makeScan(seed, world) {
  const { gains = [1, 1, 1], exposure = 1, fade = 0, drift = 0, base = TYPICAL, crosstalk = 0, shadeSpread = 0.32, noise = 0.04, saturation = 1, flatten = 0 } = world;
  const rng = rngFor(seed);
  const brand = makeBrand(rng, { fade, base });
  const truth = makeTruth(rng);
  const labs = new Array(54);
  for (const face of SIDE_ORDER) {
    const faceGains = gains.map((v) => v * (1 + drift * (rng() - 0.5) * 2));
    const faceExposure = exposure * (1 + drift * (rng() - 0.5) * 2);
    for (let k = 0; k < 9; k++) {
      const facelet = face * 9 + k;
      labs[facelet] = sample(rng, brand, truth[facelet], {
        gains: faceGains,
        exposure: faceExposure,
        shadeSpread,
        noise,
        crosstalk,
        saturation,
        flatten,
      });
    }
  }
  return { truth, labs, measurements: labs.map((lab, facelet) => ({ facelet, lab })) };
}

// ---------- reporting ----------
export function countErrors(colorOf, truth, facelets) {
  let wrong = 0;
  for (const facelet of facelets) if (colorOf.get(facelet) !== truth[facelet]) wrong++;
  return wrong;
}

export const ALL_FACELETS = Array.from({ length: 54 }, (_, i) => i);

let failures = 0;
export function check(name, condition, detail = '') {
  if (condition) return;
  failures++;
  console.log(`  FAIL: ${name}${detail ? ` -- ${detail}` : ''}`);
}
export function finish(label) {
  if (failures > 0) {
    console.log(`\n${label}: ${failures} check(s) failed`);
    process.exitCode = 1;
  } else {
    console.log(`\n${label}: all checks passed`);
  }
}
