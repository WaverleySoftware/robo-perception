import React from 'react'
import { observer } from 'mobx-react'
import { Modal as DefaultModal, Box, Grid } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import CloseButton from '../closeButton'
import Button from '../button'

const Modal = observer(({ showModal, children, onCancel, onConfirm, confirmButtonText = 'yes', cancelButtonText = 'no'  }) => {
  const theme = useTheme()

  return <DefaultModal
      open={showModal}
      onClose={onCancel}
      sx={{
        background: alpha(theme.palette.blue[100]),
      }}
    >
      <Box sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '664px',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.common.white,
        padding: '44px 64px 54px 44px',
        textAlign: 'center',
        borderRadius: '20px',
        boxShadow: theme.palette.boxShadow.main,
      }}>
        <CloseButton title='Close Modal' onClick={onCancel}/>
        {children}
        <Grid>
          <Button sx={{ textTransform: 'uppercase' }} isLight onClick={onConfirm}>{confirmButtonText}</Button>
          <Button sx={{ textTransform: 'uppercase', marginLeft: '24px' }} onClick={onCancel}>{cancelButtonText}</Button>
        </Grid>
      </Box>
    </DefaultModal>
})

export default Modal
