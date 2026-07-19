import { useEffect, useState } from 'react';
import './App.css';

import RubiksCubeApp from './RubiksCubeApp.tsx';
import { solverStatus } from './solver.ts';

function App() {
  const [showRecognizer, setShowRecognizer] = useState(false);
  const [solver, setSolver] = useState('loading solver…');

  useEffect(() => {
    solverStatus()
      .then((status) => setSolver(`${status.version} — ${status.ready ? 'ready' : 'self-test failed'}`))
      .catch(() => setSolver('solver failed to load'));
  }, []);

  return (
    <>
      <div>
        <p>Jørgens Own Rubik's Cube Solver</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{solver}</p>
        <button
          onClick={() => setShowRecognizer((prev) => !prev)}
          style={{ marginTop: '10px' }}
        >
          {showRecognizer ? 'Close Rubik\'s Cube Recognizer' : 'Open Rubik\'s Cube Recognizer'}
        </button>
      </div>
      {!showRecognizer && (<img src="jorcs.webp" alt="Jørgens Own Rubik's Cube Solver" height="500" />)}
      {showRecognizer && (
        <div style={{ marginTop: '20px' }}>
          <RubiksCubeApp />
        </div>
      )}
    </>
  );
}

export default App;
