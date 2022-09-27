import React, {useEffect, useState} from 'react'
import { observer } from 'mobx-react'
import { useGamepads } from 'react-gamepads'
import Grid from '@mui/material/Grid'
import {ReactComponent as JoystickView} from './joystick.svg'

const Joystick = observer(() => {
  const [gamepad, setGamepad] = useState(null);
  useGamepads(gamepads => setGamepad(gamepads[0]));

  useEffect(() => {
    if (gamepad) {
      // this effect is invoked any time when gampad button or axes pressed, so we can send event to the BE
      console.log('gamepad', gamepad)
    }
  }, [gamepad])  

  return (
    <Grid sx={{margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <JoystickView />
    </Grid>
  )
})

export default Joystick
