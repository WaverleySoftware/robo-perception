import React from 'react'
import { observer } from 'mobx-react'
import { Modal, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CloseButton from '../closeButton'
import InputTabs, { TabPanelTitle } from '../inputTabs'
import GuideCarousel from '../guideCarousel'

const GuideModal = observer(({open, onClose}) => {
  const theme = useTheme()

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        background: 'rgba(242, 244, 252, 0.2)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Box sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '712px',
        height: '100%',
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.blue[400],
        padding: '34px',
      }}>
        <CloseButton title='Close Guide' onClick={onClose}/>
        <InputTabs
          tabStyles={{position: 'absolute', left: '48px', top: '30px'}}
          renderKeyboardContent={() => (
            <>
              <TabPanelTitle>Keyboard Guide</TabPanelTitle>
              <GuideCarousel />
            </>
          )}
          renderJoystickContent={() => (
            <>
              <TabPanelTitle>Joystick Guide</TabPanelTitle>
            </>
          )}
        />
      </Box>
    </Modal>
  )
})

export default GuideModal
