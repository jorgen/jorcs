type HSV = {
  h: number;
  s: number;
  v: number;
};

type Lab = {
  L: number;
  a: number;
  b: number;
};

type RecognizedGrid = {
  colors: string[][];
  hsvValues: HSV[][];
  subImages: string[][];
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

// A sticker is white when it is bright and nearly colourless (low chroma),
// which is illuminant-robust — unlike the old absolute saturation/value test
// that stole glary yellow/orange stickers as "white".
const WHITE_MAX_CHROMA = 30;
const WHITE_MIN_LIGHTNESS = 55;

/**
 * Recognizes colors from the grid in the canvas context.
 * @param ctx - The canvas rendering context.
 * @param canvas - The canvas element.
 * @returns An object containing the color names, mean HSV values, and sub-images.
 */
export function recognizeColorsFromGrid(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
): RecognizedGrid {
  const gridColors: string[][] = [];
  const gridHsvValues: HSV[][] = [];
  const subImages: string[][] = [];
  const gridSize = 3;

  // Determine the size of the square grid (50% of the smaller canvas dimension)
  const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

  // Top-left corner to center the grid
  const gridX = (canvas.width - gridLength) / 2;
  const gridY = (canvas.height - gridLength) / 2;

  const squareSize = gridLength / gridSize;

  for (let row = 0; row < gridSize; row++) {
    const rowColors: string[] = [];
    const rowHsvValues: HSV[] = [];
    const rowSubImages: string[] = [];
    for (let col = 0; col < gridSize; col++) {
      const x = gridX + col * squareSize;
      const y = gridY + row * squareSize;
      const imageData = ctx.getImageData(x, y, squareSize, squareSize);
      const { colorName, meanHsv } = getDominantColor(imageData);
      rowColors.push(colorName);
      rowHsvValues.push(meanHsv);

      // Convert the imageData to a data URL for display
      const subCanvas = document.createElement('canvas');
      subCanvas.width = squareSize;
      subCanvas.height = squareSize;
      const subCtx = subCanvas.getContext('2d');
      subCtx!.putImageData(imageData, 0, 0);
      const dataURL = subCanvas.toDataURL();
      rowSubImages.push(dataURL);
    }
    gridColors.push(rowColors);
    gridHsvValues.push(rowHsvValues);
    subImages.push(rowSubImages);
  }
  return { colors: gridColors, hsvValues: gridHsvValues, subImages };
}

/**
 * Determines the dominant color of a square by taking a robust median color
 * over the central region (rejecting grout, shadow and specular glare) and
 * classifying it against the canonical cube colors in the CIELAB a-b plane.
 * @param imageData - ImageData of the square region.
 * @returns The color name and a coherent representative HSV (for the debug pane).
 */
function getDominantColor(imageData: ImageData): { colorName: string; meanHsv: HSV } {
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

  const colorName = classifyLab(rgbToLab(mr, mg, mb));
  const meanHsv = rgbToHsv(mr, mg, mb);

  return { colorName, meanHsv };
}

function median(values: number[]): number {
  const sorted = values.slice().sort((a, b) => a - b);
  return sorted[sorted.length >> 1];
}

// Classifies a Lab color as the nearest canonical cube color, comparing in the
// a*/b* chroma plane only so brightness differences (glare, shadow) don't tip
// the decision. White is detected first, by low chroma at high lightness.
function classifyLab(lab: Lab): string {
  const chroma = Math.hypot(lab.a, lab.b);
  if (chroma < WHITE_MAX_CHROMA && lab.L > WHITE_MIN_LIGHTNESS) {
    return 'white';
  }

  let bestName = REFERENCE_COLORS[0].name;
  let bestDistance = Infinity;
  for (const ref of REFERENCE_COLORS) {
    const da = lab.a - ref.lab.a;
    const db = lab.b - ref.lab.b;
    const distance = da * da + db * db;
    if (distance < bestDistance) {
      bestDistance = distance;
      bestName = ref.name;
    }
  }
  return bestName;
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
