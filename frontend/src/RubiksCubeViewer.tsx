import { useCallback, useEffect, useLayoutEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { flushSync } from 'react-dom';
import * as THREE from 'three';
import ColorPicker from './ColorPicker.tsx';
import OrbitControls from './OrbitControls.ts';
import { getFaceRowCol, rotateColorsQuarter } from './cubeColors';
import { goodViewingDirection, isGoodViewingDirection, normalized } from './cameraAngle';

type RubiksCubeViewerProps = {
  cubeColors: string[][][]; // 3D array of colors for each face
  currentSide: number; // Index of the current side being scanned
  setCubeColors: (
    newColors: string[][][] | ((prev: string[][][]) => string[][][]),
  ) => void; // Callback to update cubeColors (accepts a functional updater)
  setCurrentSide: (side: number) => void; // Callback to update currentSide
  // Facelet indices (face*9 + row*3 + col) to spotlight; everything else is faded.
  highlight?: ReadonlySet<number> | null;
};

// What a faded, not-implicated sticker is mixed towards.
const DIMMED = new THREE.Color('#d7d7d7');

// Interaction modes
const InteractionModes = {
  ORBIT: 'ORBIT',
  COLOR_PICKER: 'COLOR_PICKER',
  SIDE_SELECTION: 'SIDE_SELECTION',
} as const;

type InteractionMode = typeof InteractionModes[keyof typeof InteractionModes];

type Turn = { sideIndex: number; direction: 'clockwise' | 'counterclockwise' };

// How close to straight up or down the Y axis counts as being on the axis, where
// the azimuth stops describing a position and only describes a roll.
const POLE_EPSILON = 1e-4;

// Distance the camera is placed at when it is put straight in front of a face:
// far enough back for the whole cube to fit in the frustum.
function faceViewDistance(camera: THREE.PerspectiveCamera): number {
  const cubeSize = 2; // The cube spans from -1 to 1 in each axis
  const maxCubeDimension = Math.sqrt(3 * Math.pow(cubeSize, 2)); // Diagonal length of the cube
  const fovRadians = THREE.MathUtils.degToRad(camera.fov);
  return maxCubeDimension / 2 / Math.sin(fovRadians / 2) + 5;
}

const RubiksCubeViewer = forwardRef<{
  rotateSide: (sideIndex: number, direction: 'clockwise' | 'counterclockwise') => void;
  ensureGoodViewingAngle: () => Promise<void>;
}, RubiksCubeViewerProps>(({
                             cubeColors,
                             currentSide,
                             setCubeColors,
                             setCurrentSide,
                             highlight,
                           }, ref) => {
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
  const [isMirrored, setIsMirrored] = useState(false);


  console.log('Viewer with current side: ', currentSide);

  // References to Three.js objects
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const controlsRef = useRef<OrbitControls>();
  const raycasterRef = useRef<THREE.Raycaster>();
  const mouseRef = useRef<THREE.Vector2>();
  const cubiesRef = useRef<THREE.Mesh[]>([]);
  // Stops the camera fly through that is currently running, if any.
  const cancelCameraAnimationRef = useRef<(() => void) | null>(null);
  // Resolves once the camera fly through that is running, if any, has landed.
  const cameraSettledRef = useRef<Promise<void>>(Promise.resolve());
  // Turns waiting to be played, and whether one is playing right now.
  const turnQueueRef = useRef<Turn[]>([]);
  const isTurningRef = useRef(false);

  // What each mode's button shows, and what it says when you hover it. A bare
  // glyph never explains a mode on its own -- an arrow says nothing about
  // recolouring a sticker -- so the icon carries the idea and the description
  // spells it out, both as a tooltip and as the button's accessible name.
  const modeButtons = {
    ORBIT: {
      icon: '🤚',
      description: 'Turn the cube: drag to look at it from anywhere',
    },
    COLOR_PICKER: {
      icon: '🎨',
      description: 'Fix a colour: click a sticker to pick the right one',
    },
    SIDE_SELECTION: {
      icon: '🧭',
      description: 'Face a side: click one to swing the camera square onto it',
    },
  };

  const updateCubeColorsAfterRotation = useCallback(
    (sideIndex: number, direction: 'clockwise' | 'counterclockwise') => {
      // Rotate the turning layer's stickers exactly the way the mesh geometry
      // rotates the cubies -- the shared rotateColorsQuarter uses the same axis and
      // signed angle -- so the colour grid can never diverge from where the stickers
      // physically end up, and the solution player replays moves the same way.
      // flushSync so the new colours are committed and repainted (via the
      // useLayoutEffect below) synchronously, in the same frame the geometry is
      // finalized -- otherwise the forced render at the end of the turn shows the
      // moved cubies with their old stickers for a frame (a flicker).
      flushSync(() =>
        setCubeColors((prev) => rotateColorsQuarter(prev, sideIndex, direction)),
      );
    },
    [setCubeColors],
  );

  /**
   * Swings the camera around the cube to `targetDirection` (a unit vector
   * pointing from the cube towards the camera) over `duration` milliseconds.
   *
   * The path is interpolated in the same spherical angles OrbitControls and
   * lookAt work in, so the azimuth - which is what decides how the cube is
   * rolled on screen - changes evenly instead of racing through half a turn
   * wherever the path happens to pass close to the poles.
   *
   * Resolves once the camera is there, or straight away if another camera
   * animation takes over, so callers waiting on it are never left hanging.
   */
  const animateCameraTo = useCallback(
    (
      targetDirection: THREE.Vector3,
      targetRadius: number,
      duration: number,
    ): Promise<void> => {
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      if (!camera || !controls) return Promise.resolve();

      cancelCameraAnimationRef.current?.();

      const pivot = controls.target.clone();
      const startOffset = camera.position.clone().sub(pivot);
      const startRadius = startOffset.length();
      const endOffset = targetDirection.clone().normalize().multiplyScalar(targetRadius);

      const start = new THREE.Spherical().setFromVector3(
        startRadius > 0 ? startOffset : endOffset,
      );
      const end = new THREE.Spherical().setFromVector3(endOffset);

      // Straight up or down the Y axis an azimuth no longer says where the
      // camera is, only how the cube is rolled on screen, and lookAt cannot
      // recover it from a camera sitting on the axis. Land on a fixed azimuth
      // there so the top and bottom views always come out the same way up.
      if (end.phi < POLE_EPSILON || Math.PI - end.phi < POLE_EPSILON) {
        end.theta = 0;
      }

      // Turn the short way round rather than back through a full circle.
      const turn = end.theta - start.theta;
      end.theta = start.theta + (turn - Math.round(turn / (2 * Math.PI)) * 2 * Math.PI);

      const flight = new Promise<void>((resolve) => {
        let frameId = 0;
        let startTime: number | null = null;

        cancelCameraAnimationRef.current = () => {
          cancelAnimationFrame(frameId);
          cancelCameraAnimationRef.current = null;
          resolve();
        };

        const step = (time: number) => {
          if (startTime === null) startTime = time;
          const t = duration > 0 ? Math.min((time - startTime) / duration, 1) : 1;
          const eased = t * t * (3 - 2 * t); // Smoothstep, so it eases in and out

          const current = new THREE.Spherical(
            THREE.MathUtils.lerp(start.radius, end.radius, eased),
            THREE.MathUtils.lerp(start.phi, end.phi, eased),
            THREE.MathUtils.lerp(start.theta, end.theta, eased),
          );
          // Keeps the camera a hair off the axis, where lookAt has a roll to work with
          current.makeSafe();

          camera.position.setFromSpherical(current).add(pivot);
          camera.lookAt(pivot);
          controls.update();

          if (t < 1) {
            frameId = requestAnimationFrame(step);
          } else {
            cancelCameraAnimationRef.current = null;
            resolve();
          }
        };

        frameId = requestAnimationFrame(step);
      });

      cameraSettledRef.current = flight;
      return flight;
    },
    [],
  );

  const animateCameraToSide = useCallback(
    (sideIndex: number) => {
      const camera = cameraRef.current;
      if (!camera) return;

      // Directions towards the camera for each side, in face order
      const directions = [
        new THREE.Vector3(1, 0, 0),   // Right face (side 0)
        new THREE.Vector3(-1, 0, 0),  // Left face (side 1)
        new THREE.Vector3(0, 1, 0),   // Top face (side 2)
        new THREE.Vector3(0, -1, 0),  // Bottom face (side 3)
        new THREE.Vector3(0, 0, 1),   // Front face (side 4)
        new THREE.Vector3(0, 0, -1),  // Back face (side 5)
      ];

      const direction = directions[sideIndex];
      if (!direction) return;

      void animateCameraTo(direction, faceViewDistance(camera), 1000);
    },
    [animateCameraTo],
  );

  /**
   * Moves the camera onto a corner of the cube before a turn plays out. Looking
   * straight at a face hides the five layers that turn away from the camera: a
   * back face turn seen from straight in front does not move a single visible
   * sticker, which is easy to end up with because scanning parks the camera
   * square in front of a face. Only the axes the camera is too flat against are
   * corrected, and the current zoom is kept, so the cube stays as close as
   * possible to the orientation the user left it in.
   */
  const ensureGoodViewingAngle = useCallback(async (): Promise<void> => {
    // A fly through that is still running has to land first. A position the
    // camera is only passing through says nothing about where the turn would be
    // watched from - a flight to a face view reads as a perfectly good angle
    // half way in - and correcting from one would leave the camera stuck at
    // whatever distance it had reached on its way in.
    while (cancelCameraAnimationRef.current) {
      await cameraSettledRef.current;
    }

    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const offset = camera.position.clone().sub(controls.target);
    const radius = offset.length() || faceViewDistance(camera);
    const current = normalized(offset);

    if (isGoodViewingDirection(current)) return;

    const good = goodViewingDirection(current);
    const target = new THREE.Vector3(good.x, good.y, good.z);
    const travel = target.angleTo(new THREE.Vector3(current.x, current.y, current.z));
    const duration = THREE.MathUtils.clamp((travel / Math.PI) * 1600, 300, 700);

    await animateCameraTo(target, radius, duration);
  }, [animateCameraTo]);

  // Plays one quarter turn and reports when the layer has landed.
  const playTurn = useCallback(
    ({ sideIndex, direction }: Turn): Promise<void> => {
      const scene = sceneRef.current;
      if (!scene) return Promise.resolve();

      // Mapping for each side
      const sideRotations: { [key: number]: { axis: 'x' | 'y' | 'z'; layerValue: number; angleMultiplier: number } } = {
        0: { axis: 'x', layerValue: 1, angleMultiplier: 1 },
        1: { axis: 'x', layerValue: -1, angleMultiplier: -1 },
        2: { axis: 'y', layerValue: 1, angleMultiplier: 1 },
        3: { axis: 'y', layerValue: -1, angleMultiplier: -1 },
        4: { axis: 'z', layerValue: 1, angleMultiplier: 1 },
        5: { axis: 'z', layerValue: -1, angleMultiplier: -1 },
      };
      const { axis, layerValue, angleMultiplier } = sideRotations[sideIndex];

      // Group cubies on the specified layer
      const rotationGroup = new THREE.Group();

      cubiesRef.current.forEach((cubie) => {
        if (Math.round(cubie.position[axis]) === layerValue) {
          rotationGroup.add(cubie);
        }
      });

      scene.add(rotationGroup);

      let angle = angleMultiplier * (direction === 'clockwise' ? -1 : 1) * (Math.PI / 2);
      const rotationAxis = new THREE.Vector3(
        axis === 'x' ? 1 : 0,
        axis === 'y' ? 1 : 0,
        axis === 'z' ? 1 : 0,
      );

      // Animate the rotation
      let startTime: number | null = null;
      const duration = 300; // in milliseconds

      return new Promise<void>((resolve) => {
        const animateRotation = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const t = Math.min(elapsed / duration, 1); // Normalized time [0, 1]

          rotationGroup.rotation[axis] = angle * t;

          rendererRef.current?.render(scene, cameraRef.current!);

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
              scene.add(cubie);
            });

            scene.remove(rotationGroup);

            updateCubeColorsAfterRotation(sideIndex, direction);

            // Force a render to update the scene
            rendererRef.current?.render(scene, cameraRef.current!);

            resolve();
          }
        };

        requestAnimationFrame(animateRotation);
      });
    },
    [updateCubeColorsAfterRotation],
  );

  /**
   * Queues a quarter turn. Turns are played strictly one at a time: the solution
   * player and the scramble fire them on a fixed cadence without waiting for the
   * previous one to land, and two turns running at once would pull cubies out of
   * each other's rotation group and leave the cube in a state the colour grid no
   * longer describes. Queueing also means the camera correction below can take
   * as long as it needs without a turn ever being dropped.
   */
  const rotateSide = useCallback(
    (sideIndex: number, direction: 'clockwise' | 'counterclockwise') => {
      if (!sceneRef.current) return;

      turnQueueRef.current.push({ sideIndex, direction });
      if (isTurningRef.current) return;

      isTurningRef.current = true;

      void (async () => {
        try {
          // Get a corner of the cube in view first, otherwise a turn on a side
          // facing away from the camera plays out completely unseen. Only the
          // first turn of a run pays for this: once the angle is good the check
          // returns immediately, so a solution replays at full speed.
          while (turnQueueRef.current.length > 0) {
            await ensureGoodViewingAngle();
            const turn = turnQueueRef.current.shift();
            if (turn) await playTurn(turn);
          }
        } finally {
          isTurningRef.current = false;
        }
      })();
    },
    [ensureGoodViewingAngle, playTurn],
  );

  useImperativeHandle(ref, () => ({
    rotateSide,
    // Callers that fire a run of turns on their own cadence (the solution player,
    // the scramble) can get the camera settled before the first one, so the turns
    // are not left queueing behind the swing.
    ensureGoodViewingAngle,
  }));

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

      // Invert mouse.x if mirrored
      if (isMirrored) {
        mouse.x = -mouse.x;
      }

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
      // Calculate the camera distance
      const cubeSize = 2; // The cube spans from -1 to 1 in each axis
      const maxCubeDimension = Math.sqrt(3 * Math.pow(cubeSize, 2)); // Diagonal length of the cube
      const fovRadians = THREE.MathUtils.degToRad(camera.fov); // Convert FOV to radians
      const cameraDistance = (maxCubeDimension / 2) / Math.sin(fovRadians / 2);

      // Add some extra distance to ensure the cube is fully visible
      camera.position.set(0, 0, cameraDistance + 100);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;

          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
      });

      resizeObserver.observe(mount);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

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
      controls.target.set(0, 0, 0);
      controls.update();
      controls.enableRotate = interactionMode === InteractionModes.ORBIT;
      controls.enableZoom = interactionMode === InteractionModes.ORBIT;
      controls.enablePan = false; //interactionMode === InteractionModes.ORBIT;

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
        cancelCameraAnimationRef.current?.();
        resizeObserver.disconnect();
        mount.removeChild(renderer.domElement);
        renderer.dispose();
        // Drop the references, so anything still waiting its turn - a queued
        // turn, a camera correction - finds nothing to draw to and quietly
        // gives up instead of touching a torn down renderer.
        sceneRef.current = undefined;
        cameraRef.current = undefined;
        controlsRef.current = undefined;
        rendererRef.current = undefined;
      };
    }
  }, []);

  // Repaint the cubies from the colour grid. useLayoutEffect (not useEffect) so it
  // runs synchronously inside the flushSync above, keeping colours in lockstep with
  // the finalized geometry (no end-of-turn flicker).
  useLayoutEffect(() => {
    if (cubiesRef.current) {
      cubiesRef.current.forEach((cubie) => {
        const x = Math.round(cubie.position.x);
        const y = Math.round(cubie.position.y);
        const z = Math.round(cubie.position.z);
        const newMaterials = createCubieMaterials(x, y, z);
        const previous = cubie.material;
        cubie.material = newMaterials;
        // Every repaint builds 6 fresh materials per cubie, and a turn repaints on
        // every step -- so the ones we just replaced have to go.
        if (Array.isArray(previous)) {
          previous.forEach((material) => material.dispose());
        } else if (previous) {
          previous.dispose();
        }
      });
    }
  }, [cubeColors, highlight]);

  useEffect(() => {
    animateCameraToSide(currentSide);
  }, [currentSide, animateCameraToSide]);

  // Update controls when interaction mode changes
  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      controls.enableRotate = interactionMode === InteractionModes.ORBIT;
      controls.enableZoom = interactionMode === InteractionModes.ORBIT;
      controls.enablePan = false;//interactionMode === InteractionModes.ORBIT;
    }

    // Close color picker if mode changes
    if (interactionMode !== InteractionModes.COLOR_PICKER) {
      setShowColorPicker(false);
      setSelectedSquare(null);
    }
  }, [interactionMode]);

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      controls.isMirrored = isMirrored;
    }
  }, [isMirrored]);

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

    // Spotlight the stickers a diagnosis flagged by fading everything else, rather
    // than brightening them: these are MeshBasicMaterials, so they ignore lights
    // and there is no emissive to turn up.
    if (highlight && highlight.size > 0 && !highlight.has(faceIndex * 9 + row * 3 + col)) {
      return new THREE.MeshBasicMaterial({
        color: new THREE.Color(color).lerp(DIMMED, 0.72),
      });
    }

    return new THREE.MeshBasicMaterial({ color });
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Interaction Mode Buttons */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 100 }}>
        {Object.entries(InteractionModes).map(([, mode]) => (
          <button
            key={mode}
            onClick={() => setInteractionMode(mode as InteractionMode)}
            title={modeButtons[mode].description}
            aria-label={modeButtons[mode].description}
            aria-pressed={interactionMode === mode}
            style={{
              marginRight: '10px',
              padding: '10px',
              fontSize: '18px',
              backgroundColor: interactionMode === mode ? '#ddd' : '#fff',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {modeButtons[mode].icon}
          </button>
        ))}
      </div>
      {/* Mirror Toggle Switch */}
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 100 }}>
        <label style={{ color: 'white', fontSize: '16px' }}>
          Mirror:
          <input
            type="checkbox"
            checked={isMirrored}
            onChange={() => setIsMirrored(!isMirrored)}
            style={{ marginLeft: '5px' }}
          />
        </label>
      </div>
      {/* Three.js Canvas */}
      <div ref={mountRef} style={{
        width: '100%',
        height: '100%',
        transform: isMirrored ? 'scaleX(-1)' : 'none',
      }} />

      {/* Color Picker */}
      {showColorPicker && interactionMode === InteractionModes.COLOR_PICKER && (
        <ColorPicker onSelectColor={handleColorChange} onClose={handleColorPickerClose} />
      )}
    </div>
  );
});

export default RubiksCubeViewer;
