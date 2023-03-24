export const MovementAction = {
  FORWARD: 'forward',
  BACKWARD: 'backward',
  LEFTWARD_ROTATION: 'leftward-rotation',
  RIGHTWARD_ROTATION: 'rightward-rotation',
}

export const MovementObliquelyAction = {
  LEFT_FORWARD: 'left-forward',
  RIGHT_FORWARD: 'right-forward',
  RIGHT_BACKWARD: 'right-backward',
  LEFT_BACKWARD: 'left-backward',
}

export const MovementObliquelyHoloAction = {
  LEFT_FORWARD: 'left-forward',
  RIGHT_FORWARD: 'right-forward',
  RIGHT_BACKWARD: 'right-backward',
  LEFT_BACKWARD: 'left-backward',
}

export const RollAction = {
  ROLL_LEFT: 'roll-left',
  ROLL_RIGHT: 'roll-right',
}

export const PitchAction = {
  PITCH_FRONT: 'pitch-front',
  PITCH_BACK: 'pitch-back',
}

export const TorsionAction = {
  TORSION_LEFT: 'torsion-left',
  TORSION_RIGHT: 'torsion-right',
}

export const TiltAction = {
  TILT_FRONT: 'tilt-front',
  TILT_BACK: 'tilt-back',
}

export const TiltSideAction = {
  TILT_RIGHT: 'tilt-right',
  TILT_LEFT: 'tilt-left',
}
export const ElevationAction = {
  ELEVATION_UP: 'elevation-up',
  ELEVATION_DOWN: 'elevation-down',
}

export const getActions = (actionMap) => Object.values(actionMap)
