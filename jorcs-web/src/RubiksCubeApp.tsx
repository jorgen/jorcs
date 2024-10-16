import React, { useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';

type OverlayData = {
  colors: string[][];
  hsvValues: { h: number; s: number; v: number }[][];
  subImages: string[][];
};

function createDefaultOverlayData(): OverlayData {
  const defaultColor = 'grey';
  const defaultHSV = { h: 0, s: 0, v: 50 }; // Grey in HSV
  const rows = 3;
  const cols = 3;

  const colors = Array.from({ length: rows }, () =>
    Array(cols).fill(defaultColor),
  );
  const hsvValues = Array.from({ length: rows }, () =>
    Array(cols).fill({ ...defaultHSV }),
  );
  const subImages = Array.from({ length: rows }, () => Array(cols).fill(''));

  return {
    colors,
    hsvValues,
    subImages,
  };
}

const sideOrder = [0, 5, 1, 4, 2, 3];

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const [overlayData, setOverlayData] = useState<OverlayData>(createDefaultOverlayData());
  const [detectionEnabled, setDetectionEnabled] = useState(true);
  const [showDebugPane] = useState(true);

  function handleSetOverlayData(data: OverlayData) {
    setOverlayData(data);
    setCubeColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[currentSide] = data.colors;
      return newColors;
    });
  }

  const handleOverlayDataCaptured = (data: OverlayData) => {
    handleSetOverlayData(data);
    setDetectionEnabled(false);
  };

  // Define the handleOverlayDataUpdated function
  const handleOverlayDataUpdated = (updatedData: OverlayData) => {
    handleSetOverlayData(updatedData);
  };

  const setNewSide = (side: number) => {
    setCubeColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[currentSide] = overlayData.colors;
      return newColors;
    });

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
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <RubiksCubeViewer
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
