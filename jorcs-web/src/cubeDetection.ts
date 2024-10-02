declare const cv: any;

/**
 * Performs cube alignment detection on the given image data.
 * @param imageData - Image data of the region of interest.
 * @param gridLength - Length of the grid.
 * @returns An object containing the number of detected grid lines, edge image, and line image.
 */
export function detectCubeAlignment(
  imageData: ImageData,
  gridLength: number,
): {
  gridLines: number;
  edgeImage: any;
  lineImage: any;
} {
  const src = cv.matFromImageData(imageData);

  const gray = new cv.Mat();
  cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

  const equalized = new cv.Mat();
  cv.equalizeHist(gray, equalized);

  const blurred = new cv.Mat();
  cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);

  const edges = new cv.Mat();
  cv.Canny(blurred, edges, 200, 10);

  const lines = new cv.Mat();
  cv.HoughLinesP(edges, lines, 1, Math.PI / 180, 50, gridLength / 6, 10);

  const lineImage = cv.Mat.zeros(edges.rows, edges.cols, cv.CV_8UC3);

  for (let i = 0; i < lines.rows; i++) {
    const x1 = lines.data32S[i * 4];
    const y1 = lines.data32S[i * 4 + 1];
    const x2 = lines.data32S[i * 4 + 2];
    const y2 = lines.data32S[i * 4 + 3];

    const pt1 = new cv.Point(x1, y1);
    const pt2 = new cv.Point(x2, y2);
    cv.line(lineImage, pt1, pt2, new cv.Scalar(255, 0, 0, 255), 2);
  }

  // Analyze the detected lines
  const gridLines = extractGridLines(lines, gridLength);

  // Clone edges and lineImage to return
  const edgeImage = edges.clone();

  // Clean up
  src.delete();
  gray.delete();
  equalized.delete();
  blurred.delete();
  // edges.delete(); // Do not delete edges since we're returning a clone
  lines.delete();
  // lineImage.delete(); // Do not delete lineImage since we're returning a clone

  return {
    gridLines,
    edgeImage,
    lineImage,
  };
}

/**
 * Extracts grid lines from the detected lines.
 * @param lines - Detected lines from Hough Transform.
 * @param gridLength - Length of the grid.
 * @returns Number of detected grid lines.
 */
export function extractGridLines(lines: any, gridLength: number): number {
  const lineCount = lines.rows;
  let detectedGridLines = 0;
  const tolerance = gridLength * 0.05; // 5% of grid length

  // Define expected grid lines positions (normalized)
  const expectedPositions = [0, 1 / 3, 2 / 3, 1];

  // Convert expected positions to pixel positions
  const expectedXPositions = expectedPositions.map((pos) => pos * gridLength);
  const expectedYPositions = expectedPositions.map((pos) => pos * gridLength);

  // Arrays to keep track of detected lines
  const detectedXLines: number[] = [];
  const detectedYLines: number[] = [];

  for (let i = 0; i < lineCount; i++) {
    const x1 = lines.data32S[i * 4];
    const y1 = lines.data32S[i * 4 + 1];
    const x2 = lines.data32S[i * 4 + 2];
    const y2 = lines.data32S[i * 4 + 3];

    // Determine if the line is vertical or horizontal
    if (Math.abs(x1 - x2) < tolerance) {
      // Vertical line
      const xPos = (x1 + x2) / 2;
      if (
        expectedXPositions.some(
          (expectedX) => Math.abs(xPos - expectedX) < tolerance,
        )
      ) {
        detectedXLines.push(xPos);
      }
    } else if (Math.abs(y1 - y2) < tolerance) {
      // Horizontal line
      const yPos = (y1 + y2) / 2;
      if (
        expectedYPositions.some(
          (expectedY) => Math.abs(yPos - expectedY) < tolerance,
        )
      ) {
        detectedYLines.push(yPos);
      }
    }
  }

  // Remove duplicates
  const uniqueXLines = Array.from(new Set(detectedXLines));
  const uniqueYLines = Array.from(new Set(detectedYLines));

  detectedGridLines = uniqueXLines.length + uniqueYLines.length;

  return detectedGridLines;
}

/**
 * Recognizes colors from the grid in the canvas context.
 * @param ctx - The canvas rendering context.
 * @param canvas - The canvas element.
 * @returns A 2D array of recognized colors.
 */
export function recognizeColorsFromGrid(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
): string[][] {
  const gridColors: string[][] = [];
  const gridSize = 3;

  // Determine the size of the square grid (50% of the smaller canvas dimension)
  const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

  // Top-left corner to center the grid
  const gridX = (canvas.width - gridLength) / 2;
  const gridY = (canvas.height - gridLength) / 2;

  const squareSize = gridLength / gridSize;

  for (let row = 0; row < gridSize; row++) {
    const rowColors: string[] = [];
    for (let col = 0; col < gridSize; col++) {
      const x = gridX + col * squareSize + squareSize / 2;
      const y = gridY + row * squareSize + squareSize / 2;
      const imageData = ctx.getImageData(x, y, 1, 1).data;
      const color = rgbToHex(imageData[0], imageData[1], imageData[2]);
      const quantizedColor = quantizeColor(color);
      rowColors.push(quantizedColor);
    }
    gridColors.push(rowColors);
  }
  return gridColors;
}

/**
 * Converts RGB values to Hex color.
 * @param r - Red component.
 * @param g - Green component.
 * @param b - Blue component.
 * @returns Hex color string.
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

/**
 * Quantizes a color to the nearest predefined color bin.
 * @param hexColor - The hex color to quantize.
 * @returns The name of the closest color bin.
 */
export function quantizeColor(hexColor: string): string {
  // Define color bins representing cube colors
  const colorBins: { [key: string]: string } = {
    red: '#9d2535',
    orange: '#b5603a',
    yellow: '#ada56a',
    green: '#226154',
    blue: '#1149ab',
    white: '#c2c0e0',
  };

  // Convert hexColor to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  let minDistance = Infinity;
  let closestColor = 'unknown';

  // Find the closest color bin
  for (const [colorName, binHex] of Object.entries(colorBins)) {
    const binR = parseInt(binHex.slice(1, 3), 16);
    const binG = parseInt(binHex.slice(3, 5), 16);
    const binB = parseInt(binHex.slice(5, 7), 16);

    const distance = Math.sqrt(
      Math.pow(r - binR, 2) + Math.pow(g - binG, 2) + Math.pow(b - binB, 2),
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = colorName;
    }
  }

  return closestColor;
}
