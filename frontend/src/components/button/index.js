import { styled } from '@mui/material/styles'
import { default as DefaultButton } from '@mui/material/Button'

const Button = styled(DefaultButton)(({ theme }) => ({
  backgroundColor: '#28BDEB',
  borderRadius: '8px',
  color: '#ffffff',
  fontWeight: 500,
  fontSize: '14px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#18DDFC',
  },
  '&:disabled': {
    backgroundColor: '#E1E6F4',
    color: '#B7C0D9'
  },
  '&:active': {
    backgroundColor: theme.palette.blue[200]
  }
}));

export default Button
