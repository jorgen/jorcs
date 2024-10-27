import * as THREE from 'three';

interface OrbitControlsEventMap {
  change: THREE.Event;
  start: THREE.Event;
  end: THREE.Event;
}

class OrbitControls extends THREE.EventDispatcher<OrbitControlsEventMap> {
  object: THREE.Camera;
  domElement: HTMLElement;

  enabled: boolean = true;
  target: THREE.Vector3 = new THREE.Vector3();
  minDistance: number = 0;
  maxDistance: number = Infinity;
  minPolarAngle: number = 0; // radians
  maxPolarAngle: number = Math.PI; // radians
  minAzimuthAngle: number = -Infinity; // radians
  maxAzimuthAngle: number = Infinity; // radians
  enableZoom: boolean = true;
  zoomSpeed: number = 1.0;
  enableRotate: boolean = true;
  rotateSpeed: number = 1.0;
  enablePan: boolean = true;
  panSpeed: number = 1.0;
  screenSpacePanning: boolean = true;
  isMirrored: boolean = false;

  private spherical: THREE.Spherical = new THREE.Spherical();
  private sphericalDelta: THREE.Spherical = new THREE.Spherical();
  private scale: number = 1;

  private rotateStart: THREE.Vector2 = new THREE.Vector2();
  private rotateEnd: THREE.Vector2 = new THREE.Vector2();
  private rotateDelta: THREE.Vector2 = new THREE.Vector2();

  private panStart: THREE.Vector2 = new THREE.Vector2();
  private panEnd: THREE.Vector2 = new THREE.Vector2();
  private panDelta: THREE.Vector2 = new THREE.Vector2();

  private dollyStart: THREE.Vector2 = new THREE.Vector2();
  private dollyEnd: THREE.Vector2 = new THREE.Vector2();
  private dollyDelta: THREE.Vector2 = new THREE.Vector2();

  private state: string = '';

  constructor(object: THREE.Camera, domElement: HTMLElement) {
    super();
    this.object = object;
    this.domElement = domElement;

    this.onContextMenu = this.onContextMenu.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);

    this.domElement.addEventListener('contextmenu', this.onContextMenu);
    this.domElement.addEventListener('mousedown', this.onMouseDown);
    this.domElement.addEventListener('wheel', this.onMouseWheel, { passive: false });
    this.domElement.addEventListener('touchstart', this.onTouchStart, { passive: false });
    this.domElement.addEventListener('touchend', this.onTouchEnd);
    this.domElement.addEventListener('touchmove', this.onTouchMove, { passive: false });

