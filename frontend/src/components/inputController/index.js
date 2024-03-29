import React from 'react'
import { observer } from 'mobx-react'
import { alpha, Paper} from '@mui/material'
import Keyboard from '../keyboard'
import Joystick from '../joystick'
import { useTheme } from '@mui/material/styles'
import InputTabs, { TabPanelTitle } from '../inputTabs'
import { isLightMode } from '../../themes/base'

const InputController = observer(() => {
  const theme = useTheme()

  return (
    <Paper sx={{
      borderRadius: theme.shape.cardBorderRadius,
      position: 'relative',
      padding: '24px 0 8px',
      boxShadow: isLightMode(theme.palette.mode) ? theme.palette.boxShadow.main : 'none',
      background: `${alpha(isLightMode(theme.palette.mode) ? theme.palette.grey[400] : theme.palette.blue[400], 0.8)}`,
    }}>
      <InputTabs
        tabStyles={{position: 'absolute', right: '12px', top: '12px'}}
        renderKeyboardContent={() => (
          <>
            <TabPanelTitle>Keyboard</TabPanelTitle>
            <Keyboard />
          </>
        )}
        renderJoystickContent={() => (
          <>
            <TabPanelTitle>Joystick</TabPanelTitle>
            <Joystick />
          </>
        )}
      />
    </Paper>
  )
})

export default InputController
