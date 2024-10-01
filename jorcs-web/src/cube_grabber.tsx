import React, { useEffect, useRef, useState } from 'react';

type RubiksCubeRecognizerProps = {
  onColorRecognized?: (colors: string[][]) => void;
};

declare const cv: any; // Declare OpenCV.js

const RubiksCubeRecognizer: React.FC<RubiksCubeRecognizerProps> = ({ onColorRecognized }) => {
  const videoRef = useRef<HTMLVideoElement>(document.createElement('video'));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const edgeCanvasRef = useRef<HTMLCanvasElement>(null);
  const lineCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const [cubeDetected, setCubeDetected] = useState(false);
  const cubeDetectionCounter = useRef(0);
  const cubeDetectionThreshold = 10; // Number of consecutive frames the cube must be detected
  const [opencvReady, setOpencvReady] = useState(false);
  const [detectionEnabled, setDetectionEnabled] = useState(true);
  const [overlayColors, setOverlayColors] = useState<string[][] | null>(null);
  const detectionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Wait for OpenCV.js to be ready
    const checkOpenCV = setInterval(() => {
      if ((window as any).cv && (window as any).cv.Mat) {
        setOpencvReady(true);
        clearInterval(checkOpenCV);
      }
    }, 100);

    return () => clearInterval(checkOpenCV);
  }, []);

  useEffect(() => {
    if (!opencvReady) return;

    const video = videoRef.current;

    const initCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = mediaStream;
        await video.play();
        renderFrame();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const renderFrame = () => {
      if (canvasRef.current && video.readyState === video.HAVE_ENOUGH_DATA) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Clear the canvas before drawing the new frame
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Save the current context state
          ctx.save();

          // Flip the context horizontally
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);

          // Draw the video frame onto the canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Restore the context to its original state
          ctx.restore();

          // Cube detection logic
          if (detectionEnabled) {
            detectCubeAlignment(ctx);
          }

          // Draw the overlay grid with visual feedback
          drawOverlay(ctx, cubeDetected ? 'green' : 'red');

          // Overlay recognized colors if available
          if (overlayColors) {
            drawOverlayColors(ctx, overlayColors);
          }
        }
      }
      animationFrameId.current = requestAnimationFrame(renderFrame);
    };

    const detectCubeAlignment = (ctx: CanvasRenderingContext2D) => {
      const canvas = canvasRef.current!;

      // Determine the size of the square grid (50% of the smaller canvas dimension)
      const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

      // Top-left corner to center the grid
      const gridX = (canvas.width - gridLength) / 2;
      const gridY = (canvas.height - gridLength) / 2;

      // Get the region of interest (ROI) from the canvas
      const imageData = ctx.getImageData(gridX, gridY, gridLength, gridLength);
      const src = cv.matFromImageData(imageData);

      // Convert to grayscale
      const gray = new cv.Mat();
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

      const equalized = new cv.Mat();
      cv.equalizeHist(gray, equalized);

      // Apply Gaussian blur to reduce noise
      const blurred = new cv.Mat();
      cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);

      // Edge detection using Canny
      const edges = new cv.Mat();
      cv.Canny(blurred, edges, 200, 10);

      // Display edge detection output
      if (edgeCanvasRef.current) {
        cv.imshow(edgeCanvasRef.current, edges);
      }

      // Line detection using Hough Transform
      const lines = new cv.Mat();
      cv.HoughLinesP(edges, lines, 1, Math.PI / 180, 50, gridLength / 6, 10);

      // Create an image to draw the lines
      const lineImage = cv.Mat.zeros(edges.rows, edges.cols, cv.CV_8UC3);

      // Draw the lines
      for (let i = 0; i < lines.rows; i++) {
        const x1 = lines.data32S[i * 4];
        const y1 = lines.data32S[i * 4 + 1];
        const x2 = lines.data32S[i * 4 + 2];
        const y2 = lines.data32S[i * 4 + 3];

        const pt1 = new cv.Point(x1, y1);
        const pt2 = new cv.Point(x2, y2);
        cv.line(lineImage, pt1, pt2, new cv.Scalar(255, 0, 0, 255), 2);
      }

      // Display the lines on the lineCanvas
      if (lineCanvasRef.current) {
        cv.imshow(lineCanvasRef.current, lineImage);
      }

      // Analyze the detected lines
      const gridLines = extractGridLines(lines, gridLength);

      // Clean up
      src.delete();
      gray.delete();
      blurred.delete();
      edges.delete();
      lines.delete();
      lineImage.delete();

      // Check if the detected lines align with the overlay grid lines
      if (gridLines >= 4) {
        cubeDetectionCounter.current += 1;
        if (cubeDetectionCounter.current >= cubeDetectionThreshold && !cubeDetected) {
          // Cube has been detected consistently, capture the frame
          setCubeDetected(true);
          captureFrame(ctx);
          // Disable detection for 10 seconds
          setDetectionEnabled(false);
          detectionTimeoutRef.current = setTimeout(() => {
            setDetectionEnabled(true);
            setCubeDetected(false);
            setOverlayColors(null);
          }, 10000); // 10 seconds
        }
      } else {
        cubeDetectionCounter.current = 0;
      }
    };

    const extractGridLines = (lines: any, gridLength: number): number => {
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
    };

    const drawOverlay = (ctx: CanvasRenderingContext2D, color: string) => {
      const canvas = canvasRef.current!;
      const gridSize = 3;

      // Determine the size of the square grid (50% of the smaller canvas dimension)
      const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

      // Top-left corner to center the grid
      const gridX = (canvas.width - gridLength) / 2;
      const gridY = (canvas.height - gridLength) / 2;

      const squareSize = gridLength / gridSize;

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      // Draw vertical lines
      for (let i = 0; i <= gridSize; i++) {
        const x = gridX + i * squareSize;
        ctx.beginPath();
        ctx.moveTo(x, gridY);
        ctx.lineTo(x, gridY + gridLength);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let i = 0; i <= gridSize; i++) {
        const y = gridY + i * squareSize;
        ctx.beginPath();
        ctx.moveTo(gridX, y);
        ctx.lineTo(gridX + gridLength, y);
        ctx.stroke();
      }
    };

    const drawOverlayColors = (ctx: CanvasRenderingContext2D, colors: string[][]) => {
      const canvas = canvasRef.current!;
      const gridSize = 3;

      // Determine the size of the square grid (50% of the smaller canvas dimension)
      const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

      // Top-left corner to center the grid
      const gridX = (canvas.width - gridLength) / 2;
      const gridY = (canvas.height - gridLength) / 2;

      const squareSize = gridLength / gridSize;

      ctx.globalAlpha = 0.5; // Set transparency

      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const colorName = colors[row][col];
          ctx.fillStyle = colorName;

          const x = gridX + col * squareSize;
          const y = gridY + row * squareSize;
          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }

      ctx.globalAlpha = 1.0; // Reset transparency
    };

    initCamera();

    return () => {
      // Clean up the media stream and animation frame on unmount
      const tracks = video.srcObject ? (video.srcObject as MediaStream).getTracks() : [];
      tracks.forEach((track) => track.stop());
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
      }
    };
  }, [cubeDetected, opencvReady, detectionEnabled, overlayColors]);

  const captureFrame = (ctx: CanvasRenderingContext2D) => {
    if (canvasRef.current) {
      const colors = recognizeColorsFromGrid(ctx);
      setOverlayColors(colors); // Set the overlay colors to display
      if (onColorRecognized) {
        onColorRecognized(colors);
      }
    }
  };

  const recognizeColorsFromGrid = (ctx: CanvasRenderingContext2D): string[][] => {
    const gridColors: string[][] = [];
    const canvas = canvasRef.current!;
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
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      '#' +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  };

  const quantizeColor = (hexColor: string): string => {
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
  };

  const handleRetake = () => {
    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current);
    }
    setDetectionEnabled(true);
    setCubeDetected(false);
    setOverlayColors(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '640px' }}>
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        style={{
          width: '100%',
          border: '1px solid black',
        }}
      />
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div style={{ flex: 1 }}>
          <p>Edge Detection Output:</p>
          <canvas
            ref={edgeCanvasRef}
            width={320}
            height={320}
            style={{
              width: '100%',
              border: '1px solid black',
            }}
          />
        </div>
        <div style={{ flex: 1, marginLeft: '10px' }}>
          <p>Detected Lines:</p>
          <canvas
            ref={lineCanvasRef}
            width={320}
            height={320}
            style={{
              width: '100%',
              border: '1px solid black',
            }}
          />
        </div>
      </div>
      {cubeDetected && <div style={{ color: 'green' }}>Picture taken!</div>}
      {!detectionEnabled && (
        <button onClick={handleRetake} style={{ marginTop: '10px' }}>
          Retake
        </button>
      )}
    </div>
  );
};

export default RubiksCubeRecognizer;
