// useCubeStore.ts
import { create } from 'zustand';

type HSV = { h: number; s: number; v: number };

type OverlayData = {
  colors: string[][];
  hsvValues: HSV[][];
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

function createInitialCubeColors() {
  const initialCubeColors: string[][][] = [];
  for (let i = 0; i < 6; i++) {
    initialCubeColors[i] = [];
    for (let j = 0; j < 3; j++) {
      initialCubeColors[i][j] = [];
      for (let k = 0; k < 3; k++) {
        initialCubeColors[i][j][k] = 'grey';
      }
    }
  }
  return initialCubeColors;
}

const sideOrder = [0, 5, 1, 4, 2, 3];

type CubeState = {
  cubeColors: string[][][];
  currentSide: number;
  currentIndex: number;
  overlayData: OverlayData;
  detectionEnabled: boolean;
  showDebugPane: boolean;

  setCubeColors: (
    colors: string[][][] | ((prevColors: string[][][]) => string[][][]),
  ) => void;
  setCurrentSide: (side: number) => void;
  setCurrentIndex: (index: number) => void;
  setOverlayData: (data: OverlayData) => void;
  setDetectionEnabled: (enabled: boolean) => void;
};

const useCubeStore = create<CubeState>((set) => ({
  cubeColors: createInitialCubeColors(),
  currentSide: 0,
  currentIndex: 0,
  overlayData: createDefaultOverlayData(),
  detectionEnabled: true,
  showDebugPane: true,

  setCubeColors: (colorsOrUpdater) =>
    set((state) => ({
      cubeColors:
        typeof colorsOrUpdater === 'function'
          ? colorsOrUpdater(state.cubeColors)
          : colorsOrUpdater,
    })),
  setCurrentSide: (side) => set({ currentSide: side }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setOverlayData: (data) => set({ overlayData: data }),
  setDetectionEnabled: (enabled) => set({ detectionEnabled: enabled }),
}));

export type { HSV, OverlayData };
export { createDefaultOverlayData, sideOrder};
export default useCubeStore;
