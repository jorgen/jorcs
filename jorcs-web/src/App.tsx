import { useState } from 'react';
import './App.css';


import RubiksCubeRecognizer from './cube_grabber.tsx';

function App() {
  const [showRecognizer, setShowRecognizer] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setShowRecognizer((prev) => !prev)}
          style={{ marginTop: '10px' }}
        >
          {showRecognizer ? 'Close Rubik\'s Cube Recognizer' : 'Open Rubik\'s Cube Recognizer'}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {showRecognizer && (
        <div style={{ marginTop: '20px' }}>
          <RubiksCubeRecognizer onColorRecognized={(colors) => console.log(colors)} />
        </div>
      )}

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
