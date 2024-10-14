import React, { useEffect, useRef, useState } from 'react';
import { detectCubeAlignment } from './cubeDetection';
import { recognizeColorsFromGrid } from './colorRecognition';
import ColorPicker from './ColorPicker.tsx';

type GridSquare = {
  row: number;
  col: number;
  x: number;
  y: number;
  size: number;
};

type OverlayData = {
  colors: string[][];
  hsvValues: { h: number; s: number; v: number }[][];
  subImages: string[][];
};

type RubiksCubeRecognizerProps = {
  currentSide: number;
  detectionEnabled: boolean;
  overlayData: OverlayData;
  onOverlayDataCaptured: (overlayData: OverlayData) => void;
  onOverlayDataUpdated: (overlayData: OverlayData) => void;
};

declare const cv: any; // Declare OpenCV.js

const RubiksCubeRecognizer: React.FC<RubiksCubeRecognizerProps> = ({
                                                                     currentSide,
                                                                     detectionEnabled,
                                                                     overlayData,
                                                                     onOverlayDataCaptured,
                                                                     onOverlayDataUpdated,
                                                                   }) => {
  const videoRef = useRef<HTMLVideoElement>(document.createElement('video'));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  const [cubeDetected, setCubeDetected] = useState(false);
  const cubeDetectionCounter = useRef(0);
  const cubeDetectionThreshold = 1; // Number of consecutive frames the cube must be detected
  const [opencvReady, setOpencvReady] = useState(false);

  // State variables for grid squares and color palette
  const [gridSquares, setGridSquares] = useState<GridSquare[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<GridSquare | null>(null);
  const [showColorPalette, setShowColorPalette] = useState(false);

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
        const constraints = {
          video: true,
        };
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = mediaStream;
        await video.play();
        renderFrame();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const renderFrame = () => {
      if (
        canvasRef.current &&
        videoRef.current &&
        videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA
      ) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Clear the canvas before drawing the new frame
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Save the context state before flipping
          ctx.save();

          // Flip the canvas horizontally
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);

          // Draw the video frame onto the canvas (now flipped)
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

          // Restore the context to its original state
          ctx.restore();

          // Cube detection logic
          if (detectionEnabled) {
            const detectionResult = performDetection();
            if (detectionResult) {
              const {
                horizontalLines: detectedHorizontalLines,
                verticalLines: detectedVerticalLines,
              } = detectionResult;

              // Now compare detected lines with overlay grid lines
              const match = compareLinesWithOverlay(
                detectedHorizontalLines,
                detectedVerticalLines,
                canvas,
              );

              if (match) {
                cubeDetectionCounter.current += 1;
                if (
                  cubeDetectionCounter.current >= cubeDetectionThreshold &&
                  !cubeDetected
                ) {
                  // Cube has been detected consistently, capture the frame
                  setCubeDetected(true);
                  captureFrame();
                }
              } else {
                cubeDetectionCounter.current = 0;
              }
              detectionResult.destroy();
            }
          }

          // Draw the overlay grid with visual feedback (adjusted for flipped canvas)
          drawOverlay(ctx, cubeDetected ? 'green' : 'red');

          drawOverlayColors(ctx, overlayData);

          // Draw side overlay (unaffected by flip)
          drawSideOverlay(ctx, currentSide);
        }
      }
      animationFrameId.current = requestAnimationFrame(renderFrame);
    };

    initCamera();

    return () => {
      // Clean up the media stream and animation frame on unmount
      const tracks = video.srcObject
        ? (video.srcObject as MediaStream).getTracks()
        : [];
      tracks.forEach((track) => track.stop());
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [opencvReady, detectionEnabled, cubeDetected, currentSide, overlayData]);

  useEffect(() => {
    if (detectionEnabled) {
      setCubeDetected(false);
      cubeDetectionCounter.current = 0;
    }
  }, [detectionEnabled]);

  // Handle canvas clicks to detect square selection
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleCanvasClick = (event: MouseEvent) => {
      if (!overlayData || !gridSquares.length || !canvasRef.current) return;

      const canvas = canvasRef.current;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      // Get the click coordinates relative to the canvas
      let x = (event.clientX - rect.left) * scaleX;
      let y = (event.clientY - rect.top) * scaleY;

      // Since the canvas is flipped horizontally, adjust the x-coordinate
      x = canvas.width - x;

      // Now check if the click is within any of the grid squares
      for (const square of gridSquares) {
        if (
          x >= square.x &&
          x <= square.x + square.size &&
          y >= square.y &&
          y <= square.y + square.size
        ) {
          // Square was clicked
          setSelectedSquare(square);
          setShowColorPalette(true);
          break;
        }
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [gridSquares, overlayData]);

  const handleColorSelect = (color: string) => {
    if (!selectedSquare) return;

    const updatedOverlayData = { ...overlayData };
    updatedOverlayData.colors = overlayData.colors.map((row, rowIndex) =>
      row.map((colColor, colIndex) => {
        if (rowIndex === selectedSquare.row && colIndex === selectedSquare.col) {
          return color;
        }
        return colColor;
      }),
    );

    // Notify parent component of the updated overlayData
    onOverlayDataUpdated(updatedOverlayData);

    // Close the color palette
    setShowColorPalette(false);
    setSelectedSquare(null);
  };

  const performDetection = () => {
    const canvas = canvasRef.current!;
    // Determine the size of the square grid (50% of the smaller canvas dimension)
    const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

    // Top-left corner to center the grid
    const gridX = (canvas.width - gridLength) / 2;
    const gridY = (canvas.height - gridLength) / 2;

    // Get the region of interest (ROI) from the unflipped video frame
    // Create an off-screen canvas to get the unflipped image data
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext('2d');
    if (offscreenCtx && videoRef.current) {
      offscreenCtx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = offscreenCtx.getImageData(
        gridX,
        gridY,
        gridLength,
        gridLength,
      );

      // Call detectCubeAlignment with imageData
      return detectCubeAlignment(imageData, gridLength);
    }
    return null;
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

    // Since the canvas is flipped, adjust the x-coordinates
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

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

    ctx.restore();
  };

  const drawOverlayColors = (
    ctx: CanvasRenderingContext2D,
    overlayData: OverlayData,
  ) => {
    const canvas = canvasRef.current!;
    const gridSize = 3;

    // Determine the size of the square grid (50% of the smaller canvas dimension)
    const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

    // Top-left corner to center the grid
    const gridX = (canvas.width - gridLength) / 2;
    const gridY = (canvas.height - gridLength) / 2;

    const squareSize = gridLength / gridSize;

    ctx.globalAlpha = 0.5; // Set transparency

    const squares: GridSquare[] = []; // Array to store grid square positions

    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);


    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const colorName = overlayData.colors[row][col];
        ctx.fillStyle = colorName;

        const x = gridX + col * squareSize;
        const y = gridY + row * squareSize;
        ctx.fillRect(x, y, squareSize, squareSize);

        // Store the square's position and size
        squares.push({ row, col, x, y, size: squareSize });
      }
    }

    ctx.restore();

    ctx.globalAlpha = 1.0; // Reset transparency

    // Update the gridSquares state
    setGridSquares(squares);
  };

  const drawSideOverlay = (
    ctx: CanvasRenderingContext2D,
    sideIndex: number,
  ) => {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(10, 10, 120, 40);
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Side ${sideIndex + 1}/6`, 20, 40);
    ctx.restore();
  };

  const compareLinesWithOverlay = (
    detectedHorizontalLines: number[],
    detectedVerticalLines: number[],
    canvas: HTMLCanvasElement,
  ): boolean => {
    const gridSize = 3;
    const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

    // Expected positions of the grid lines
    const expectedVerticalLines = [];
    for (let i = 0; i <= gridSize; i++) {
      const x = i * (gridLength / gridSize);
      expectedVerticalLines.push(x);
    }

    const expectedHorizontalLines = [];
    for (let i = 0; i <= gridSize; i++) {
      const y = i * (gridLength / gridSize);
      expectedHorizontalLines.push(y);
    }

    const tolerance = gridLength * 0.05; // 5% of grid length

    // Compare detected vertical lines with expected vertical lines
    const verticalMatches = expectedVerticalLines.filter((expectedX) =>
      detectedVerticalLines.some(
        (detectedX) => Math.abs(detectedX - expectedX) < tolerance,
      ),
    );

    // Compare detected horizontal lines with expected horizontal lines
    const horizontalMatches = expectedHorizontalLines.filter((expectedY) =>
      detectedHorizontalLines.some(
        (detectedY) => Math.abs(detectedY - expectedY) < tolerance,
      ),
    );

    // Decide whether there is a significant overlap
    const verticalMatchRatio =
      verticalMatches.length / expectedVerticalLines.length;
    const horizontalMatchRatio =
      horizontalMatches.length / expectedHorizontalLines.length;

    const matchThreshold = 0.8; // 80% of lines should match

    return (
      verticalMatchRatio >= matchThreshold &&
      horizontalMatchRatio >= matchThreshold
    );
  };

  const captureFrame = () => {
    // Create an off-screen canvas to get the unflipped image data
    const canvas = canvasRef.current!;
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext('2d');
    if (offscreenCtx && videoRef.current) {
      offscreenCtx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const result = recognizeColorsFromGrid(offscreenCtx, offscreenCanvas);
      // Pass the overlay data to the parent via callback
      onOverlayDataCaptured(result);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {!opencvReady ? (
        <p>Loading OpenCV...</p>
      ) : (
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          style={{
            width: '100%',
            border: '1px solid black',
          }}
        />
      )}
      {showColorPalette && (
        <ColorPicker
          onSelectColor={handleColorSelect}
          onClose={() => {
            setShowColorPalette(false);
            setSelectedSquare(null);
          }}
        />
      )}
    </div>
  );
};

export default RubiksCubeRecognizer;
