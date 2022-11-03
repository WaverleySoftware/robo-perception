import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#262748'
    },
    secondary: {
      main: '#B7C0D9'
    },
    error: {
      main: '#D9204C'
    },
    info: {
      main: '#28BDEB'
    },
    success: {
      main: '#6FCF41'
    },
    warning: {
      main: '#FFAA04'
    },
    text: {
      primary: '#262748',
      secondary: '#B7C0D9',
    },
    button: {
      disabled: '#E1E6F4'
    },
    background: {
      main: '#F2F4FC',
      paper: 'rgba(253, 253, 255, 0.8)'
    },
  },
  shape: {
    cardBorderRadius: '16px',
    formFieldBorderRadius: '6px',
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  }
});

export default lightTheme
