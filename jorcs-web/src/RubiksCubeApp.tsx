import React, { useState } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';

type OverlayData = {
  colors: string[][];
  hsvValues: { h: number; s: number; v: number }[][];
  subImages: string[][];
};

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

  const [overlayData, setOverlayData] = useState<OverlayData | null>(null);
  const [detectionEnabled, setDetectionEnabled] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showDebugPane, setShowDebugPane] = useState(true);

  const handleOverlayDataCaptured = (data: OverlayData) => {
    setOverlayData(data);
    setShowPrompt(true);
    setDetectionEnabled(false);
  };

  // Define the handleOverlayDataUpdated function
  const handleOverlayDataUpdated = (updatedData: OverlayData) => {
    setOverlayData(updatedData);
  };

  const handleNextSide = () => {
    if (!overlayData) return;

    setCubeColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[currentSide] = overlayData.colors;
      return newColors;
    });

    if (currentSide < 5) {
      setCurrentSide(currentSide + 1);
    } else {
      console.log('All sides scanned');
    }

    // Reset for next side
    setOverlayData(null);
    setShowPrompt(false);
    setDetectionEnabled(true);
  };

  const handleRetake = () => {
    setOverlayData(null);
    setShowPrompt(false);
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
        {showPrompt && (
          <div style={{ marginTop: '10px' }}>
            <p>Side {currentSide + 1} captured. What would you like to do?</p>
            <button onClick={handleRetake}>Retake</button>
            <button onClick={handleNextSide}>Next Side</button>
          </div>
        )}
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <RubiksCubeViewer
          cubeColors={cubeColors}
          setCubeColors={setCubeColors}
          currentSide={currentSide}
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
