import React from 'react'
import { observer } from 'mobx-react'
import { Paper} from '@mui/material'
import Keyboard from '../keyboard'
import Joystick from '../joystick'
import { useTheme } from '@mui/material/styles'
import InputTabs, { TabPanelTitle } from '../inputTabs'

const InputController = observer(() => {
  const theme = useTheme()

  return (
    <Paper sx={{borderRadius: theme.shape.cardBorderRadius, position: 'relative', padding: '24px 0 8px'}}>
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
