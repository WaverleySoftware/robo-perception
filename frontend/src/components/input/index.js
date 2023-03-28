import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const Input = styled(InputBase)(({ theme }) => ({
  height: '44px',
  '& .MuiInputBase-input': {
    boxSizing: 'border-box',
    height: '44px',
    border: `1px solid ${isLightMode(theme.palette.mode) ? theme.palette.secondary.main : theme.palette.grey[100]}`,
    borderRadius: theme.shape.formFieldBorderRadius,
    background: isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.blue[300],
    fontSize: '14px',
    padding: '12px',
    transition: theme.transitions.create([
      'border-color',
    ]),
    '&:focus': {
      borderColor: '#28BDEB'
    }
  }
}))

export default Input
