import React, { useEffect, useMemo, useRef, useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';
import IntroOverlay from './IntroOverlay';
import useCubeStore, { createDefaultOverlayData, OverlayData, sideOrder } from './useCubeStore';
import { ensureSolver, playMoves, randomScramble, solveScannedColors } from './solver';
import { blankCubeColors, colorsAfterMoves, invertMove, solvedCubeColors } from './cubeColors';
import { COLOR_NAMES, type Defect, type Explanation, colorId, colorTally } from './cubeDiagnosis';
import { CANONICAL_LABS } from './colorRecognition';
import { type Lab, type Measurement, type Pin, relabelCube } from './cubeAssignment';

const INTRO_SEEN_KEY = 'jorcs-intro-seen';

// Who a problem belongs to, and how loudly to say so. "incomplete" is not a
// problem at all -- you just aren't finished scanning yet.
//
// Each tone carries its own text colour as well as its background. The page is
// dark by default (index.css) and light under prefers-color-scheme, so anything
// that sets a background MUST set the foreground too -- otherwise it inherits the
// theme's near-white body text and lands white-on-white.
const DIAGNOSIS_TONE: Record<
  Explanation['blame'],
  { icon: string; border: string; background: string; text: string }
> = {
  incomplete: { icon: 'ℹ️', border: '#9bb7d4', background: '#eef4fb', text: '#1c3d5a' },
  scan: { icon: '👀', border: '#d9b271', background: '#fdf5e6', text: '#6b4a12' },
  cube: { icon: '🧩', border: '#d48b8b', background: '#fbeeee', text: '#7a2626' },
};

// Buttons get `background-color: #1a1a1a` from index.css in dark mode, so one
// sitting on a light panel needs both of its own colours as well.
const PANEL_BUTTON: React.CSSProperties = {
  background: '#213547',
  color: '#ffffff',
  border: '1px solid #213547',
};

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
    ensureGoodViewingAngle: () => Promise<void>;
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

  // What the camera actually measured for each face, kept beside the colours it
  // produced at the time. Any turn permutes the colour grid but not this, so the
  // colours are the receipt: if a face no longer matches, its measurements are
  // stale and get ignored rather than believed.
  const scanReadingsRef = useRef<({ colors: string[][]; distances: number[][][] } | null)[]>(
    Array.from({ length: 6 }, () => null),
  );

  // Everything the scan knows so far, indexed by facelet (face * 9 + row * 3 + col).
  // Held flat rather than per face because the labelling is decided across the
  // whole cube at once: a square read on the first face can change its mind when
  // the sixth is measured, and there is no point at which a face is finished.
  const scanRef = useRef<{
    labs: (Lab | null)[];
    distances: (number[] | null)[];
    provisional: (string | null)[];
    pins: (number | null)[];
  }>({
    labs: Array(54).fill(null),
    distances: Array(54).fill(null),
    provisional: Array(54).fill(null),
    pins: Array(54).fill(null),
  });
  // The grid the last relabelling wrote. Turning the cube permutes the colours but
  // not the measurements, so if the live grid has drifted from this one every
  // measurement now describes a square that has moved, and the lot is dropped.
  const appliedRef = useRef<string[][][] | null>(null);
  // The colour each square was given on its own, before the nine-of-each rule was
  // applied. The tally counts these: an assignment can never report ten yellows,
  // so counting its output would quietly retire the app's ability to notice a face
  // scanned twice.
  const [rawColors, setRawColors] = useState<string[][][] | null>(null);

  const clearScan = () => {
    scanRef.current = {
      labs: Array(54).fill(null),
      distances: Array(54).fill(null),
      provisional: Array(54).fill(null),
      pins: Array(54).fill(null),
    };
    scanReadingsRef.current = Array.from({ length: 6 }, () => null);
    appliedRef.current = null;
    pinWarningRef.current = false;
    setRawColors(null);
  };
  // Whether the warning currently on screen is ours, so that resolving the pins
  // takes it away again and nothing else does.
  const pinWarningRef = useRef(false);

  const [status, setStatus] = useState('');
  // What is wrong with the cube, when something is. Kept apart from `status` so a
  // problem never looks like just another progress line.
  const [diagnosis, setDiagnosis] = useState<Explanation | null>(null);
  // The squares the diagnosis implicates, spotlighted on the 3D cube.
  const [highlight, setHighlight] = useState<ReadonlySet<number> | null>(null);
  // A solution for a cube that cannot actually be solved, and the piece it will
  // leave visibly wrong. Offered rather than played, so the ending is never a
  // surprise.
  const [anyway, setAnyway] = useState<{ moves: string[]; defect: Defect | null } | null>(null);
  // Set once "Solve it anyway" is running, so the player can say what to expect.
  const [expectedDefect, setExpectedDefect] = useState<Defect | null>(null);
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

  // Scanning parks the camera square in front of a face, and from there the
  // layers turning away from it move nothing you can see. Swing round to a
  // corner of the cube before playing any turns -- the viewer only moves the
  // camera when the angle is actually bad, so this is usually instant.
  const showTheCube = () => cubeViewerRef.current?.ensureGoodViewingAngle();

  const clearSolution = () => {
    setSolution([]);
    setStep(0);
    setExpectedDefect(null);
  };

  const clearDiagnosis = () => {
    setDiagnosis(null);
    setHighlight(null);
    setAnyway(null);
  };

  const handleScramble = async () => {
    if (busy) return;
    setBusy(true);
    clearSolution();
    clearDiagnosis();
    // Start building the solver now so the first Solve isn't a cold wait.
    void ensureSolver().catch(() => {});
    setStatus('Scrambling…');
    clearScan();
    setCubeColors(solvedCubeColors());
    await new Promise((resolve) => setTimeout(resolve, 120));
    await showTheCube();
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
    clearDiagnosis();
    setStatus('Solving…');
    try {
      const outcome = await solveScannedColors(cubeColors, scanReadingsRef.current);
      if (outcome.kind === 'fault') {
        setStatus('');
        setDiagnosis(outcome.explanation);
        setHighlight(outcome.highlight.length > 0 ? new Set(outcome.highlight) : null);
        setAnyway(
          outcome.anywayMoves ? { moves: outcome.anywayMoves, defect: outcome.defect ?? null } : null,
        );
      } else if (outcome.kind === 'error') {
        setStatus('');
        setDiagnosis({
          blame: 'scan',
          headline: 'The solver could not finish.',
          detail: outcome.message,
        });
      } else if (outcome.moves.length === 0) {
        setStatus('The cube is already solved.');
      } else {
        // Remember the cube exactly as solved so the player can jump to any step.
        setInitialColors(cubeColors.map((face) => face.map((row) => [...row])));
        setSolution(outcome.moves);
        setStep(0);
        setStatus(`Solution: ${outcome.moves.length} moves. Step through them below.`);
      }
    } catch (error) {
      setStatus('');
      setDiagnosis({
        blame: 'scan',
        headline: 'Something went wrong while solving.',
        detail: (error as Error).message,
      });
    }
    setBusy(false);
  };

  // Play the solution computed for the REPAIRED cube. Turning cannot fix a
  // mis-assembled cube, but it can bring everything else home: these moves solve
  // the whole cube except the one piece that is physically in wrong, which is left
  // sitting in its own place, visibly wrong. That leftover IS the diagnosis.
  const handleSolveAnyway = () => {
    if (busy || !anyway) return;
    const { moves, defect } = anyway;
    clearDiagnosis();
    setInitialColors(cubeColors.map((face) => face.map((row) => [...row])));
    setSolution(moves);
    setStep(0);
    setExpectedDefect(defect);
    setStatus(
      moves.length === 0
        ? 'Nothing to turn — the cube is already as solved as it can get.'
        : `Solution: ${moves.length} moves. It will not finish clean — see below.`,
    );
  };

  const stepForward = async () => {
    if (busy || step >= solution.length) return;
    setBusy(true);
    await showTheCube();
    await playMoves([solution[step]], rotate);
    setStep(step + 1);
    setBusy(false);
  };

  const stepBack = async () => {
    if (busy || step <= 0) return;
    setBusy(true);
    await showTheCube();
    await playMoves([invertMove(solution[step - 1])], rotate);
    setStep(step - 1);
    setBusy(false);
  };

  const playRest = async () => {
    if (busy || step >= solution.length) return;
    setBusy(true);
    const rest = solution.slice(step);
    await showTheCube();
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

  // A cost the solver will never prefer, used to say "this square is not up for
  // discussion" about a colour the user chose by hand.
  const PINNED_ELSEWHERE = 60000;

  const sameGrid = (a: string[][][], b: string[][][]) =>
    a.every((face, f) => face.every((row, r) => row.every((color, c) => color === b[f][r][c])));

  // Re-label every square measured so far, in one assignment over the whole cube.
  // Deliberately not per face: committing a face and moving on makes the last face
  // markedly worse than doing nothing, because the early mistakes have already
  // spent the capacity and whatever is left gets forced onto the leftovers.
  const applyRelabelling = (previous: string[][][]) => {
    const scan = scanRef.current;
    const measurements: Measurement[] = [];
    const pins: Pin[] = [];
    for (let facelet = 0; facelet < 54; facelet++) {
      const lab = scan.labs[facelet];
      if (lab) measurements.push({ facelet, lab });
      const pin = scan.pins[facelet];
      if (pin !== null) pins.push({ facelet, color: pin });
    }
    if (measurements.length === 0 && pins.length === 0) return;

    const { colorOf, overPinned } = relabelCube(measurements, pins, CANONICAL_LABS);

    const next = previous.map((face) => face.map((row) => [...row]));
    const raw = previous.map((face) => face.map((row) => [...row]));
    for (const [facelet, id] of colorOf) {
      const f = Math.floor(facelet / 9);
      const r = Math.floor((facelet % 9) / 3);
      const c = facelet % 3;
      next[f][r][c] = COLOR_NAMES[id];
      raw[f][r][c] = scan.provisional[facelet] ?? COLOR_NAMES[id];
    }

    // Hand the solver the same measurements, now paired with the colours the
    // assignment settled on. A pinned square reports zero cost for the colour the
    // user chose and a prohibitive one for everything else, so the diagnosis can
    // no longer nominate the square they just fixed as the likeliest misread.
    scanReadingsRef.current = Array.from({ length: 6 }, (_, f) => {
      const usable = Array.from({ length: 9 }, (_, k) => f * 9 + k).every(
        (facelet) => scan.distances[facelet] !== null || scan.pins[facelet] !== null,
      );
      if (!usable) return null;
      return {
        colors: next[f].map((row) => [...row]),
        distances: [0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => {
            const facelet = f * 9 + r * 3 + c;
            const pin = scan.pins[facelet];
            if (pin !== null) {
              return Array.from({ length: 6 }, (_, id) => (id === pin ? 0 : PINNED_ELSEWHERE));
            }
            return scan.distances[facelet] ?? [];
          }),
        ),
      };
    });

    appliedRef.current = next.map((face) => face.map((row) => [...row]));
    setCubeColors(next);
    setRawColors(raw);
    if (overPinned.length > 0) {
      pinWarningRef.current = true;
      setDiagnosis({
        blame: 'scan',
        headline: `You have set more than nine squares to ${COLOR_NAMES[overPinned[0]]}.`,
        detail:
          'Every square you pick by hand is kept exactly as you set it, so the counts cannot come out right until one of them changes. Click one of them again to choose a different colour.',
      });
    } else if (pinWarningRef.current) {
      pinWarningRef.current = false;
      setDiagnosis(null);
    }
  };

  const handleSetOverlayData = (data: OverlayData) => {
    setOverlayData(data);
    // If the cube has been turned since the last relabelling -- scrambled, solved,
    // stepped through -- the stored measurements describe squares that have since
    // moved. Start the scan over rather than pairing them with the wrong squares.
    if (appliedRef.current && !sameGrid(appliedRef.current, cubeColors)) {
      clearScan();
    }
    const scan = scanRef.current;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const facelet = currentSide * 9 + r * 3 + c;
        const lab = data.labs?.[r]?.[c];
        if (lab) {
          scan.labs[facelet] = lab;
          scan.distances[facelet] = data.distances?.[r]?.[c] ?? null;
          scan.provisional[facelet] = data.colors[r][c];
        }
        if (data.pinned?.[r]?.[c]) {
          const id = colorId(data.colors[r][c]);
          scan.pins[facelet] = id >= 0 ? id : null;
          scan.provisional[facelet] = data.colors[r][c];
        }
      }
    }
    applyRelabelling(cubeColors);
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
    clearDiagnosis();
    clearScan();
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

  // A live count while scanning, so "ten yellows" shows up on the face that caused
  // it rather than at the end. A colour past nine is already impossible.
  const tally = useMemo(() => colorTally(rawColors ?? cubeColors), [rawColors, cubeColors]);

  const scannerBlock = (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', fontSize: '0.78rem' }}>
        {tally.tallies.map((t) => (
          <span
            key={t.color}
            title={t.over ? `${t.color} already appears more than nine times` : `${t.color}: ${t.count} of 9`}
            style={{
              padding: '1px 6px',
              borderRadius: '10px',
              // A colour past nine is already impossible, so it gets its own
              // background and text -- readable whichever theme the page is in.
              // The normal chips stay transparent and inherit, which is safe.
              border: `1px solid ${t.over ? '#d48b8b' : '#8886'}`,
              background: t.over ? '#fbeeee' : 'transparent',
              color: t.over ? '#7a2626' : 'inherit',
              fontWeight: t.over ? 600 : 400,
            }}
          >
            {t.color} {t.count}/9
          </span>
        ))}
      </div>
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
        highlight={highlight}
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

      {diagnosis && (
        <div
          role="alert"
          style={{
            marginTop: '10px',
            padding: '10px 12px',
            borderRadius: '6px',
            border: `1px solid ${DIAGNOSIS_TONE[diagnosis.blame].border}`,
            background: DIAGNOSIS_TONE[diagnosis.blame].background,
            color: DIAGNOSIS_TONE[diagnosis.blame].text,
            textAlign: 'left',
          }}
        >
          <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>
            {DIAGNOSIS_TONE[diagnosis.blame].icon} {diagnosis.headline}
          </p>
          <p style={{ margin: '6px 0 0', fontSize: '0.85rem', lineHeight: 1.45 }}>
            {diagnosis.detail}
          </p>
          {anyway && (
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={handleSolveAnyway}
                disabled={busy}
                style={{ ...PANEL_BUTTON, opacity: busy ? 0.5 : 1 }}
              >
                Solve it anyway
              </button>
              {anyway.defect && (
                <p style={{ margin: '6px 0 0', fontSize: '0.8rem', opacity: 0.85, lineHeight: 1.4 }}>
                  {anyway.moves.length} moves, and {anyway.defect.text}
                </p>
              )}
            </div>
          )}
        </div>
      )}

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
            {solved ? (expectedDefect ? '🧩 As far as it goes' : '✓ Solved') : solution[step]}
          </div>

          {solved && expectedDefect && (
            <p style={{ margin: '0 0 10px', fontSize: '0.82rem', lineHeight: 1.45, textAlign: 'left' }}>
              Everything is home except one piece: {expectedDefect.text}
            </p>
          )}

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
