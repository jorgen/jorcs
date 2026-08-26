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

import type { OverlayData } from './useCubeStore';

type RubiksCubeRecognizerProps = {
  currentSide: number;
  detectionEnabled: boolean;
  overlayData: OverlayData;
  onOverlayDataCaptured: (overlayData: OverlayData) => void;
  onOverlayDataUpdated: (overlayData: OverlayData) => void;
};

declare const cv: any; // Declare OpenCV.js

// Draw the video to fill the target rect while preserving its aspect ratio
// (cover: crop the overflow instead of stretching). Without this the camera feed
// is squashed to the fixed 640x480 canvas, so on a portrait phone a physical
// square cube can't line up with the square detection grid. The same crop is used
// for the preview, the alignment detection and the capture so they stay in sync.
function drawVideoCover(
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  width: number,
  height: number,
) {
  const vw = video.videoWidth;
  const vh = video.videoHeight;
  if (!vw || !vh) {
    ctx.drawImage(video, 0, 0, width, height);
    return;
  }
  const scale = Math.max(width / vw, height / vh);
  const sw = width / scale;
  const sh = height / scale;
  const sx = (vw - sw) / 2;
  const sy = (vh - sh) / 2;
  ctx.drawImage(video, sx, sy, sw, sh, 0, 0, width, height);
}

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

  // The render loop lives as long as the camera does, so it must not close over
  // values that change while it runs. Listing them as dependencies of the camera
  // effect is what makes every capture and every hand-corrected square stop the
  // MediaStream and call getUserMedia again -- which also resets the camera's
  // auto-exposure and white balance in the middle of a scan. Mirror them into
  // refs and read them per frame instead. onOverlayDataCaptured is mirrored for
  // the same reason: it closes over the parent's currentSide, so a copy taken
  // once at camera start would file a later face's colours under the side that
  // happened to be showing then.
  const detectionEnabledRef = useRef(detectionEnabled);
  const cubeDetectedRef = useRef(cubeDetected);
  const currentSideRef = useRef(currentSide);
  const overlayDataRef = useRef(overlayData);
  const onCapturedRef = useRef(onOverlayDataCaptured);
  useEffect(() => {
    detectionEnabledRef.current = detectionEnabled;
    cubeDetectedRef.current = cubeDetected;
    currentSideRef.current = currentSide;
    overlayDataRef.current = overlayData;
    onCapturedRef.current = onOverlayDataCaptured;
  });

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
    // The stream is held here rather than read back off video.srcObject, so one
    // that arrives after teardown is still stopped instead of being left running
    // with nothing pointing at it.
    let cancelled = false;
    let stream: MediaStream | null = null;

    const initCamera = async () => {
      try {
        const constraints = {
          video: true,
        };
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        if (cancelled) {
          mediaStream.getTracks().forEach((track) => track.stop());
          return;
        }
        stream = mediaStream;
        video.srcObject = mediaStream;
        await video.play();
        if (cancelled) return;
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
          drawVideoCover(ctx, videoRef.current, canvas.width, canvas.height);

          // Restore the context to its original state
          ctx.restore();

          // Cube detection logic
          if (detectionEnabledRef.current) {
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
                  !cubeDetectedRef.current
                ) {
                  // Latch on the ref, not on the state: setCubeDetected only
                  // takes effect at the next render, so a state-only guard lets
                  // the frames in between capture the same face over again.
                  cubeDetectedRef.current = true;
                  setCubeDetected(true);
                  captureFrame();
                }
              } else {
                cubeDetectionCounter.current = 0;
              }
            }
          }

          // Draw the overlay grid with visual feedback (adjusted for flipped canvas)
          drawOverlay(ctx, cubeDetectedRef.current ? 'green' : 'red');

          drawOverlayColors(ctx, overlayDataRef.current);

          // Draw side overlay (unaffected by flip)
          drawSideOverlay(ctx, currentSideRef.current);
        }
      }
      if (!cancelled) {
        animationFrameId.current = requestAnimationFrame(renderFrame);
      }
    };

    initCamera();

    return () => {
      cancelled = true;
      stream?.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [opencvReady]);

  useEffect(() => {
    if (detectionEnabled) {
      // Release the capture latch here rather than waiting for the state to come
      // back round, so Retake re-arms on the very next frame.
      cubeDetectedRef.current = false;
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

    const isPicked = (rowIndex: number, colIndex: number) =>
      rowIndex === selectedSquare.row && colIndex === selectedSquare.col;
    // The square is marked as picked as well as recoloured. Without that the app
    // cannot tell a colour the user chose from one the camera guessed, and would
    // go on treating this square as evidence -- including as the square most
    // likely to have been misread.
    const previouslyPinned = overlayData.pinned;
    const updatedOverlayData: OverlayData = {
      ...overlayData,
      colors: overlayData.colors.map((row, rowIndex) =>
        row.map((colColor, colIndex) => (isPicked(rowIndex, colIndex) ? color : colColor)),
      ),
      pinned: Array.from({ length: 3 }, (_, rowIndex) =>
        Array.from(
          { length: 3 },
          (_, colIndex) =>
            isPicked(rowIndex, colIndex) || (previouslyPinned?.[rowIndex]?.[colIndex] ?? false),
        ),
      ),
    };

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
      drawVideoCover(offscreenCtx, videoRef.current, canvas.width, canvas.height);
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

  // Is a 3x3 face sitting in the scan region?
  //
  // Only the two lines BETWEEN the stickers are required. The old check also
  // demanded the two outer edges, which sit exactly on the crop boundary -- so the
  // cube had to be squared up to within a few pixels of filling the region, and
  // being slightly too small or too large failed even with the grout dead centre.
  // (It asked for 80% of four lines, which needs four: 0.8 * 4 = 3.2.) The inner
  // pair is what actually identifies a face, and they are the lines the camera sees
  // most reliably, so they decide it; the outer edges are no longer consulted.
  const compareLinesWithOverlay = (
    detectedHorizontalLines: number[],
    detectedVerticalLines: number[],
    canvas: HTMLCanvasElement,
  ): boolean => {
    const gridSize = 3;
    const gridLength = Math.min(canvas.width, canvas.height) * 0.5;
    const step = gridLength / gridSize;
    const tolerance = gridLength * 0.05;

    const innerLines = [step, 2 * step];
    const found = (expected: number[], detected: number[]) =>
      expected.every((position) =>
        detected.some((candidate) => Math.abs(candidate - position) < tolerance),
      );

    return found(innerLines, detectedVerticalLines) && found(innerLines, detectedHorizontalLines);
  };

  const captureFrame = () => {
    // Create an off-screen canvas to get the unflipped image data
    const canvas = canvasRef.current!;
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext('2d');
    if (offscreenCtx && videoRef.current) {
      drawVideoCover(offscreenCtx, videoRef.current, canvas.width, canvas.height);

      const result = recognizeColorsFromGrid(offscreenCtx, offscreenCanvas);
      // Pass the overlay data to the parent via callback
      onCapturedRef.current(result);
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <button
          type="button"
          onClick={() => {
            cubeDetectedRef.current = true;
            setCubeDetected(true);
            captureFrame();
          }}
          style={{ background: '#213547', color: '#ffffff', border: '1px solid #213547' }}
        >
          Capture now
        </button>
      </div>
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
