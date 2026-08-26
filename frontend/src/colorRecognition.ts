import type { Lab } from './cubeAssignment';
import { FACE_COLORS } from './cubeColors';

type HSV = {
  h: number;
  s: number;
  v: number;
};

export type RecognizedGrid = {
  // What each square looks like on its own, against the fixed references. This is
  // a first opinion, not the answer: cubeAssignment gets the last word once the
  // whole cube can be weighed at once. Kept because it is the only reading that
  // has not had the nine-of-each rule imposed on it, which makes it the honest
  // input to the colour tally -- an assignment can never report ten yellows, so
  // without this the app would lose its ability to notice a face scanned twice.
  colors: string[][];
  // What the camera actually measured, per square. The raw material every later
  // model needs: keeping only a classification, or only distances computed under
  // whichever classifier was in force at capture time, means a face can never be
  // re-read under a better one.
  labs: Lab[][];
  // Per square, how far the reading sat from each of the six canonical colours.
  distances: number[][][];
};

// Canonical sticker colours in sRGB, mirroring the viewer's FACE_COLORS
// (RubiksCubeApp.tsx). Classification is by nearest colour in the CIELAB
// a*/b* chroma plane rather than by absolute hue thresholds: orange, yellow
// and green are crowded together in hue degrees but sit far apart in a*b*
// (orange +a/+b, yellow ~0a/high +b, green -a), so a small lighting shift no
// longer tips one into another. Calibrate these once against a real solved
// cube under your lighting if the idealised values prove off.
const REFERENCE_COLORS: { name: string; lab: Lab }[] = [
  { name: 'red', lab: rgbToLab(0xc4, 0x1e, 0x3a) },
  { name: 'orange', lab: rgbToLab(0xff, 0x7f, 0x00) },
  { name: 'yellow', lab: rgbToLab(0xff, 0xd5, 0x00) },
  { name: 'green', lab: rgbToLab(0x00, 0x9e, 0x60) },
  { name: 'blue', lab: rgbToLab(0x00, 0x51, 0xba) },
];

// Each reference's direction in the a*b* plane. Classification compares these
// angles rather than straight-line distance -- see classifyLab.
const REFERENCE_HUES = REFERENCE_COLORS.map((ref) => Math.atan2(ref.lab.b, ref.lab.a));

