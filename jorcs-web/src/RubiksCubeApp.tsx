import React, { useRef } from 'react';
import RubiksCubeRecognizer from './RubiksCubeRecognizer';
import RubiksCubeViewer from './RubiksCubeViewer';
import useCubeStore, { createDefaultOverlayData, OverlayData, sideOrder } from './useCubeStore';

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
    showDebugPane,
  } = useCubeStore();

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
        <div style={{ position: 'relative' }}>
          {/* Rotation Buttons */}
          <div>
            {[0, 1, 2, 3, 4, 5].map((side) => (
              <div key={side}>
                <button
                  onClick={() =>
                    cubeViewerRef.current?.rotateSide(side, 'clockwise')
                  }
                >
                  {side} C
                </button>
                <button
                  onClick={() =>
                    cubeViewerRef.current?.rotateSide(side, 'counterclockwise')
                  }
                >
                  {side} CC
                </button>
              </div>
            ))}
          </div>
        </div>
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
