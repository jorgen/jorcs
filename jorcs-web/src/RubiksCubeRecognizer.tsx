import React, { useEffect, useRef, useState } from 'react';
import { detectCubeAlignment } from './cubeDetection';
import { recognizeColorsFromGrid } from './colorRecognition';
import OverlayInstructions from './OverlayInstructions';
import ColorPalette from './ColorPalette';


type GridSquare = {
  row: number;
  col: number;
  x: number;
  y: number;
  size: number;
};

type RubiksCubeRecognizerProps = {
  currentSide: number;
  onSideCaptured: (sideColors: string[][]) => void;
};

declare const cv: any; // Declare OpenCV.js

const RubiksCubeRecognizer: React.FC<RubiksCubeRecognizerProps> = ({
                                                                     currentSide,
                                                                     onSideCaptured,
                                                                   }) => {
  const videoRef = useRef<HTMLVideoElement>(document.createElement('video'));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const binaryCanvasRef = useRef<HTMLCanvasElement>(null);
  const verticalLinesCanvasRef = useRef<HTMLCanvasElement>(null);
  const horizontalLinesCanvasRef = useRef<HTMLCanvasElement>(null);
  const combinedLinesCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  // New state variables
  const [cubeDetected, setCubeDetected] = useState(false);
  const cubeDetectionCounter = useRef(0);
  const cubeDetectionThreshold = 10; // Number of consecutive frames the cube must be detected
  const [opencvReady, setOpencvReady] = useState(false);
  const [detectionEnabled, setDetectionEnabled] = useState(true);

  // New states for side scanning
  const [overlayData, setOverlayData] = useState<{
    colors: string[][];
    hsvValues: { h: number; s: number; v: number }[][];
    subImages: string[][];
  } | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  const [gridSquares, setGridSquares] = useState<GridSquare[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<GridSquare | null>(null);
  const [showColorPalette, setShowColorPalette] = useState(false);

  // Frame counter state
  const [frameCounter, setFrameCounter] = useState(0);

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
          video: {
            advanced: [
              { whiteBalanceMode: 'manual' }, // Disable automatic white balance
              { exposureMode: 'manual' }, // Disable automatic exposure
              { colorTemperature: 5000 }, // Set specific color temperature if supported
            ],
          },
        };
        const mediaStream = await navigator.mediaDevices.getUserMedia(
          constraints,
        );
        video.srcObject = mediaStream;
        await video.play();
        renderFrame();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const renderFrame = () => {
      setFrameCounter((prev) => prev + 1);
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
  }, [opencvReady]);

  useEffect(() => {
    // Drawing and detection logic
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

        // Save the current context state
        ctx.save();

        // Flip the context horizontally
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);

        // Draw the video frame onto the canvas
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Restore the context to its original state
        ctx.restore();

        // Cube detection logic
        if (detectionEnabled) {
          const detectionResult = performDetection(ctx);
          if (detectionResult) {
            const {
              horizontalLines: detectedHorizontalLines,
              verticalLines: detectedVerticalLines,
              binaryImage,
              verticalLinesImage,
              horizontalLinesImage,
              combinedImage,
            } = detectionResult;

            // Display intermediate images
            if (binaryCanvasRef.current) {
              cv.imshow(binaryCanvasRef.current, binaryImage);
            }
            if (verticalLinesCanvasRef.current) {
              cv.imshow(verticalLinesCanvasRef.current, verticalLinesImage);
            }
            if (horizontalLinesCanvasRef.current) {
              cv.imshow(horizontalLinesCanvasRef.current, horizontalLinesImage);
            }
            if (combinedLinesCanvasRef.current) {
              cv.imshow(combinedLinesCanvasRef.current, combinedImage);
            }

            // Clean up images
            binaryImage.delete();
            verticalLinesImage.delete();
            horizontalLinesImage.delete();
            combinedImage.delete();

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
                captureFrame(ctx);
                // Disable detection for 10 seconds
                setDetectionEnabled(false);
              }
            } else {
              cubeDetectionCounter.current = 0;
            }
          }
        }

        // Draw the overlay grid with visual feedback
        drawOverlay(ctx, cubeDetected ? 'green' : 'red');

        // Overlay recognized colors if available
        if (overlayData) {
          drawOverlayColors(ctx, overlayData);
        }
        drawSideOverlay(ctx, currentSide);
      }
    }
  }, [
    frameCounter,
    detectionEnabled,
    cubeDetected,
    overlayData,
    currentSide,
  ]);

  const performDetection = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current!;
    // Determine the size of the square grid (50% of the smaller canvas dimension)
    const gridLength = Math.min(canvas.width, canvas.height) * 0.5;

    // Top-left corner to center the grid
    const gridX = (canvas.width - gridLength) / 2;
    const gridY = (canvas.height - gridLength) / 2;

    // Get the region of interest (ROI) from the canvas
    const imageData = ctx.getImageData(gridX, gridY, gridLength, gridLength);

    // Call detectCubeAlignment with imageData
    const detectionResult = detectCubeAlignment(imageData, gridLength);

    return detectionResult;
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

  const drawOverlayColors = (
    ctx: CanvasRenderingContext2D,
    overlayData: {
      colors: string[][];
      hsvValues: { h: number; s: number; v: number }[][];
    },
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

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const colorName = overlayData.colors[row][col];
        ctx.fillStyle = colorName;

        const x = gridX + col * squareSize;
        const y = gridY + row * squareSize;
        ctx.fillRect(x, y, squareSize, squareSize);

        // Store the square's position and size
        squares.push({ row, col, x, y, size: squareSize });

        // Overlay the HSV values
        const hsv = overlayData.hsvValues[row][col];
        ctx.globalAlpha = 1.0; // Reset transparency for text
        ctx.fillStyle = 'black';
        ctx.font = `${squareSize * 0.1}px Arial`;
        ctx.fillText(
          `H:${hsv.h.toFixed(0)} S:${hsv.s.toFixed(0)} V:${hsv.v.toFixed(0)}`,
          x + 5,
          y + squareSize / 2,
        );
        ctx.globalAlpha = 0.5; // Set transparency back
      }
    }

    ctx.globalAlpha = 1.0; // Reset transparency

    // Update the gridSquares state
    setGridSquares(squares);
  };

  const drawSideOverlay = (
    ctx: CanvasRenderingContext2D,
    sideIndex: number,
  ) => {
    // You can implement custom drawings or use images to indicate the side orientation
    // For simplicity, we'll just display the side number
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
    const verticalMatchRatio = verticalMatches.length / expectedVerticalLines.length;
    const horizontalMatchRatio =
      horizontalMatches.length / expectedHorizontalLines.length;

    const matchThreshold = 0.8; // 80% of lines should match

    return (
      verticalMatchRatio >= matchThreshold && horizontalMatchRatio >= matchThreshold
    );
  };

  const captureFrame = (ctx: CanvasRenderingContext2D) => {
    if (canvasRef.current) {
      const result = recognizeColorsFromGrid(ctx, canvasRef.current);
      setOverlayData(result); // Now includes subImages
      setDetectionEnabled(false);
      setShowPrompt(true); // Show the prompt to the user
    }
  };

  const handleCanvasClick = (event: MouseEvent) => {
    if (!canvasRef.current || !overlayData || !gridSquares.length) return;

    const canvas = canvasRef.current!;
    // Get the click coordinates relative to the canvas
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    // Check if the click is within any of the grid squares
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

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener('click', handleCanvasClick);
    }
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('click', handleCanvasClick);
      }
    };
  }, [canvasRef.current, overlayData, gridSquares]);

  const handleColorSelect = (color: string) => {
    if (!overlayData || !selectedSquare) return;

    // Update the color in the overlayData
    const updatedOverlayData = { ...overlayData };
    updatedOverlayData.colors = overlayData.colors.map((row, rowIndex) =>
      row.map((colColor, colIndex) => {
        if (rowIndex === selectedSquare.row && colIndex === selectedSquare.col) {
          return color;
        }
        return colColor;
      }),
    );

    setOverlayData(updatedOverlayData);

    // Close the color palette
    setShowColorPalette(false);
    setSelectedSquare(null);
  };

  const handleNextSide = () => {
    if (!overlayData) return;

    onSideCaptured(overlayData.colors);
    resetForNextSide();
  };
  const resetForNextSide = () => {
    setDetectionEnabled(true);
    setCubeDetected(false);
    setOverlayData(null);
    setShowPrompt(false);
  };

  const handleRetake = () => {
    setDetectionEnabled(true);
    setCubeDetected(false);
    setOverlayData(null);
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
      <OverlayInstructions currentSide={currentSide} />
      {showPrompt && (
        <div style={{ marginTop: '10px' }}>
          <p>Side {currentSide + 1} captured. What would you like to do?</p>
          <button onClick={handleRetake}>Retake</button>
          <button onClick={handleNextSide}>Next Side</button>
        </div>
      )}
      {!detectionEnabled && !showPrompt && (
        <button onClick={handleRetake} style={{ marginTop: '10px' }}>
          Retake
        </button>
      )}
      {showColorPalette && (
        <ColorPalette
          onSelectColor={handleColorSelect}
          onClose={() => setShowColorPalette(false)}
        />
      )}
      {overlayData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Debug Pane - Sub Images Used in Color Detection</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
            }}
          >
            {overlayData.subImages.map((row, rowIndex) =>
              row.map((imageSrc, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`}>
                  <img
                    src={imageSrc}
                    alt={`Grid ${rowIndex}, ${colIndex}`}
                    style={{ width: '100%' }}
                  />
                  <p>
                    Color: {overlayData.colors[rowIndex][colIndex]}
                    <br />
                    HSV: H{overlayData.hsvValues[rowIndex][colIndex].h.toFixed(0)} S
                    {overlayData.hsvValues[rowIndex][colIndex].s.toFixed(0)} V
                    {overlayData.hsvValues[rowIndex][colIndex].v.toFixed(0)}
                  </p>
                </div>
              )),
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default RubiksCubeRecognizer;