    this.object.lookAt(this.target);
  }

  dispose() {
    this.domElement.removeEventListener('contextmenu', this.onContextMenu);
    this.domElement.removeEventListener('mousedown', this.onMouseDown);
    this.domElement.removeEventListener('wheel', this.onMouseWheel);
    this.domElement.removeEventListener('touchstart', this.onTouchStart);
    this.domElement.removeEventListener('touchend', this.onTouchEnd);
    this.domElement.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }


  update() {
    const offset = new THREE.Vector3();

    const position = this.object.position;
    offset.copy(position).sub(this.target);

    this.spherical.setFromVector3(offset);

    this.spherical.theta += this.sphericalDelta.theta;
    this.spherical.phi += this.sphericalDelta.phi;

    this.spherical.theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, this.spherical.theta));
    this.spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this.spherical.phi));
    this.spherical.makeSafe();

    this.spherical.radius *= this.scale;
    this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));

    offset.setFromSpherical(this.spherical);

    position.copy(this.target).add(offset);
    this.object.lookAt(this.target);

    this.sphericalDelta.set(0, 0, 0);
    this.scale = 1;

    this.dispatchEvent({ type: 'change', target: this });
  }

  private onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  private onMouseDown(event: MouseEvent) {
    if (this.enabled === false) return;

    switch (event.button) {
      case 0: // Left button
        if (this.enableRotate === false) return;
        this.handleMouseDownRotate(event);
        this.state = 'rotate';
        break;
      case 1: // Middle button
        if (this.enableZoom === false) return;
        this.handleMouseDownDolly(event);
        this.state = 'dolly';
        break;
      case 2: // Right button
        if (this.enablePan === false) return;
        this.handleMouseDownPan(event);
        this.state = 'pan';
        break;
    }

    if (this.state !== '') {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (this.enabled === false) return;

    switch (this.state) {
      case 'rotate':
        if (this.enableRotate === false) return;
        this.handleMouseMoveRotate(event);
        break;
      case 'dolly':
        if (this.enableZoom === false) return;
        this.handleMouseMoveDolly(event);
        break;
      case 'pan':
        if (this.enablePan === false) return;
        this.handleMouseMovePan(event);
        break;
    }
  }

  private onMouseUp(_event: MouseEvent) {
    if (this.enabled === false) return;

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);

    this.state = '';
  }

  private onMouseWheel(event: WheelEvent) {
    if (this.enabled === false || this.enableZoom === false) return;

    event.preventDefault();

    this.handleMouseWheel(event);
  }

  private onTouchStart(event: TouchEvent) {
    if (this.enabled === false) return;

    switch (event.touches.length) {
      case 1: // One-finger touch: rotate
        if (this.enableRotate === false) return;
        this.handleTouchStartRotate(event);
        this.state = 'rotate';
        break;
      case 2: // Two-finger touch: zoom
        if (this.enableZoom === false) return;
        this.handleTouchStartDolly(event);
        this.state = 'dolly';
        break;
      case 3: // Three-finger touch: pan
        if (this.enablePan === false) return;
        this.handleTouchStartPan(event);
        this.state = 'pan';
        break;
    }
  }

  private onTouchMove(event: TouchEvent) {
    if (this.enabled === false) return;

    switch (this.state) {
      case 'rotate':
        if (this.enableRotate === false) return;
        this.handleTouchMoveRotate(event);
        break;
      case 'dolly':
        if (this.enableZoom === false) return;
        this.handleTouchMoveDolly(event);
        break;
      case 'pan':
        if (this.enablePan === false) return;
        this.handleTouchMovePan(event);
        break;
    }
  }

  private onTouchEnd(_event: TouchEvent) {
    if (this.enabled === false) return;

    this.state = '';
  }

  private handleMouseDownRotate(event: MouseEvent) {
    this.rotateStart.set(event.clientX, event.clientY);
  }

  private handleMouseMoveRotate(event: MouseEvent) {
    this.rotateEnd.set(event.clientX, event.clientY);

    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

    if (this.isMirrored) {
      this.rotateDelta.x = -this.rotateDelta.x;
    }

    const element = this.domElement;

    this.rotateLeft((2 * Math.PI * this.rotateDelta.x) / element.clientHeight * this.rotateSpeed);
    this.rotateUp((2 * Math.PI * this.rotateDelta.y) / element.clientHeight * this.rotateSpeed);

    this.rotateStart.copy(this.rotateEnd);

    this.update();
  }

  private handleTouchStartRotate(event: TouchEvent) {
    this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }

  private handleTouchMoveRotate(event: TouchEvent) {
    this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);

    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

    if (this.isMirrored) {
      this.rotateDelta.x = -this.rotateDelta.x;
    }

    const element = this.domElement;

    this.rotateLeft((2 * Math.PI * this.rotateDelta.x) / element.clientHeight * this.rotateSpeed);
    this.rotateUp((2 * Math.PI * this.rotateDelta.y) / element.clientHeight * this.rotateSpeed);

    this.rotateStart.copy(this.rotateEnd);

    this.update();
  }

  private rotateLeft(angle: number) {
    this.sphericalDelta.theta -= angle;
  }

  private rotateUp(angle: number) {
    this.sphericalDelta.phi -= angle;
  }

  private handleMouseDownDolly(event: MouseEvent) {
    this.dollyStart.set(event.clientX, event.clientY);
  }

  private handleMouseMoveDolly(event: MouseEvent) {
    this.dollyEnd.set(event.clientX, event.clientY);

    this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

    if (this.dollyDelta.y > 0) {
      this.dollyOut(Math.pow(0.95, this.zoomSpeed));
    } else if (this.dollyDelta.y < 0) {
      this.dollyIn(Math.pow(0.95, this.zoomSpeed));
    }

    this.dollyStart.copy(this.dollyEnd);

    this.update();
  }

  private handleMouseWheel(event: WheelEvent) {
    let delta = 0;

    if (event.deltaY < 0) {
      delta = -1;
    } else if (event.deltaY > 0) {
      delta = 1;
    }

    const zoomScale = Math.pow(0.95, this.zoomSpeed);

    if (delta > 0) {
      this.dollyOut(zoomScale);
    } else if (delta < 0) {
      this.dollyIn(zoomScale);
    }

    this.update();
  }

  private handleTouchStartDolly(event: TouchEvent) {
    const dx = event.touches[0].pageX - event.touches[1].pageX;
    const dy = event.touches[0].pageY - event.touches[1].pageY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    this.dollyStart.set(0, distance);
  }

  private handleTouchMoveDolly(event: TouchEvent) {
    const dx = event.touches[0].pageX - event.touches[1].pageX;
    const dy = event.touches[0].pageY - event.touches[1].pageY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    this.dollyEnd.set(0, distance);

    const dollyScale = this.dollyEnd.y / this.dollyStart.y;
    if (dollyScale > 1) {
      this.dollyOut(dollyScale);
    } else if (dollyScale < 1) {
      this.dollyIn(dollyScale);
    }

    this.dollyStart.copy(this.dollyEnd);

    this.update();
  }

  private dollyIn(dollyScale: number) {
    this.scale /= dollyScale;
  }

  private dollyOut(dollyScale: number) {
    this.scale *= dollyScale;
  }

  private handleMouseDownPan(event: MouseEvent) {
    this.panStart.set(event.clientX, event.clientY);
  }

  private handleMouseMovePan(event: MouseEvent) {
    this.panEnd.set(event.clientX, event.clientY);

    this.panDelta.subVectors(this.panEnd, this.panStart).multiplyScalar(this.panSpeed);

    this.pan(this.panDelta.x, this.panDelta.y);

    this.panStart.copy(this.panEnd);

    this.update();
  }

  private handleTouchStartPan(event: TouchEvent) {
    this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }

  private handleTouchMovePan(event: TouchEvent) {
    this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

    this.panDelta.subVectors(this.panEnd, this.panStart).multiplyScalar(this.panSpeed);

    this.pan(this.panDelta.x, this.panDelta.y);

    this.panStart.copy(this.panEnd);

    this.update();
  }

  private pan(deltaX: number, deltaY: number) {
    const element = this.domElement;

    if (this.object instanceof THREE.PerspectiveCamera) {
      const position = this.object.position;
      const offset = new THREE.Vector3();
      offset.copy(position).sub(this.target);
      let targetDistance = offset.length();

      targetDistance *= Math.tan(((this.object.fov / 2) * Math.PI) / 180.0);

      const panX = (2 * deltaX * targetDistance) / element.clientHeight;
      const panY = (2 * deltaY * targetDistance) / element.clientHeight;

      const panOffset = new THREE.Vector3();
      panOffset.setFromMatrixColumn(this.object.matrix, 0);
      panOffset.multiplyScalar(-panX);

      const panUp = new THREE.Vector3();
      if (this.screenSpacePanning === true) {
        panUp.setFromMatrixColumn(this.object.matrix, 1);
      } else {
        panUp.setFromMatrixColumn(this.object.matrix, 0);
        panUp.crossVectors(this.object.up, panUp);
      }
      panUp.multiplyScalar(panY);

      panOffset.add(panUp);

      this.target.add(panOffset);
      this.object.position.add(panOffset);
    }
  }
}

export default OrbitControls;
