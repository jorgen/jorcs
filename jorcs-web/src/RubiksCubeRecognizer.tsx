import React, { useEffect, useRef, useState } from 'react';
import { detectCubeAlignment } from './cubeDetection';
import { recognizeColorsFromGrid } from './colorRecognition';


type RubiksCubeRecognizerProps = {
  onColorRecognized?: (colors: string[][]) => void;
};

declare const cv: any; // Declare OpenCV.js

const RubiksCubeRecognizer: React.FC<RubiksCubeRecognizerProps> = ({ onColorRecognized }) => {
  const videoRef = useRef<HTMLVideoElement>(document.createElement('video'));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const binaryCanvasRef = useRef<HTMLCanvasElement>(null);
  const verticalLinesCanvasRef = useRef<HTMLCanvasElement>(null);
  const horizontalLinesCanvasRef = useRef<HTMLCanvasElement>(null);
  const combinedLinesCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const [cubeDetected, setCubeDetected] = useState(false);
  const cubeDetectionCounter = useRef(0);
  const cubeDetectionThreshold = 10; // Number of consecutive frames the cube must be detected
  const [opencvReady, setOpencvReady] = useState(false);
  const [detectionEnabled, setDetectionEnabled] = useState(true);
  const [overlayData, setOverlayData] = useState<{
    colors: string[][];
    hsvValues: { h: number; s: number; v: number }[][];
  } | null>(null);
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
                  detectionTimeoutRef.current = window.setTimeout(() => {
                    setDetectionEnabled(true);
                    setCubeDetected(false);
                    setOverlayData(null);
                  }, 10000); // 10 seconds
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
        }
      }
      animationFrameId.current = requestAnimationFrame(renderFrame);
    };

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

    const drawOverlayColors = (ctx: CanvasRenderingContext2D, overlayData: {
      colors: string[][];
      hsvValues: { h: number; s: number; v: number }[][];
    }) => {
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
          const colorName = overlayData.colors[row][col];
          ctx.fillStyle = colorName;

          const x = gridX + col * squareSize;
          const y = gridY + row * squareSize;
          ctx.fillRect(x, y, squareSize, squareSize);

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
        detectedVerticalLines.some((detectedX) => Math.abs(detectedX - expectedX) < tolerance),
      );

      // Compare detected horizontal lines with expected horizontal lines
      const horizontalMatches = expectedHorizontalLines.filter((expectedY) =>
        detectedHorizontalLines.some((detectedY) => Math.abs(detectedY - expectedY) < tolerance),
      );

      // Decide whether there is a significant overlap
      const verticalMatchRatio = verticalMatches.length / expectedVerticalLines.length;
      const horizontalMatchRatio = horizontalMatches.length / expectedHorizontalLines.length;

      const matchThreshold = 0.8; // 80% of lines should match

      return verticalMatchRatio >= matchThreshold && horizontalMatchRatio >= matchThreshold;
    };

    const captureFrame = (ctx: CanvasRenderingContext2D) => {
      if (canvasRef.current) {
        const result = recognizeColorsFromGrid(ctx, canvasRef.current);
        setOverlayData(result); // Set the overlay data to display
        if (onColorRecognized) {
          onColorRecognized(result.colors);
        }
      }
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
  }, [cubeDetected, opencvReady, detectionEnabled, overlayData]);

  const handleRetake = () => {
    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current);
    }
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
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
        <div style={{ flex: '1 1 45%', margin: '5px' }}>
          <p>Binary Image:</p>
          <canvas
            ref={binaryCanvasRef}
            width={320}
            height={320}
            style={{
              width: '100%',
              border: '1px solid black',
            }}
          />
        </div>
        <div style={{ flex: '1 1 45%', margin: '5px' }}>
          <p>Vertical Lines:</p>
          <canvas
            ref={verticalLinesCanvasRef}
            width={320}
            height={320}
            style={{
              width: '100%',
              border: '1px solid black',
            }}
          />
        </div>
        <div style={{ flex: '1 1 45%', margin: '5px' }}>
          <p>Horizontal Lines:</p>
          <canvas
            ref={horizontalLinesCanvasRef}
            width={320}
            height={320}
            style={{
              width: '100%',
              border: '1px solid black',
            }}
          />
        </div>
        <div style={{ flex: '1 1 45%', margin: '5px' }}>
          <p>Combined Lines:</p>
          <canvas
            ref={combinedLinesCanvasRef}
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

