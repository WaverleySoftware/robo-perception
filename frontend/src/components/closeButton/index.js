import { useTheme } from '@mui/material/styles'
import { IconButton, Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const CloseButton = ({ title, onClick }) => {
  const theme = useTheme()

  return (
    <Tooltip title={title} placement='bottom'>
      <IconButton
        sx={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          cursor: 'pointer',
          zIndex: theme.zIndex.closeWidget,
          width: '24px',
          height: '24px',
          '&:hover': {
            background: theme.palette.mode === 'light' ? '#EAEDF7' : theme.palette.grey[200]
          }
        }}
        onClick={onClick}
      >
        <CloseIcon sx={{ color: theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.common.white}}/>
      </IconButton>
    </Tooltip>
  )
}

export default CloseButton
