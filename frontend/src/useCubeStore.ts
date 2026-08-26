// useCubeStore.ts
import { create } from 'zustand';
import { BLANK_COLOR } from './cubeColors';

import type { Lab } from './cubeAssignment';

// The one definition of what a scanned face carries. It used to be declared three
// times over -- here, in RubiksCubeRecognizer and implicitly in colorRecognition --
// and the copy on the correction path was already missing a field, which survived
// only because nothing had yet depended on it.
type OverlayData = {
  colors: string[][];
  // What the camera measured per square. Absent on a face set purely by hand.
  labs?: Lab[][];
  // How far each square's reading sat from every canonical colour. Absent when the
  // squares were picked by hand rather than measured -- a human correction is not
  // something to second-guess.
  distances?: number[][][];
  // Squares the user set by hand. These are honoured exactly and are never
  // reconsidered when the cube is relabelled.
  pinned?: boolean[][];
};

function createDefaultOverlayData(): OverlayData {
  return {
    colors: Array.from({ length: 3 }, () => Array(3).fill(BLANK_COLOR)),
  };
}

function createInitialCubeColors() {
  const initialCubeColors: string[][][] = [];
  for (let i = 0; i < 6; i++) {
    initialCubeColors[i] = [];
    for (let j = 0; j < 3; j++) {
      initialCubeColors[i][j] = [];
      for (let k = 0; k < 3; k++) {
        initialCubeColors[i][j][k] = BLANK_COLOR;
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

export type { OverlayData };
export { createDefaultOverlayData, sideOrder};
export default useCubeStore;
