import React from 'react';

type IntroOverlayProps = {
  onClose: () => void;
};

// A dismissible "how it works" overlay shown on the first visit (and reopenable
// from the ? button). Explains the scan-a-side / turn-the-cube / scan-the-next
// workflow and the follow-along solve.
const IntroOverlay: React.FC<IntroOverlayProps> = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          background: '#2b2b2b',
          color: '#eee',
          borderRadius: '12px',
          padding: '20px 22px',
          maxWidth: '440px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          textAlign: 'left',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem' }}>Solve your Rubik's cube</h2>
        <p style={{ margin: '0 0 14px', opacity: 0.7, fontSize: '0.9rem' }}>
          Scan your real cube with the camera, then follow the solution move by move.
        </p>

        <ol style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.55 }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Scan a side.</strong> Hold one face flat to the camera and fit it inside the
            grid until the grid turns green. The colours appear on the 3-D cube.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Keep the same grip and turn the cube.</strong> Without regripping, rotate the
            cube to bring the next face to the camera — this keeps every side the right way up — and
            scan it. Repeat until all six sides are captured (the counter shows which side you're on).
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Fix any misreads.</strong> If a square's colour is wrong, tap it and pick the
            correct colour. Each colour must appear exactly nine times.
          </li>
          <li>
            <strong>Solve and follow along.</strong> Press <strong>Solve</strong>, then step through
            with <strong>Next</strong> / <strong>Previous</strong> — make each shown move on your own
            cube.
          </li>
        </ol>

        <p style={{ marginTop: '14px', fontSize: '0.9rem', opacity: 0.8 }}>
          No cube handy? Press <strong>Scramble</strong> to mix a virtual one, then <strong>Solve</strong>.
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: '8px',
            width: '100%',
            padding: '0.7em',
            fontSize: '1rem',
            background: '#ffd500',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default IntroOverlay;
