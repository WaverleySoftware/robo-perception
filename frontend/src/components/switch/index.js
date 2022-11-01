import { default as Toggle } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

const Switch = styled(Toggle)(({ theme }) => ({
  width: 32,
  height: 16,
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#28BDEB',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#B7C0D9',
    boxSizing: 'border-box',
  },
}));

export default Switch
