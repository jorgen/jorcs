import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ColorPicker from './ColorPicker';

type RubiksCubeViewerProps = {
  cubeColors: string[][][]; // 3D array of colors for each face
  currentSide: number; // Index of the current side being scanned
  setCubeColors: (newColors: string[][][]) => void; // Callback to update cubeColors
};

const RubiksCubeViewer: React.FC<RubiksCubeViewerProps> = ({
                                                             cubeColors,
                                                             currentSide,
                                                             setCubeColors,
                                                           }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedSquare, setSelectedSquare] = useState<{
    faceIndex: number;
    row: number;
    col: number;
  } | null>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let cube: THREE.Mesh;
    let materials: THREE.MeshBasicMaterial[];

    // Clear previous content
    while (mount.firstChild) {
      mount.removeChild(mount.firstChild);
    }

    // Initialize Three.js scene, camera, renderer
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

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Create cube geometry
    const cubeSize = 2;
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

    // Create materials for each face
    materials = Array(6)
      .fill(0)
      .map((_, faceIndex) => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d')!;

        const faceColors = cubeColors[faceIndex] || [['gray', 'gray', 'gray']];
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
    cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Handle mouse clicks
    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        const intersectedFace = intersects[0].face!.materialIndex; // Get clicked face
        const uv = intersects[0].uv; // Get UV coordinates

        if (uv) {
          const squareRow = Math.floor(uv.y * 3);
          const squareCol = Math.floor(uv.x * 3);

          setSelectedSquare({
            faceIndex: intersectedFace,
            row: squareRow,
            col: squareCol,
          });
        }
      }
    };

    renderer.domElement.addEventListener('click', handleClick);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', handleClick);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [cubeColors, currentSide]);

  const handleColorChange = (newColor: string) => {
    if (selectedSquare) {
      const { faceIndex, row, col } = selectedSquare;
      const updatedColors = [...cubeColors];
      updatedColors[faceIndex] = updatedColors[faceIndex].map((rowColors, rIdx) =>
        rowColors.map((color, cIdx) => (rIdx === row && cIdx === col ? newColor : color)),
      );

      setCubeColors(updatedColors); // Update the colors with the new color
      setSelectedSquare(null); // Close the color picker after selection
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '500px' }} />
      {selectedSquare && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 100,
            backgroundColor: 'white',
            padding: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ColorPicker onColorSelect={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default RubiksCubeViewer;
