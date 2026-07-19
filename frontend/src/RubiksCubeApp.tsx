import React, { useRef, useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';
import useCubeStore, { createDefaultOverlayData, OverlayData, sideOrder } from './useCubeStore';
import { ensureSolver, playMoves, randomScramble, solveScannedColors } from './solver';

// Solved-cube colours in the viewer's side order: 0=R 1=L 2=U 3=D 4=F 5=B.
const FACE_COLORS = ['#c41e3a', '#ff7f00', '#ffffff', '#ffd500', '#009e60', '#0051ba'];
function solvedCubeColors(): string[][][] {
  return FACE_COLORS.map((color) => Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => color)));
}

// The move that undoes a given move (for stepping backwards): X <-> X', X2 <-> X2.
function invertMove(move: string): string {
  if (move.endsWith("'")) return move[0];
  if (move.endsWith('2')) return move;
  return move[0] + "'";
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
  } = useCubeStore();

  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  // The current solution and how many of its moves have been applied so far.
  const [solution, setSolution] = useState<string[]>([]);
  const [step, setStep] = useState(0);

  // Read rotateSide fresh each call so the animated turns stay consistent.
  const rotate = (side: number, direction: 'clockwise' | 'counterclockwise') => cubeViewerRef.current?.rotateSide(side, direction);

  const clearSolution = () => {
    setSolution([]);
    setStep(0);
  };

  const handleScramble = async () => {
    if (busy) return;
    setBusy(true);
    clearSolution();
    // Start building the solver now so the first Solve isn't a cold wait.
    void ensureSolver().catch(() => {});
    setStatus('Scrambling…');
    setCubeColors(solvedCubeColors());
    await new Promise((resolve) => setTimeout(resolve, 120));
    await playMoves(randomScramble(20), rotate);
    setStatus('Scrambled — press Solve to solve it.');
    setBusy(false);
  };

  // Solve whatever cube is currently shown -- scrambled or scanned. The colour
  // grid is the source of truth for both, so one path handles both.
  const handleSolve = async () => {
    if (busy) return;
    setBusy(true);
    clearSolution();
    setStatus('Solving…');
    try {
      const moves = await solveScannedColors(cubeColors);
      if (moves.length === 0) {
        setStatus('The cube is already solved.');
      } else {
        setSolution(moves);
        setStep(0);
        setStatus(`Solution: ${moves.length} moves. Step through them below.`);
      }
    } catch (error) {
      const message = (error as Error).message;
      setStatus(
        message.includes('bad-scan')
          ? 'Could not read the cube — check the colours (each must appear 9 times) and try again.'
          : `Solve failed: ${message}`,
      );
    }
    setBusy(false);
  };

  const stepForward = async () => {
    if (busy || step >= solution.length) return;
    setBusy(true);
    await playMoves([solution[step]], rotate);
    setStep(step + 1);
    setBusy(false);
  };

  const stepBack = async () => {
    if (busy || step <= 0) return;
    setBusy(true);
    await playMoves([invertMove(solution[step - 1])], rotate);
    setStep(step - 1);
    setBusy(false);
  };

  const playRest = async () => {
    if (busy || step >= solution.length) return;
    setBusy(true);
    const rest = solution.slice(step);
    await playMoves(rest, rotate);
    setStep(solution.length);
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

  const solved = solution.length > 0 && step === solution.length;

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
        <div style={{ marginTop: '12px' }}>
          <button onClick={handleScramble} disabled={busy}>
            Scramble
          </button>
          <button onClick={handleSolve} disabled={busy} style={{ marginLeft: '8px' }}>
            Solve
          </button>
          {status && <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>{status}</p>}
        </div>

        {solution.length > 0 && (
          <div
            style={{
              marginTop: '14px',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              maxWidth: '420px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <strong>Solution</strong>
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                {solved ? 'done' : `move ${step + 1} of ${solution.length}`}
              </span>
            </div>

            <div style={{ fontSize: '2rem', textAlign: 'center', margin: '8px 0', minHeight: '2.4rem' }}>
              {solved ? '✓ Solved' : solution[step]}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
              {solution.map((move, index) => (
                <span
                  key={index}
                  style={{
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    background: index === step ? '#ffd500' : 'transparent',
                    color: index < step ? '#999' : index === step ? '#000' : 'inherit',
                    border: '1px solid #ddd',
                  }}
                >
                  {move}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={stepBack} disabled={busy || step === 0}>
                ◀ Previous
              </button>
              <button onClick={stepForward} disabled={busy || solved}>
                Next ▶
              </button>
              <button onClick={playRest} disabled={busy || solved} style={{ marginLeft: 'auto' }}>
                Play all
              </button>
            </div>
          </div>
        )}
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
    </div>
  );
};

export default RubiksCubeApp;