// The same six colours the viewer paints and cubeDiagnosis counts, in CIELAB and
// in canonical colour-id order (red, orange, white, yellow, green, blue). Derived
// from FACE_COLORS so there is one place to change a sticker colour, rather than
// a second list here that can drift out of step with the cube on screen.
export const CANONICAL_LABS: Lab[] = FACE_COLORS.map((hex) => {
  const value = parseInt(hex.slice(1), 16);
  return rgbToLab((value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff);
});

// A sticker is white when it is bright and nearly colourless (low chroma),
// which is illuminant-robust — unlike the old absolute saturation/value test
// that stole glary yellow/orange stickers as "white".
const WHITE_MAX_CHROMA = 30;
const WHITE_MIN_LIGHTNESS = 55;

/**
 * Recognizes colors from the grid in the canvas context.
 * @param ctx - The canvas rendering context.
 * @param canvas - The canvas element.
 * @returns Per square: a provisional colour name, the measured Lab, and the
 *   distance to each canonical colour.
 */
export function recognizeColorsFromGrid(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
): RecognizedGrid {
  const gridColors: string[][] = [];
  const gridLabs: Lab[][] = [];
  const gridDistances: number[][][] = [];
  const gridSize = 3;

  // Determine the size of the square grid (50% of the smaller canvas dimension)
  const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

  // Top-left corner to center the grid
  const gridX = (canvas.width - gridLength) / 2;
  const gridY = (canvas.height - gridLength) / 2;

  const squareSize = gridLength / gridSize;

  for (let row = 0; row < gridSize; row++) {
    const rowColors: string[] = [];
    const rowLabs: Lab[] = [];
    const rowDistances: number[][] = [];
    for (let col = 0; col < gridSize; col++) {
      const x = gridX + col * squareSize;
      const y = gridY + row * squareSize;
      const imageData = ctx.getImageData(x, y, squareSize, squareSize);
      const { colorName, lab, distances } = getDominantColor(imageData);
      rowColors.push(colorName);
      rowLabs.push(lab);
      rowDistances.push(distances);
    }
    gridColors.push(rowColors);
    gridLabs.push(rowLabs);
    gridDistances.push(rowDistances);
  }
  return { colors: gridColors, labs: gridLabs, distances: gridDistances };
}

/**
 * Determines the dominant color of a square by taking a robust median color
 * over the central region (rejecting grout, shadow and specular glare) and
 * classifying it against the canonical cube colors in the CIELAB a-b plane.
 * @param imageData - ImageData of the square region.
 * @returns The color name, the measured Lab, and the distance to each canonical
 *   colour.
 */
function getDominantColor(imageData: ImageData): { colorName: string; lab: Lab; distances: number[] } {
  const { width, height, data } = imageData;

  // Analyze only the central ~60% of the square so the inter-sticker grout,
  // the drawn grid lines and any neighbour bleed at the edges are excluded.
  const x0 = Math.floor(width * 0.2);
  const x1 = Math.max(x0 + 1, Math.ceil(width * 0.8));
  const y0 = Math.floor(height * 0.2);
  const y1 = Math.max(y0 + 1, Math.ceil(height * 0.8));

  // Collect the surviving pixels' RGB. When `gated`, drop shadow/dark grout
  // (very low value) and specular glare (bright but desaturated), whose colour
  // is meaningless. All kept pixels come from one coherent population, so the
  // per-channel medians describe one real colour (unlike the old independent
  // per-channel histogram modes, which mixed pixels across channels).
  const gather = (gated: boolean): { R: number[]; G: number[]; B: number[] } => {
    const R: number[] = [];
    const G: number[] = [];
    const B: number[] = [];
    for (let y = y0; y < y1; y++) {
      for (let x = x0; x < x1; x++) {
        const i = (y * width + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (gated) {
          const { s, v } = rgbToHsv(r, g, b);
          if (v < 40) continue; // shadow / dark grout
          if (s < 30 && v > 235) continue; // specular glare
        }
        R.push(r);
        G.push(g);
        B.push(b);
      }
    }
    return { R, G, B };
  };

  // If the gate rejected almost everything (e.g. a genuinely dim or washed-out
  // sticker), fall back to the ungated central region so we never divide by an
  // empty set.
  let px = gather(true);
  if (px.R.length < 16) {
    px = gather(false);
  }

  const mr = median(px.R);
  const mg = median(px.G);
  const mb = median(px.B);

  const lab = rgbToLab(mr, mg, mb);
  const colorName = classifyLab(lab);
  const distances = labDistances(lab);

  return { colorName, lab, distances };
}

function median(values: number[]): number {
  const sorted = values.slice().sort((a, b) => a - b);
  return sorted[sorted.length >> 1];
}

// Classifies a Lab color as the canonical cube colour whose hue it shares. White
// is decided first, by low chroma at high lightness.
//
// The comparison is by hue ANGLE in the a*/b* plane, not by straight-line
// distance to the references. Distance looked brightness-invariant but is not:
// dimming a sticker contracts its reading toward the achromatic origin while the
// references stay pinned at full chroma, so the radial gap dominates the hue
// difference and the reading falls to whichever reference sits nearest the
// origin. That is green (chroma 55, the least saturated of the five), which is
// why every shadowed or washed-out square used to come back green regardless of
// its actual hue, and why a dimmed orange drifted to red. An angle has no radial
// term, so contraction cannot move the answer at all.
function classifyLab(lab: Lab): string {
  const chroma = Math.hypot(lab.a, lab.b);
  if (chroma < WHITE_MAX_CHROMA && lab.L > WHITE_MIN_LIGHTNESS) {
    return 'white';
  }

  const hue = Math.atan2(lab.b, lab.a);
  let bestName = REFERENCE_COLORS[0].name;
  let bestDelta = Infinity;
  REFERENCE_HUES.forEach((referenceHue, index) => {
    let delta = Math.abs(hue - referenceHue);
    if (delta > Math.PI) delta = 2 * Math.PI - delta;
    if (delta < bestDelta) {
      bestDelta = delta;
      bestName = REFERENCE_COLORS[index].name;
    }
  });
  return bestName;
}

// How far this reading is from each canonical colour, in the same squared-a*b*
// units, ordered to match cubeDiagnosis's COLOR_NAMES (red, orange, white, yellow,
// green, blue). classifyLab only ever returns the winner and throws the rest away;
// keeping them lets the solver rank "which square did we most likely misread"
// instead of guessing between equally valid repairs.
//
// White is the awkward one: it is decided by a chroma threshold rather than by
// distance to a reference, and there is no white entry in REFERENCE_COLORS. Its
// distance from the achromatic axis IS its chroma squared, which is already in the
// right units; a dark sticker gets a lightness penalty so shadowed colours are not
// mistaken for likely whites.
export function labDistances(lab: Lab): number[] {
  const byName = new Map(
    REFERENCE_COLORS.map((ref) => {
      const da = lab.a - ref.lab.a;
      const db = lab.b - ref.lab.b;
      return [ref.name, da * da + db * db] as const;
    }),
  );
  const darkness = Math.max(0, WHITE_MIN_LIGHTNESS - lab.L);
  const whiteDistance = lab.a * lab.a + lab.b * lab.b + darkness * darkness;
  return [
    byName.get('red') ?? 0,
    byName.get('orange') ?? 0,
    whiteDistance,
    byName.get('yellow') ?? 0,
    byName.get('green') ?? 0,
    byName.get('blue') ?? 0,
  ];
}

// sRGB (0-255 per channel) -> HSV in OpenCV ranges (h 0-179, s/v 0-255), kept
// for the gate and the debug pane's HSV readout.
function rgbToHsv(r: number, g: number, b: number): HSV {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === rn) {
      h = ((gn - bn) / delta) % 6;
    } else if (max === gn) {
      h = (bn - rn) / delta + 2;
    } else {
      h = (rn - gn) / delta + 4;
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
  }

  const s = max === 0 ? 0 : delta / max;
  return { h: h / 2, s: s * 255, v: max * 255 };
}

// sRGB (0-255 per channel) -> CIELAB (D65). L in 0-100, a/b roughly -128..127.
function rgbToLab(r: number, g: number, b: number): Lab {
  const linearize = (channel: number): number => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  const rl = linearize(r);
  const gl = linearize(g);
  const bl = linearize(b);

  // linear sRGB -> XYZ, then normalize by the D65 reference white.
  const x = (rl * 0.4124 + gl * 0.3576 + bl * 0.1805) / 0.95047;
  const y = rl * 0.2126 + gl * 0.7152 + bl * 0.0722;
  const z = (rl * 0.0193 + gl * 0.1192 + bl * 0.9505) / 1.08883;

  const f = (t: number): number =>
    t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116;
  const fx = f(x);
  const fy = f(y);
  const fz = f(z);

  return {
    L: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
}
