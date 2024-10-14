declare const cv: any;

class CubeAlignmentResult {
  horizontalLines: number[];
  verticalLines: number[];
  binaryImage: any;
  verticalLinesImage: any;
  horizontalLinesImage: any;
  combinedImage: any;

  constructor(
    horizontalLines: number[],
    verticalLines: number[],
    binaryImage: any,
    verticalLinesImage: any,
    horizontalLinesImage: any,
    combinedImage: any,
  ) {
    this.horizontalLines = horizontalLines;
    this.verticalLines = verticalLines;
    this.binaryImage = binaryImage;
    this.verticalLinesImage = verticalLinesImage;
    this.horizontalLinesImage = horizontalLinesImage;
    this.combinedImage = combinedImage;
  }

  destroy() {
    this.binaryImage.delete();
    this.verticalLinesImage.delete();
    this.horizontalLinesImage.delete();
    this.combinedImage.delete();
  }
}

export function detectCubeAlignment(
  imageData: ImageData,
  gridLength: number,
): CubeAlignmentResult {
  const src = cv.matFromImageData(imageData);

  // Convert to grayscale
  const gray = new cv.Mat();
  cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

  // Apply adaptive thresholding to get binary image
  const binary = new cv.Mat();
  cv.adaptiveThreshold(
    gray,
    binary,
    255,
    cv.ADAPTIVE_THRESH_MEAN_C,
    cv.THRESH_BINARY_INV,
    15,
    2,
  );

  // Define structural elements for extracting lines
  const verticalKernel = cv.getStructuringElement(
    cv.MORPH_RECT,
    new cv.Size(1, Math.floor(gridLength / 4)),
  );
  const horizontalKernel = cv.getStructuringElement(
    cv.MORPH_RECT,
    new cv.Size(Math.floor(gridLength / 4), 1),
  );

  // Extract vertical lines
  const verticalLinesMat = new cv.Mat();
  cv.erode(binary, verticalLinesMat, verticalKernel);
  cv.dilate(verticalLinesMat, verticalLinesMat, verticalKernel);

  // Extract horizontal lines
  const horizontalLinesMat = new cv.Mat();
  cv.erode(binary, horizontalLinesMat, horizontalKernel);
  cv.dilate(horizontalLinesMat, horizontalLinesMat, horizontalKernel);

  // Combine horizontal and vertical lines
  const combinedLines = new cv.Mat();
  cv.addWeighted(verticalLinesMat, 0.5, horizontalLinesMat, 0.5, 0, combinedLines);

  // Now, extract line positions
  const detectedVerticalLines = extractLines(verticalLinesMat, 'vertical');
  const detectedHorizontalLines = extractLines(horizontalLinesMat, 'horizontal');

  // Clone images to return
  const binaryImage = binary.clone();
  const verticalLinesImage = verticalLinesMat.clone();
  const horizontalLinesImage = horizontalLinesMat.clone();
  const combinedImage = combinedLines.clone();

  // Clean up
  src.delete();
  gray.delete();
  binary.delete();
  verticalKernel.delete();
  horizontalKernel.delete();
  verticalLinesMat.delete();
  horizontalLinesMat.delete();
  combinedLines.delete();

  // Return the processed images and detected lines
  return new CubeAlignmentResult(
    detectedHorizontalLines,
    detectedVerticalLines,
    binaryImage,
    verticalLinesImage,
    horizontalLinesImage,
    combinedImage,
  );
}

/**
 * Extracts line positions from a binary image of lines.
 * @param linesImage - Binary image containing lines.
 * @param orientation - 'vertical' or 'horizontal'.
 * @returns Array of line positions (x for vertical lines, y for horizontal lines).
 */
function extractLines(linesImage: any, orientation: 'vertical' | 'horizontal'): number[] {
  // Use Hough Line Transform to detect lines
  const lines = new cv.Mat();
  const rho = 1;
  const threshold = 100;
  const minLineLength = linesImage.rows / 2;
  const maxLineGap = 20;

  if (orientation === 'vertical') {
    cv.HoughLinesP(linesImage, lines, rho, Math.PI / 180, threshold, minLineLength, maxLineGap);
  } else {
    cv.HoughLinesP(linesImage, lines, rho, Math.PI / 180, threshold, minLineLength, maxLineGap);
  }

  const linePositions: number[] = [];
  for (let i = 0; i < lines.rows; i++) {
    const x1 = lines.data32S[i * 4];
    const y1 = lines.data32S[i * 4 + 1];
    const x2 = lines.data32S[i * 4 + 2];
    const y2 = lines.data32S[i * 4 + 3];

    if (orientation === 'vertical' && Math.abs(x1 - x2) < 10) {
      const x = (x1 + x2) / 2;
      linePositions.push(x);
    } else if (orientation === 'horizontal' && Math.abs(y1 - y2) < 10) {
      const y = (y1 + y2) / 2;
      linePositions.push(y);
    }
  }

  // Clean up
  lines.delete();

  return Array.from(new Set(linePositions)).sort((a, b) => a - b);
}
