import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff'
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
      primary: '#ffffff',
      secondary: '#B7C0D9'
    },
    button: {
      disabled: '#565873'
    },
    background: {
      main: '#17162D',
      paper: 'rgba(51, 53, 83, 0.8)'
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

export default darkTheme
