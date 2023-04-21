import { useTheme } from '@mui/material/styles'
import { alpha, IconButton } from '@mui/material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const CloseButtonTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: isLightMode(theme.palette.mode) ? theme.palette.grey[300] : alpha(theme.palette.secondary.main, 0.8),
    color: theme.palette.blue[500],
    fontSize: 10,
  },
}));

const CloseButton = ({ title, onClick, zIndex }) => {
  const theme = useTheme()

  return (
    <CloseButtonTooltip title={title} placement='bottom'>
      <IconButton
        sx={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          cursor: 'pointer',
          zIndex: zIndex || theme.zIndex.closeWidget,
          width: '24px',
          height: '24px',
          '&:hover': {
            background: isLightMode(theme.palette.mode) ? '#EAEDF7' : theme.palette.grey[200]
          }
        }}
        onClick={onClick}
      >
        <CloseIcon sx={{ color: isLightMode(theme.palette.mode) ? theme.palette.secondary.main : theme.palette.common.white}}/>
      </IconButton>
    </CloseButtonTooltip>
  )
}

export default CloseButton
