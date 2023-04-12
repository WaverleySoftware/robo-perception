import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const Input = styled(InputBase)(({ theme }) => ({
  height: '44px',
  '& .MuiInputBase-input': {
    boxSizing: 'border-box',
    height: '44px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.formFieldBorderRadius,
    background: isLightMode(theme.palette.mode) ? theme.palette.common.white : 'transparent',
    color: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
    fontSize: '14px',
    padding: '12px',
    transition: theme.transitions.create([
      'border-color',
    ]),
    '&:focus': {
      borderColor: theme.palette.info.main,
      background: theme.palette.common.white,
      color: theme.palette.blue[100],
    },
    '&:disabled': {
      borderColor: isLightMode(theme.palette.mode) ? theme.palette.grey[600] : theme.palette.secondary.main,
      backgroundColor: isLightMode(theme.palette.mode) ? theme.palette.grey[700] : theme.palette.blue[300]
    }
  }
}))

export default Input
