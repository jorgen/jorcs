import React, { useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';

const RubiksCubeApp: React.FC = () => {
  let initialCubeColors: string[][][] = [];
  for (let i = 0; i < 6; i++) {
    initialCubeColors[i] = [];
    for (let j = 0; j < 3; j++) {
      initialCubeColors[i][j] = [];
      for (let k = 0; k < 3; k++) {
        initialCubeColors[i][j][k] = 'grey';
      }
    }
  }
  const [cubeColors, setCubeColors] = useState<string[][][]>(initialCubeColors);
  const [currentSide, setCurrentSide] = useState(0);

  const handleSideCaptured = (sideColors: string[][]) => {
    setCubeColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[currentSide] = sideColors;
      return newColors;
    });

    if (currentSide < 5) {
      setCurrentSide(currentSide + 1);
    } else {
      console.log('All sides scanned');
    }
  };

  //const resetCube = () => {
  //  setCubeColors([]);
  //  setCurrentSide(0);
  //};

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
          onSideCaptured={handleSideCaptured}
        />
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <RubiksCubeViewer cubeColors={cubeColors} setCubeColors={setCubeColors} currentSide={currentSide} />
      </div>
    </div>
  );
};

export default RubiksCubeApp;
