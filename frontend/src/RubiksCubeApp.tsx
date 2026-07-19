import React, { useRef, useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';
import useCubeStore, { createDefaultOverlayData, OverlayData, sideOrder } from './useCubeStore';
import { ensureSolver, playMoves, randomScramble, solveScramble } from './solver';

// Solved-cube colours in the viewer's side order: 0=R 1=L 2=U 3=D 4=F 5=B.
const FACE_COLORS = ['#c41e3a', '#ff7f00', '#ffffff', '#ffd500', '#009e60', '#0051ba'];
function solvedCubeColors(): string[][][] {
  return FACE_COLORS.map((color) => Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => color)));
}

const RubiksCubeApp: React.FC = () => {
  const cubeViewerRef = useRef<{
    rotateSide: (
      sideIndex: number,
      direction: 'clockwise' | 'counterclockwise',
    ) => void;
  }>(null);

  const {
    cubeColors,
    setCubeColors,
    currentSide,
    setCurrentSide,
    currentIndex,
    setCurrentIndex,
    overlayData,
    setOverlayData,
    detectionEnabled,
    setDetectionEnabled,
    showDebugPane,
  } = useCubeStore();

  const [scramble, setScramble] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  // Read rotateSide fresh each call so the animated turns stay consistent.
  const rotate = (side: number, direction: 'clockwise' | 'counterclockwise') => cubeViewerRef.current?.rotateSide(side, direction);

  const handleScramble = async () => {
    if (busy) return;
    setBusy(true);
    // Start downloading the pattern databases now so the first Solve isn't a cold wait.
    void ensureSolver().catch(() => {});
    setStatus('Scrambling…');
    setCubeColors(solvedCubeColors());
    await new Promise((resolve) => setTimeout(resolve, 120));
    const moves = randomScramble(20);
    setScramble(moves.join(' '));
    await playMoves(moves, rotate);
    setStatus('Scrambled — press Solve for the optimal solution.');
    setBusy(false);
  };

  const handleSolve = async () => {
    if (busy || !scramble) return;
    setBusy(true);
    setStatus('Solving…');
    try {
      const solution = await solveScramble(scramble);
      setStatus(`Solution: ${solution.length} moves — ${solution.join(' ')}`);
      await playMoves(solution, rotate);
      setScramble('');
      setStatus(`Solved in ${solution.length} moves.`);
    } catch (error) {
      setStatus(`Solve failed: ${(error as Error).message}`);
    }
    setBusy(false);
  };

  const handleSetOverlayData = (data: OverlayData) => {
    setOverlayData(data);
    setCubeColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[currentSide] = data.colors;
      return newColors;
    });
  };

  const handleOverlayDataCaptured = (data: OverlayData) => {
    handleSetOverlayData(data);
    setDetectionEnabled(false);
  };

  const handleOverlayDataUpdated = (updatedData: OverlayData) => {
    handleSetOverlayData(updatedData);
  };

  const setNewSide = (side: number) => {
    setCurrentSide(side);
    for (let i = 0; i < 6; i++) {
      if (sideOrder[i] === side) {
        setCurrentIndex(i);
        break;
      }
    }

    setOverlayData(createDefaultOverlayData());
    setDetectionEnabled(true);
  };

  const handlePreviousSide = () => {
    const previousIndex = (currentIndex + 5) % 6;
    setNewSide(sideOrder[previousIndex]);
  };

  const handleNextSide = () => {
    const nextIndex = (currentIndex + 1) % 6;
    setNewSide(sideOrder[nextIndex]);
  };

  const handleRetake = () => {
    setDetectionEnabled(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: '1 1 300px' }}>
        <RubiksCubeRecognizer
          currentSide={currentSide}
          detectionEnabled={detectionEnabled}
          overlayData={overlayData}
          onOverlayDataCaptured={handleOverlayDataCaptured}
          onOverlayDataUpdated={handleOverlayDataUpdated}
        />
        <div style={{ marginTop: '10px' }}>
          <p>Side {currentSide + 1} captured. What would you like to do?</p>
          <button onClick={handlePreviousSide}>Previous Side</button>
          <button onClick={handleRetake}>Retake</button>
          <button onClick={handleNextSide}>Next Side</button>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Rotation Buttons */}
          <div>
            {[0, 1, 2, 3, 4, 5].map((side) => (
              <div key={side}>
                <button
                  onClick={() =>
                    cubeViewerRef.current?.rotateSide(side, 'clockwise')
                  }
                >
                  {side} C
                </button>
                <button
                  onClick={() =>
                    cubeViewerRef.current?.rotateSide(side, 'counterclockwise')
                  }
                >
                  {side} CC
                </button>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '12px' }}>
          <button onClick={handleScramble} disabled={busy}>
            Scramble
          </button>
          <button onClick={handleSolve} disabled={busy || !scramble} style={{ marginLeft: '8px' }}>
            Solve
          </button>
          {status && <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>{status}</p>}
        </div>
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <RubiksCubeViewer
          ref={cubeViewerRef}
          cubeColors={cubeColors}
          setCubeColors={setCubeColors}
          currentSide={currentSide}
          setCurrentSide={setNewSide}
        />
      </div>
      {showDebugPane && overlayData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Debug Pane - Sub Images Used in Color Recognition</h3>
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
                  <p>Color: {overlayData.colors[rowIndex][colIndex]}</p>
                </div>
              )),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RubiksCubeApp;
