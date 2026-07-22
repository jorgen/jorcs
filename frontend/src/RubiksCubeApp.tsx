import React, { useEffect, useRef, useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';
import IntroOverlay from './IntroOverlay';
import useCubeStore, { createDefaultOverlayData, OverlayData, sideOrder } from './useCubeStore';
import { ensureSolver, playMoves, randomScramble, solveScannedColors } from './solver';
import { blankCubeColors, colorsAfterMoves, invertMove, solvedCubeColors } from './cubeColors';

const INTRO_SEEN_KEY = 'jorcs-intro-seen';

// True when the viewport is phone-sized, kept in sync as it changes.
function useIsMobile(breakpoint = 768): boolean {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return isMobile;
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

  const isMobile = useIsMobile();

  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  // The current solution and how many of its moves have been applied so far.
  const [solution, setSolution] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  // The cube state (colour grid) the current solution was computed from -- i.e.
  // step 0 of the player. Replaying solution moves onto it snaps the cube to any
  // step, so the player can jump to the start or to any move.
  const [initialColors, setInitialColors] = useState<string[][][]>([]);
  const [showIntro, setShowIntro] = useState(false);

  // Show the how-it-works overlay on the first visit.
  useEffect(() => {
    try {
      if (!localStorage.getItem(INTRO_SEEN_KEY)) setShowIntro(true);
    } catch {
      setShowIntro(true);
    }
  }, []);

  const closeIntro = () => {
    setShowIntro(false);
    try {
      localStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
  };

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
        // Remember the cube exactly as solved so the player can jump to any step.
        setInitialColors(cubeColors.map((face) => face.map((row) => [...row])));
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

  // Snap the cube to the state with the first `target` solution moves applied
  // (target = 0 is the start). The colour grid alone drives the 3D display, so this
  // is an instant jump; Next / Play all then continue from there.
  const goToStep = (target: number) => {
    if (busy || solution.length === 0) return;
    const clamped = Math.max(0, Math.min(target, solution.length));
    setCubeColors(colorsAfterMoves(initialColors, solution.slice(0, clamped)));
    setStep(clamped);
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

  // Start from scratch: clear the solution and wipe the cube back to a blank,
  // unscanned state, ready to scan a fresh cube from the first side.
  const handleReset = () => {
    if (busy) return;
    clearSolution();
    setInitialColors([]);
    setStatus('');
    setCubeColors(blankCubeColors());
    setNewSide(sideOrder[0]);
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

  const scannerBlock = (
    <div>
      <RubiksCubeRecognizer
        currentSide={currentSide}
        detectionEnabled={detectionEnabled}
        overlayData={overlayData}
        onOverlayDataCaptured={handleOverlayDataCaptured}
        onOverlayDataUpdated={handleOverlayDataUpdated}
      />
      <div style={{ marginTop: '10px' }}>
        <p style={{ margin: '0 0 8px' }}>Side {currentSide + 1} of 6 — show the next face, then:</p>
        <button onClick={handlePreviousSide}>Previous Side</button>
        <button onClick={handleRetake} style={{ marginLeft: '8px' }}>Retake</button>
        <button onClick={handleNextSide} style={{ marginLeft: '8px' }}>Next Side</button>
      </div>
    </div>
  );

  const cubeBlock = (
    <div
      style={{
        width: '100%',
        maxWidth: isMobile ? '100%' : '460px',
        aspectRatio: '1 / 1',
        margin: '0 auto',
      }}
    >
      <RubiksCubeViewer
        ref={cubeViewerRef}
        cubeColors={cubeColors}
        setCubeColors={setCubeColors}
        currentSide={currentSide}
        setCurrentSide={setNewSide}
      />
    </div>
  );

  const controlsBlock = (
    <div style={{ marginTop: '12px' }}>
      <button onClick={handleScramble} disabled={busy}>
        Scramble
      </button>
      <button onClick={handleSolve} disabled={busy} style={{ marginLeft: '8px' }}>
        Solve
      </button>
      <button onClick={handleReset} disabled={busy} style={{ marginLeft: '8px' }}>
        Reset
      </button>
      {status && <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>{status}</p>}

      {solution.length > 0 && (
        <div
          style={{
            marginTop: '14px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            maxWidth: '440px',
            marginLeft: 'auto',
            marginRight: 'auto',
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
              <button
                key={index}
                type="button"
                onClick={() => goToStep(index)}
                disabled={busy}
                title={`Jump to move ${index + 1}`}
                style={{
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  background: index === step ? '#ffd500' : 'transparent',
                  color: index < step ? '#999' : index === step ? '#000' : 'inherit',
                  border: '1px solid #ddd',
                  cursor: busy ? 'default' : 'pointer',
                }}
              >
                {move}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => goToStep(0)} disabled={busy || step === 0} title="Back to the start">
              ⏮ Start
            </button>
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
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4px' }}>
        <button
          onClick={() => setShowIntro(true)}
          title="How it works"
          style={{ padding: '0.3em 0.7em', borderRadius: '50%' }}
        >
          ?
        </button>
      </div>

      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {scannerBlock}
          {cubeBlock}
          {controlsBlock}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 320px' }}>
            {scannerBlock}
            {controlsBlock}
          </div>
          <div style={{ flex: '1 1 320px' }}>{cubeBlock}</div>
        </div>
      )}

      {showIntro && <IntroOverlay onClose={closeIntro} />}
    </>
  );
};

export default RubiksCubeApp;
