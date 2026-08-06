/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
*/

// Helpers for keeping the camera on a "three quarter" view of the cube.
//
// When the camera looks straight down one of the cube axes it only ever sees a
// single face. Every layer that turns away from it then moves without anything
// happening on screen: a back face turn seen from straight in front does not
// shift a single visible sticker. As soon as the view direction has a component
// along all three axes the camera sits near a corner of the cube, three faces
// are visible at once, and all six layer turns show movement.

type Vec3 = { x: number; y: number; z: number };

// How flat against a face plane the camera may get before that face is
// considered edge on (~12.7 degrees off the plane) ...
const MIN_AXIS_COMPONENT = 0.22;
// ... and the angle we correct up to (~24.8 degrees). Keeping the two apart
// means small orbits around an already decent angle are left alone instead of
// the camera nudging itself on every single move.
const TARGET_AXIS_COMPONENT = 0.42;

// Used when there is no direction to work from at all (camera sitting exactly
// on the cube centre), and as the axis signs to prefer when the camera is
// dead on an axis: positive all round is the familiar "front, up and to the
// right" view of the cube.
const FALLBACK_DIRECTION: Vec3 = { x: 0, y: 0, z: 1 };

function normalized(v: Vec3): Vec3 {
  const length = Math.hypot(v.x, v.y, v.z);
  if (length === 0) {
    return { ...FALLBACK_DIRECTION };
  }
  return { x: v.x / length, y: v.y / length, z: v.z / length };
}

function isGoodViewingDirection(direction: Vec3): boolean {
  const d = normalized(direction);
  return (
    Math.abs(d.x) >= MIN_AXIS_COMPONENT &&
    Math.abs(d.y) >= MIN_AXIS_COMPONENT &&
    Math.abs(d.z) >= MIN_AXIS_COMPONENT
  );
}

// Lifts a component that is too flat up to the target angle, keeping the side
// of the cube it points at. Components the camera sits exactly on default to
// the positive side.
function liftComponent(component: number): number {
  if (Math.abs(component) >= MIN_AXIS_COMPONENT) {
    return component;
  }
  return component < 0 ? -TARGET_AXIS_COMPONENT : TARGET_AXIS_COMPONENT;
}

// Nudges `direction` just far enough away from the axes for every face to be
// off edge on, and no further: the octant the camera is in is kept, so the cube
// stays in the orientation the user left it in. Renormalising shrinks the
// components that were already fine, so lifting is repeated until it settles
// (one pass is enough in practice, the loop is only a guard).
function goodViewingDirection(direction: Vec3): Vec3 {
  let d = normalized(direction);

  for (let pass = 0; pass < 4 && !isGoodViewingDirection(d); pass++) {
    d = normalized({
      x: liftComponent(d.x),
      y: liftComponent(d.y),
      z: liftComponent(d.z),
    });
  }

  return d;
}

export type { Vec3 };
export {
  MIN_AXIS_COMPONENT,
  TARGET_AXIS_COMPONENT,
  normalized,
  isGoodViewingDirection,
  goodViewingDirection,
};
