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
  const cubeRef = useRef<THREE.Mesh>();
  const materialsRef = useRef<THREE.MeshBasicMaterial[]>();
  const raycasterRef = useRef<THREE.Raycaster>();
  const mouseRef = useRef<THREE.Vector2>();

  // Icons as Unicode characters or simple SVG paths
  const icons = {
    ORBIT: '🤚', // Flat hand icon
    COLOR_PICKER: '➡️', // Arrow icon
    SIDE_SELECTION: '⤵️', // Bold arrow icon
  };

// Memoize handleClick
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (interactionMode === InteractionModes.ORBIT) {
        // Do nothing; orbit controls are active
        return;
      }

      const renderer = rendererRef.current;
      const camera = cameraRef.current;
      const cube = cubeRef.current;
      const raycaster = raycasterRef.current;
      const mouse = mouseRef.current;

      if (!renderer || !camera || !cube || !raycaster || !mouse) {
        return;
      }

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        const intersectedFace = intersects[0].face!.materialIndex;
        const uv = intersects[0].uv;

        if (uv) {
          const squareRow = Math.floor(uv.y * 3);
          const squareCol = Math.floor(uv.x * 3);

          if (interactionMode === InteractionModes.COLOR_PICKER) {
            setSelectedSquare({
              faceIndex: intersectedFace,
              row: 2 - squareRow,
              col: squareCol,
            });
            setShowColorPicker(true);
          } else if (interactionMode === InteractionModes.SIDE_SELECTION) {
            console.log('Setting current side to: ', intersectedFace);
            setCurrentSide(intersectedFace);
          }
        }
      }
    },
    [interactionMode, setSelectedSquare, setShowColorPicker, setCurrentSide],
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
  }, [handleClick, rendererRef.current]);

  useEffect(() => {
    // Initialize only once
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

      // Create cube geometry
      const cubeSize = 2;
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

      // Create materials for each face
      const materials: THREE.MeshBasicMaterial[] = Array(6)
        .fill(0)
        .map((_, faceIndex) => {
          const canvas = document.createElement('canvas');
          canvas.width = 256;
          canvas.height = 256;
          const ctx = canvas.getContext('2d')!;

          const faceColors = cubeColors[faceIndex] || [
            ['gray', 'gray', 'gray'],
            ['gray', 'gray', 'gray'],
            ['gray', 'gray', 'gray'],
          ];
          const squareSize = canvas.width / 3;

          // Draw the 3x3 grid of colors with lines
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              ctx.fillStyle = faceColors[i][j];
              ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
              ctx.strokeStyle = 'black';
              ctx.lineWidth = 2;
              ctx.strokeRect(j * squareSize, i * squareSize, squareSize, squareSize);
            }
          }

          const texture = new THREE.CanvasTexture(canvas);
          return new THREE.MeshBasicMaterial({ map: texture });
        });

      // Create cube mesh
      const cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);

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
      cubeRef.current = cube;
      materialsRef.current = materials;

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
  }, []); // Empty dependency array ensures this runs only once

  // Update cube materials when cubeColors change
  useEffect(() => {
    if (materialsRef.current) {
      const materials = materialsRef.current;
      for (let faceIndex = 0; faceIndex < 6; faceIndex++) {
        const material = materials[faceIndex];
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d')!;

        const faceColors = cubeColors[faceIndex] || [
          ['gray', 'gray', 'gray'],
          ['gray', 'gray', 'gray'],
          ['gray', 'gray', 'gray'],
        ];
        const squareSize = canvas.width / 3;

        // Draw the 3x3 grid of colors with lines
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            ctx.fillStyle = faceColors[i][j];
            ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.strokeRect(j * squareSize, i * squareSize, squareSize, squareSize);
          }
        }

        const texture = new THREE.CanvasTexture(canvas);
        material.map = texture;
        material.needsUpdate = true;
      }
    }
  }, [cubeColors]);

  // Animate camera when currentSide changes
  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      const duration = 1000; // Animation duration in milliseconds
      const startPosition = camera.position.clone();

      // Define target positions for each side
      const positions = [
        new THREE.Vector3(5, 0, 0),   // Right face (side 1)
        new THREE.Vector3(-5, 0, 0),  // Left face (side 3)

        new THREE.Vector3(0, 5, 0),   // Top face (side 4)
        new THREE.Vector3(0, -5, 0),  // Bottom face (side 5)
        new THREE.Vector3(0, 0, 5),   // Front face (side 0)
        new THREE.Vector3(0, 0, -5),  // Back face (side 2)
      ];

      const targetPosition = positions[currentSide];
      const startTime = performance.now();

      const animateCamera = (time: number) => {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1); // Normalized time (0 to 1)

        // Interpolate position
        camera.position.lerpVectors(startPosition, targetPosition, t);
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
  }, [currentSide]);

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

      setCubeColors(updatedColors); // Update the colors with the new color
      setSelectedSquare(null); // Close the color picker after selection
      setShowColorPicker(false);
    }
  };

  const handleColorPickerClose = () => {
    setShowColorPicker(false);
    setSelectedSquare(null);
  };

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

      {/* Three.js Canvas */}
      <div ref={mountRef} style={{ width: '100%', maxWidth: '640px', height: '500px' }} />

      {/* Color Picker */}
      {showColorPicker && interactionMode === InteractionModes.COLOR_PICKER && (
        <ColorPicker
          onSelectColor={handleColorChange}
          onClose={handleColorPickerClose}
        />
      )}
    </div>
  );
};

export default RubiksCubeViewer;
