import { useState } from 'react';
import './App.css';

import RubiksCubeApp from './RubiksCubeApp.tsx';

function App() {
  const [showRecognizer, setShowRecognizer] = useState(false);

  return (
    <>
      <div>
        <p>Jørgens Own Rubik's Cube Solver</p>
        <button
          onClick={() => setShowRecognizer((prev) => !prev)}
          style={{ marginTop: '10px' }}
        >
          {showRecognizer ? 'Close Rubik\'s Cube Recognizer' : 'Open Rubik\'s Cube Recognizer'}
        </button>
      </div>

      {showRecognizer && (
        <div style={{ marginTop: '20px' }}>
          <RubiksCubeApp />
        </div>
      )}
    </>
  );
}

export default App;
