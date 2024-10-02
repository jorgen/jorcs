declare const cv: any; // Declare OpenCV.js

type HSV = {
  h: number;
  s: number;
  v: number;
};

type RecognizedGrid = {
  colors: string[][];
  hsvValues: HSV[][];
};

/**
 * Recognizes colors from the grid in the canvas context.
 * @param ctx - The canvas rendering context.
 * @param canvas - The canvas element.
 * @returns An object containing the color names and mean HSV values.
 */
export function recognizeColorsFromGrid(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
): RecognizedGrid {
  const gridColors: string[][] = [];
  const gridHsvValues: HSV[][] = [];
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
    for (let col = 0; col < gridSize; col++) {
      const x = gridX + col * squareSize;
      const y = gridY + row * squareSize;
      const imageData = ctx.getImageData(x, y, squareSize, squareSize);
      const { colorName, meanHsv } = getDominantColor(imageData);
      rowColors.push(colorName);
      rowHsvValues.push(meanHsv);
    }
    gridColors.push(rowColors);
    gridHsvValues.push(rowHsvValues);
  }
  return { colors: gridColors, hsvValues: gridHsvValues };
}

/**
 * Processes image data to determine the dominant color in HSV space.
 * @param imageData - ImageData of the square region.
 * @returns An object containing the color name and mean HSV values.
 */
function getDominantColor(imageData: ImageData): { colorName: string; meanHsv: HSV } {
  // Convert ImageData to cv.Mat
  const src = cv.matFromImageData(imageData);

  // Convert to HSV
  const hsv = new cv.Mat();
  cv.cvtColor(src, hsv, cv.COLOR_RGBA2RGB);
  cv.cvtColor(hsv, hsv, cv.COLOR_RGB2HSV);

  // Split channels
  const hsvChannels = new cv.MatVector();
  cv.split(hsv, hsvChannels);
  const hChannel = hsvChannels.get(0);
  const sChannel = hsvChannels.get(1);
  const vChannel = hsvChannels.get(2);

  // Collect hue, saturation, and value data
  const hData = hChannel.data;
  const sData = sChannel.data;
  const vData = vChannel.data;

  const pixelCount = hData.length;
  const hues = [];
  const saturations = [];
  const values = [];

  for (let i = 0; i < pixelCount; i++) {
    hues.push(hData[i]);
    saturations.push(sData[i]);
    values.push(vData[i]);
  }

  // Calculate mean saturation and value
  const meanSaturation = saturations.reduce((sum, val) => sum + val, 0) / pixelCount;
  const meanValue = values.reduce((sum, val) => sum + val, 0) / pixelCount;

  // Determine if the color is white based on saturation and value thresholds
  const saturationThreshold = 60; // Adjust as needed (0-255)
  const valueThreshold = 170; // Adjust as needed (0-255)

  let colorName: string;
  let meanHue: number | null = null;

  if (meanSaturation < saturationThreshold && meanValue > valueThreshold) {
    colorName = 'white';
  } else {
    // Calculate histogram for Hue channel
    const histSize = [180]; // Hue values range from 0 to 179 in OpenCV
    const ranges = [0, 180];
    const hist = new cv.Mat();
    const mask = new cv.Mat();

    // Prepare images argument as a cv.MatVector
    const hChannelVec = new cv.MatVector();
    hChannelVec.push_back(hChannel);

    cv.calcHist(hChannelVec, [0], mask, hist, histSize, ranges, false);

    // Get histogram data
    const histData = [];
    for (let i = 0; i < histSize[0]; i++) {
      histData.push(hist.data32F[i]);
    }

    // Remove outliers by thresholding
    const maxVal = Math.max(...histData);
    const thresholdValue = 0.05 * maxVal; // Adjust as needed
    const filteredHistData = histData.map((value) => (value >= thresholdValue ? value : 0));

    // Get mean of the top 50% colors
    const sortedIndices = filteredHistData
      .map((value, index) => ({ value, index }))
      .sort((a, b) => b.value - a.value);

    const top50Indices = sortedIndices.slice(0, Math.ceil(sortedIndices.length / 2));
    const weightedSum = top50Indices.reduce((sum, item) => sum + item.index * item.value, 0);
    const sumValues = top50Indices.reduce((sum, item) => sum + item.value, 0);

    meanHue = weightedSum / sumValues;

    // Determine the color based on mean Hue
    colorName = quantizeHue(meanHue);

    // Clean up histogram resources
    hChannelVec.delete();
    mask.delete();
    hist.delete();
  }

  // Clean up
  src.delete();
  hsv.delete();
  hsvChannels.delete();
  hChannel.delete();
  sChannel.delete();
  vChannel.delete();

  // Return color name and mean HSV values
  const meanHsv: HSV = {
    h: meanHue !== null ? meanHue : 0,
    s: meanSaturation,
    v: meanValue,
  };

  return { colorName, meanHsv };
}

/**
 * Quantizes a hue value to the nearest predefined color bin.
 * @param hue - The hue value to quantize.
 * @returns The name of the closest color bin.
 */
function quantizeHue(hue: number): string {
  // Define hue ranges for cube colors
  // Adjust these ranges based on experimentation
  if ((hue >= 110 && hue <= 180)) {
    return 'red';
  } else if (hue >= 0 && hue < 25) {
    return 'orange';
  } else if (hue >= 25 && hue < 40) {
    return 'yellow';
  } else if (hue >= 40 && hue < 95) {
    return 'green';
  } else if (hue >= 95 && hue < 110) {
    return 'blue';
  } else {
    return 'unknown';
  }
}
