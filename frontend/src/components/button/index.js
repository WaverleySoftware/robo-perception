import { styled } from '@mui/material/styles'
import { default as DefaultButton } from '@mui/material/Button'

const Button = styled(({isLight, ...props}) => <DefaultButton {...props}/>)(({ theme, isLight }) => ({
  height: '44px',
  padding: '0 24px',
  backgroundColor: isLight ? '#F7F8FC' : theme.palette.info.main,
  borderRadius: '8px',
  color: isLight ? theme.palette.info.main : theme.palette.common.white,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '14px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: isLight ? theme.palette.grey[300] : '#18DDFC',
  },
  '&:disabled': {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.secondary.main,
  },
  '&:active': {
    backgroundColor: isLight ? '#EAEDF7' : theme.palette.blue[200]
  }
}));

export default Button
