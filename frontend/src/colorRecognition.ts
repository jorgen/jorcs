declare const cv: any; // Declare OpenCV.js

type HSV = {
  h: number;
  s: number;
  v: number;
};

type RecognizedGrid = {
  colors: string[][];
  hsvValues: HSV[][];
  subImages: string[][];
};

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
 * Processes image data to determine the dominant color in HSV space.
 * @param imageData - ImageData of the square region.
 * @returns An object containing the color name and mean HSV values.
 */
function getDominantColor(imageData: ImageData): { colorName: string; meanHsv: HSV } {
  // Convert ImageData to cv.Mat
  const src = cv.matFromImageData(imageData);
  const the_hsv_mat = new cv.Mat();
  cv.cvtColor(src, the_hsv_mat, cv.COLOR_RGB2HSV);
  const hsvChannels = new cv.MatVector();
  cv.split(the_hsv_mat, hsvChannels);
  const histSize = [[180], [256], [256]]; // Hue values range from 0 to 179 in OpenCV
  const ranges = [[0, 180], [0, 256], [0, 256]];
  const hists = [new cv.Mat(), new cv.Mat(), new cv.Mat()];
  const masks = [new cv.Mat(), new cv.Mat(), new cv.Mat()];

  cv.calcHist(hsvChannels, [0] , masks[0], hists[0], histSize[0], ranges[0], false);
  cv.calcHist(hsvChannels, [1] , masks[1], hists[1], histSize[1], ranges[1], false);
  cv.calcHist(hsvChannels, [2] , masks[2], hists[2], histSize[2], ranges[2], false);

  let highestValuesHsv = [0, 0, 0];
  let highestIndeciesHsv = [0,0,0];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < histSize[j][0]; i++) {
      if (hists[j].data32F[i] > highestValuesHsv[j]) {
        highestValuesHsv[j] = hists[j].data32F[i];
        highestIndeciesHsv[j] = i;
      }
    }
  }

  the_hsv_mat.delete();
  src.delete();
  hsvChannels.delete();
  // Clean up histogram resources
  for (const mask of masks)
    mask.delete();
  for (const hist of hists)
    hist.delete();
  // Clean up


  let colorName: string;


  if (detectWhite(highestIndeciesHsv[1], highestIndeciesHsv[2])) {
    colorName = 'white';
  } else {

    colorName = quantizeHue(highestIndeciesHsv[0]);

  }

  // Return color name and mean HSV values
  const meanHsv: HSV = {
    h: highestIndeciesHsv[0],
    s: highestIndeciesHsv[1],
    v: highestIndeciesHsv[2]
  };

  return { colorName, meanHsv };
}

function detectWhite(saturation: number, value: number): boolean
{
  const saturationThreshold = 65;
  const valueThreshold = 150;

  return saturation < saturationThreshold && value > valueThreshold;
}

function quantizeHue(hue: number): string {
  // Define hue ranges for cube colors
  // Adjust these ranges based on experimentation
  if ((hue >= 115 || hue < 3)) {
    return 'red';
  } else if (hue >= 3 && hue < 25) {
    return 'orange';
  } else if (hue >= 25 && hue < 55) {
    return 'yellow';
  } else if (hue >= 55 && hue < 95) {
    return 'green';
  } else if (hue >= 95 && hue < 115) {
    return 'blue';
  } else {
    return 'unknown';
  }
}
