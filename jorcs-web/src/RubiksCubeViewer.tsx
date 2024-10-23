import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ColorPicker from './ColorPicker.tsx';

type RubiksCubeViewerProps = {
  cubeColors: string[][][]; // 3D array of colors for each face
  currentSide: number; // Index of the current side being scanned
  setCubeColors: (newColors: string[][][]) => void; // Callback to update cubeColors
  setCurrentSide: (side: number) => void; // Callback to update currentSide
};

// Interaction modes
const InteractionModes = {
  ORBIT: 'ORBIT',
  COLOR_PICKER: 'COLOR_PICKER',
  SIDE_SELECTION: 'SIDE_SELECTION',
} as const;

type InteractionMode = typeof InteractionModes[keyof typeof InteractionModes];

const RubiksCubeViewer: React.FC<RubiksCubeViewerProps> = ({
                                                             cubeColors,
                                                             currentSide,
                                                             setCubeColors,
                                                             setCurrentSide,
                                                           }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedSquare, setSelectedSquare] = useState<{
    faceIndex: number;
    row: number;
    col: number;
  } | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [interactionMode, setInteractionMode] = useState<InteractionMode>(
    InteractionModes.ORBIT,
  );

  console.log('Viewer with current side: ', currentSide);

  // References to Three.js objects
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controlsRef = useRef<OrbitControls>();
  const raycasterRef = useRef<THREE.Raycaster>();
  const mouseRef = useRef<THREE.Vector2>();
  const cubiesRef = useRef<THREE.Mesh[]>([]);

  // Icons as Unicode characters or simple SVG paths
  const icons = {
    ORBIT: '🤚', // Flat hand icon
    COLOR_PICKER: '➡️', // Arrow icon
    SIDE_SELECTION: '⤵️', // Bold arrow icon
  };

  function updateAdjacentFaces(
    colors: string[][][],
    faceIndices: number[],
    _sideIndex: number,
    direction: 'clockwise' | 'counterclockwise',
    type: 'row' | 'col',
    index: number,
    needReverse: boolean[],
  ) {
    let temp: any[] = [];

    // Extract lines from adjacent faces
    faceIndices.forEach((faceIndex, idx) => {
      const face = colors[faceIndex];
      let line =
        type === 'row' ? [...face[index]] : face.map((row) => row[index]);

      if (needReverse[idx]) {
        line = line.reverse();
      }

      temp.push(line);
    });

    // Rotate the temp array based on the rotation direction
    if (direction === 'clockwise') {
      temp.unshift(temp.pop()!);
    } else {
      temp.push(temp.shift()!);
    }

    // Assign the rotated lines back to the faces
    faceIndices.forEach((faceIndex, i) => {
      const face = colors[faceIndex];
      let line = temp[i];

      if (needReverse[i]) {
        line = line.reverse();
      }

      if (type === 'row') {
        face[index] = line;
      } else {
        face.forEach((row, rowIndex) => {
          row[index] = line[rowIndex];
        });
      }
    });
  }

  const updateCubeColorsAfterRotation = useCallback(
    (sideIndex: number, direction: 'clockwise' | 'counterclockwise') => {
      const newCubeColors = cubeColors.map((face) => face.map((row) => [...row]));

      // Rotate the face itself
      newCubeColors[sideIndex] = rotateFace(newCubeColors[sideIndex], direction);

      // Update adjacent faces
      switch (sideIndex) {
        case 0: // Right face (+X)
          updateAdjacentFaces(
            newCubeColors,
            [2, 4, 3, 5], // Adjacent faces: Top, Front, Bottom, Back
            sideIndex,
            direction,
            'col',
            2,
            [false, false, false, true], // Need to reverse Back face
          );
          break;
        case 1: // Left face (-X)
          updateAdjacentFaces(
            newCubeColors,
            [2, 5, 3, 4], // Adjacent faces: Top, Back, Bottom, Front
            sideIndex,
            direction,
            'col',
            0,
            [false, false, false, true], // Need to reverse Front face
          );
          break;
        case 2: // Top face (+Y)
          updateAdjacentFaces(
            newCubeColors,
            [5, 0, 4, 1], // Adjacent faces: Back, Right, Front, Left
            sideIndex,
            direction,
            'row',
            0,
            [false, false, false, false],
          );
          break;
        case 3: // Bottom face (-Y)
          updateAdjacentFaces(
            newCubeColors,
            [4, 0, 5, 1], // Adjacent faces: Front, Right, Back, Left
            sideIndex,
            direction,
            'row',
            2,
            [false, false, false, false],
          );
          break;
        case 4: // Front face (+Z)
          updateAdjacentFaces(
            newCubeColors,
            [2, 1, 3, 0], // Adjacent faces: Top, Left, Bottom, Right
            sideIndex,
            direction,
            'row',
            2,
            [false, false, false, false],
          );
          break;
        case 5: // Back face (-Z)
          updateAdjacentFaces(
            newCubeColors,
            [2, 0, 3, 1], // Adjacent faces: Top, Right, Bottom, Left
            sideIndex,
            direction,
            'row',
            0,
            [true, false, true, false], // Need to reverse Top and Bottom faces
          );
          break;
        default:
          break;
      }

      setCubeColors(newCubeColors);
    },
    [cubeColors, setCubeColors],
  );

  const rotateSide = useCallback(
    (sideIndex: number, direction: 'clockwise' | 'counterclockwise') => {
      if (!sceneRef.current) return;

      // Determine the axis and layer value for the side
      let axis: 'x' | 'y' | 'z';
      let layerValue: number;

      switch (sideIndex) {
        case 0: // Right face (+X)
          axis = 'x';
          layerValue = 1;
          break;
        case 1: // Left face (-X)
          axis = 'x';
          layerValue = -1;
          break;
        case 2: // Top face (+Y)
          axis = 'y';
          layerValue = 1;
          break;
        case 3: // Bottom face (-Y)
          axis = 'y';
          layerValue = -1;
          break;
        case 4: // Front face (+Z)
          axis = 'z';
          layerValue = 1;
          break;
        case 5: // Back face (-Z)
          axis = 'z';
          layerValue = -1;
          break;
        default:
          return;
      }

      // Group cubies on the specified layer
      const rotationGroup = new THREE.Group();

      cubiesRef.current.forEach((cubie) => {
        if (Math.round(cubie.position[axis]) === layerValue) {
          rotationGroup.add(cubie);
        }
      });

      sceneRef.current.add(rotationGroup);

      // Define rotation parameters
      let angle = (direction === 'clockwise' ? -1 : 1) * (Math.PI / 2); // 90 degrees
      const rotationAxis = new THREE.Vector3(
        axis === 'x' ? 1 : 0,
        axis === 'y' ? 1 : 0,
        axis === 'z' ? 1 : 0,
      );

      if (sideIndex === 1 || sideIndex === 3 || sideIndex === 5) {
        angle *= -1;
      }

      // Animate the rotation
      let startTime: number | null = null;
      const duration = 500; // in milliseconds

      const animateRotation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const t = Math.min(elapsed / duration, 1); // Normalized time [0, 1]

        rotationGroup.rotation[axis] = angle * t;

        rendererRef.current?.render(sceneRef.current!, cameraRef.current!);

        if (t < 1) {
          requestAnimationFrame(animateRotation);
        } else {
          // Finalize rotation
          rotationGroup.rotation[axis] = angle;

          const cubiesToMove = [...rotationGroup.children];

          cubiesToMove.forEach((cubie) => {
            // Apply rotation to cubie's position
            cubie.position.applyAxisAngle(rotationAxis, angle);

            // Round positions to avoid floating-point errors
            cubie.position.x = Math.round(cubie.position.x);
            cubie.position.y = Math.round(cubie.position.y);
            cubie.position.z = Math.round(cubie.position.z);

            // Reset cubie's rotation
            cubie.rotation.set(0, 0, 0);

            // Remove cubie from group and add back to scene
            rotationGroup.remove(cubie);
            sceneRef.current?.add(cubie);
          });

          sceneRef.current?.remove(rotationGroup);

          // Update cubeColors state
          updateCubeColorsAfterRotation(sideIndex, direction);

          // Force a render to update the scene
          rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
        }
      };

      requestAnimationFrame(animateRotation);
    },
    [sceneRef, cubiesRef, updateCubeColorsAfterRotation],
  );

  function rotateFace(face: string[][], direction: 'clockwise' | 'counterclockwise'): string[][] {
    const n = face.length;

    // Step 1: Transpose the matrix
    let rotated = Array.from({ length: n }, () => Array(n).fill(''));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[i][j] = face[j][i];
      }
    }

    // Step 2: Reverse rows or columns based on rotation direction
    if (direction === 'clockwise') {
      // Reverse each row
      for (let i = 0; i < n; i++) {
        rotated[i].reverse();
      }
    } else {
      // Reverse each column
      for (let j = 0; j < n; j++) {
        for (let i = 0, k = n - 1; i < k; i++, k--) {
          const temp = rotated[i][j];
          rotated[i][j] = rotated[k][j];
          rotated[k][j] = temp;
        }
      }
    }

    return rotated;
  }

  const animateCameraToSide = useCallback((sideIndex: number) => {
    if (cameraRef.current && controlsRef.current) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      const duration = 1000; // Animation duration in milliseconds
      const startPosition = camera.position.clone();

      // Define target positions for each side
      const positions = [
        new THREE.Vector3(5, 0, 0),   // Right face (side 0)
        new THREE.Vector3(-5, 0, 0),  // Left face (side 1)
        new THREE.Vector3(0, 5, 0),   // Top face (side 2)
        new THREE.Vector3(0, -5, 0),  // Bottom face (side 3)
        new THREE.Vector3(0, 0, 5),   // Front face (side 4)
        new THREE.Vector3(0, 0, -5),  // Back face (side 5)
      ];

      const targetPosition = positions[sideIndex];
      const startTime = performance.now();

      // Convert positions to spherical coordinates
      const startSpherical = new THREE.Spherical().setFromVector3(startPosition);
      const endSpherical = new THREE.Spherical().setFromVector3(targetPosition);

      // Adjust angles to ensure shortest path
      if (Math.abs(endSpherical.theta - startSpherical.theta) > Math.PI) {
        if (endSpherical.theta > startSpherical.theta) {
          endSpherical.theta -= 2 * Math.PI;
        } else {
          endSpherical.theta += 2 * Math.PI;
        }
      }

      const animateCamera = (time: number) => {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1); // Normalized time (0 to 1)

        // Interpolate spherical coordinates
        const currentSpherical = new THREE.Spherical(
          THREE.MathUtils.lerp(startSpherical.radius, endSpherical.radius, t),
          THREE.MathUtils.lerp(startSpherical.phi, endSpherical.phi, t),
          THREE.MathUtils.lerp(startSpherical.theta, endSpherical.theta, t),
        );

        // Update camera position
        camera.position.setFromSpherical(currentSpherical);
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure camera is looking at the cube

        // Update controls
        controls.update();

        if (t < 1) {
          requestAnimationFrame(animateCamera);
        } else {
          // Ensure final position is set
          camera.position.copy(targetPosition);
          controls.update();
        }
      };

      requestAnimationFrame(animateCamera);
    }
  }, []);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (interactionMode === InteractionModes.ORBIT) {
        // Do nothing; orbit controls are active
        return;
      }

      const renderer = rendererRef.current;
      const camera = cameraRef.current;
      const raycaster = raycasterRef.current;
      const mouse = mouseRef.current;

      if (!renderer || !camera || !raycaster || !mouse) {
        return;
      }

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubiesRef.current);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        const cubie = intersect.object as THREE.Mesh;
        const materialIndex = intersect.face!.materialIndex;

        const materialIndexToFaceIndex = [0, 1, 2, 3, 4, 5];
        const faceIndex = materialIndexToFaceIndex[materialIndex];

        const x = Math.round(cubie.position.x);
        const y = Math.round(cubie.position.y);
        const z = Math.round(cubie.position.z);

        const { row, col } = getFaceRowCol(faceIndex, x, y, z);

        if (interactionMode === InteractionModes.COLOR_PICKER) {
          setSelectedSquare({
            faceIndex,
            row,
            col,
          });
          setShowColorPicker(true);
        } else if (interactionMode === InteractionModes.SIDE_SELECTION) {
          setCurrentSide(faceIndex);
          animateCameraToSide(faceIndex);
          setInteractionMode(InteractionModes.ORBIT);
        }
      }
    },
    [interactionMode, setSelectedSquare, setShowColorPicker, setCurrentSide, animateCameraToSide],
  );

  // Memoize handleResize
  const handleResize = useCallback(() => {
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const mount = mountRef.current;

    if (renderer && camera && mount) {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    }
  }, []);

  // Event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Event listener for mouse click
  useEffect(() => {
    const renderer = rendererRef.current;
    if (!renderer) return;

    const canvas = renderer.domElement;
    canvas.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  useEffect(() => {
    if (!sceneRef.current) {
      const mount = mountRef.current!;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        mount.clientWidth / mount.clientHeight,
        0.1,
        1000,
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      // Create cubies
      const cubies: THREE.Mesh[] = [];
      const cubieSize = 0.98; // Slightly less than 1 to avoid z-fighting

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            const geometry = new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize);
            const materials = createCubieMaterials(x, y, z);
            const cubie = new THREE.Mesh(geometry, materials);
            cubie.position.set(x, y, z);
            scene.add(cubie);
            cubies.push(cubie);
          }
        }
      }

      cubiesRef.current = cubies;

      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableRotate = interactionMode === InteractionModes.ORBIT;
      controls.enableZoom = interactionMode === InteractionModes.ORBIT;
      controls.enablePan = interactionMode === InteractionModes.ORBIT;

      // Store references
      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;
      controlsRef.current = controls;

      // Initialize raycaster and mouse
      raycasterRef.current = new THREE.Raycaster();
      mouseRef.current = new THREE.Vector2();

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Clean up on unmount
      return () => {
        mount.removeChild(renderer.domElement);
        renderer.dispose();
        sceneRef.current = undefined; // Reset the scene reference
      };
    }
  }, []);

  // Update cubies materials when cubeColors change
  useEffect(() => {
    if (cubiesRef.current) {
      cubiesRef.current.forEach((cubie) => {
        const x = Math.round(cubie.position.x);
        const y = Math.round(cubie.position.y);
        const z = Math.round(cubie.position.z);
        const newMaterials = createCubieMaterials(x, y, z);
        cubie.material = newMaterials;
      });
    }
  }, [cubeColors]);

  useEffect(() => {
    animateCameraToSide(currentSide);
  }, [currentSide, animateCameraToSide]);

  // Update controls when interaction mode changes
  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      controls.enableRotate = interactionMode === InteractionModes.ORBIT;
      controls.enableZoom = interactionMode === InteractionModes.ORBIT;
      controls.enablePan = interactionMode === InteractionModes.ORBIT;
    }

    // Close color picker if mode changes
    if (interactionMode !== InteractionModes.COLOR_PICKER) {
      setShowColorPicker(false);
      setSelectedSquare(null);
    }
  }, [interactionMode]);

  const handleColorChange = (newColor: string) => {
    if (selectedSquare) {
      const { faceIndex, row, col } = selectedSquare;
      const updatedColors = cubeColors.map((faceColors, idx) =>
        idx === faceIndex
          ? faceColors.map((rowColors, rIdx) =>
            rIdx === row
              ? rowColors.map((color, cIdx) => (cIdx === col ? newColor : color))
              : rowColors,
          )
          : faceColors,
      );

      setCubeColors(updatedColors);
      setSelectedSquare(null);
      setShowColorPicker(false);
      setInteractionMode(InteractionModes.ORBIT);
    }
  };

  const handleColorPickerClose = () => {
    setShowColorPicker(false);
    setSelectedSquare(null);
  };

  // Helper functions
  function createCubieMaterials(x: number, y: number, z: number): THREE.Material[] {
    const materials: THREE.Material[] = [];

    // Order of faces: +X, -X, +Y, -Y, +Z, -Z
    const faceIndices = [
      { axis: 'x', value: 1, faceIndex: 0 },  // Right face (+X)
      { axis: 'x', value: -1, faceIndex: 1 }, // Left face (-X)
      { axis: 'y', value: 1, faceIndex: 2 },  // Top face (+Y)
      { axis: 'y', value: -1, faceIndex: 3 }, // Bottom face (-Y)
      { axis: 'z', value: 1, faceIndex: 4 },  // Front face (+Z)
      { axis: 'z', value: -1, faceIndex: 5 }, // Back face (-Z)
    ];

    faceIndices.forEach((face, idx) => {
      if (face.axis === 'x' && x === face.value) {
        materials[idx] = getFaceMaterial(face.faceIndex, x, y, z);
      } else if (face.axis === 'y' && y === face.value) {
        materials[idx] = getFaceMaterial(face.faceIndex, x, y, z);
      } else if (face.axis === 'z' && z === face.value) {
        materials[idx] = getFaceMaterial(face.faceIndex, x, y, z);
      } else {
        materials[idx] = new THREE.MeshBasicMaterial({ visible: false });
      }
    });

    return materials;
  }

  function getFaceMaterial(faceIndex: number, x: number, y: number, z: number): THREE.Material {
    let row: number, col: number;
    switch (faceIndex) {
      case 0: // Right face (+X)
        row = 1 - y;
        col = 1 - z;
        break;
      case 1: // Left face (-X)
        row = 1 - y;
        col = z + 1;
        break;
      case 2: // Top face (+Y)
        row = z + 1;
        col = x + 1;
        break;
      case 3: // Bottom face (-Y)
        row = 2 - (z + 1);
        col = x + 1;
        break;
      case 4: // Front face (+Z)
        row = 1 - y;
        col = x + 1;
        break;
      case 5: // Back face (-Z)
        row = 1 - y;
        col = 1 - x;
        break;
      default:
        row = 0;
        col = 0;
    }

    // Ensure row and col are within [0, 2]
    row = Math.max(0, Math.min(2, row));
    col = Math.max(0, Math.min(2, col));

    const color = cubeColors[faceIndex][row][col];

    return new THREE.MeshBasicMaterial({ color });
  }

  function getFaceRowCol(faceIndex: number, x: number, y: number, z: number): { row: number; col: number } {
    let row: number, col: number;
    switch (faceIndex) {
      case 0: // Right face (+X)
        row = 1 - y;
        col = 1 - z;
        break;
      case 1: // Left face (-X)
        row = 1 - y;
        col = z + 1;
        break;
      case 2: // Top face (+Y)
        row = z + 1;
        col = x + 1;
        break;
      case 3: // Bottom face (-Y)
        row = 2 - (z + 1);
        col = x + 1;
        break;
      case 4: // Front face (+Z)
        row = 1 - y;
        col = x + 1;
        break;
      case 5: // Back face (-Z)
        row = 1 - y;
        col = 1 - x;
        break;
      default:
        row = 0;
        col = 0;
    }
    return { row, col };
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Interaction Mode Buttons */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 100 }}>
        {Object.entries(InteractionModes).map(([, mode]) => (
          <button
            key={mode}
            onClick={() => setInteractionMode(mode as InteractionMode)}
            style={{
              marginRight: '10px',
              padding: '10px',
              fontSize: '18px',
              backgroundColor: interactionMode === mode ? '#ddd' : '#fff',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {icons[mode]}
          </button>
        ))}
      </div>

      {/* Rotation Buttons */}
      <div style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 100 }}>
        {[0, 1, 2, 3, 4, 5].map((side) => (
          <div key={side}>
            <button onClick={() => rotateSide(side, 'clockwise')}>
              {side} C
            </button>
            <button onClick={() => rotateSide(side, 'counterclockwise')}>
              {side} CC
            </button>
          </div>
        ))}
      </div>

      {/* Three.js Canvas */}
      <div ref={mountRef} style={{ width: '100%', maxWidth: '640px', height: '500px' }} />

      {/* Color Picker */}
      {showColorPicker && interactionMode === InteractionModes.COLOR_PICKER && (
        <ColorPicker onSelectColor={handleColorChange} onClose={handleColorPickerClose} />
      )}
    </div>
  );
};

export default RubiksCubeViewer;
