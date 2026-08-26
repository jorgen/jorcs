declare const cv: any;

export type CubeAlignment = {
  horizontalLines: number[];
  verticalLines: number[];
};

// How long a run of dark pixels has to be, along the line's own direction, to
// survive as a grid line. This is what sets how straight the cube has to be held:
// the opening below uses a one-pixel-wide kernel, so a line drifts out of its
// column after about one kernel length times tan(roll) pixels. At a quarter of the grid
// (60px at the default size) that is roughly one degree before the line breaks up
// -- far tighter than anyone can hold a cube by hand. An eighth is about two
// degrees, which is still strict but reachable.
const LINE_KERNEL_FRACTION = 8;

export function detectCubeAlignment(
  imageData: ImageData,
  gridLength: number,
): CubeAlignment {
  const src = cv.matFromImageData(imageData);
  const gray = new cv.Mat();
  const binary = new cv.Mat();
  const kernelLength = Math.max(4, Math.floor(gridLength / LINE_KERNEL_FRACTION));
  const verticalKernel = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(1, kernelLength));
  const horizontalKernel = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(kernelLength, 1));
  const verticalLinesMat = new cv.Mat();
  const horizontalLinesMat = new cv.Mat();

  try {
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
    cv.adaptiveThreshold(gray, binary, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY_INV, 15, 2);

    // An opening in each direction: erode away everything that is not a long run,
    // then put the survivors back to their original length.
    cv.morphologyEx(binary, verticalLinesMat, cv.MORPH_OPEN, verticalKernel);
    cv.morphologyEx(binary, horizontalLinesMat, cv.MORPH_OPEN, horizontalKernel);

    return {
      horizontalLines: extractLines(horizontalLinesMat, 'horizontal'),
      verticalLines: extractLines(verticalLinesMat, 'vertical'),
    };
  } finally {
    // Every Mat here is WASM heap, and it is not garbage collected. A throw between
    // allocation and cleanup used to leak all of them, once per frame.
    src.delete();
    gray.delete();
    binary.delete();
    verticalKernel.delete();
    horizontalKernel.delete();
    verticalLinesMat.delete();
    horizontalLinesMat.delete();
  }
}

// Positions within this many pixels of each other are the same physical line seen
// more than once, and are merged. Without this one grout line arrives as a cloud of
// near-identical positions, which makes "is there a line near here" almost always
// true and the whole alignment check close to meaningless.
const SAME_LINE_PIXELS = 6;

/**
 * Extracts line positions from a binary image of lines.
 * @param linesImage - Binary image containing lines.
 * @param orientation - 'vertical' or 'horizontal'.
 * @returns One position per distinct line (x for vertical, y for horizontal).
 */
function extractLines(linesImage: any, orientation: 'vertical' | 'horizontal'): number[] {
  const lines = new cv.Mat();
  const rho = 1;
  const threshold = 100;
  // Along its own direction: a vertical line spans rows, a horizontal one spans
  // columns. These are equal for the square scan region, but saying it the right
  // way round keeps it true if that ever changes.
  const span = orientation === 'vertical' ? linesImage.rows : linesImage.cols;
  const minLineLength = span / 2;
  const maxLineGap = 20;

  try {
    cv.HoughLinesP(linesImage, lines, rho, Math.PI / 180, threshold, minLineLength, maxLineGap);

    const positions: number[] = [];
    for (let i = 0; i < lines.rows; i++) {
      const x1 = lines.data32S[i * 4];
      const y1 = lines.data32S[i * 4 + 1];
      const x2 = lines.data32S[i * 4 + 2];
      const y2 = lines.data32S[i * 4 + 3];
      if (orientation === 'vertical' && Math.abs(x1 - x2) < 10) {
        positions.push((x1 + x2) / 2);
      } else if (orientation === 'horizontal' && Math.abs(y1 - y2) < 10) {
        positions.push((y1 + y2) / 2);
      }
    }

    positions.sort((a, b) => a - b);
    const merged: number[] = [];
    let run: number[] = [];
    for (const position of positions) {
      if (run.length > 0 && position - run[run.length - 1] > SAME_LINE_PIXELS) {
        merged.push(run.reduce((sum, v) => sum + v, 0) / run.length);
        run = [];
      }
      run.push(position);
    }
    if (run.length > 0) merged.push(run.reduce((sum, v) => sum + v, 0) / run.length);
    return merged;
  } finally {
    lines.delete();
  }
}
