import { common } from '@mui/material/colors'

export const lightMode = 'light'
export const darkMode = 'dark'

export const getColorModeSettings = (mode = lightMode) => ({
  palette: {
    mode: mode,
    primary: {
      main: mode === 'light' ? '#262748' : common.white,
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
    grey: {
      100: '#777C94',
      200: '#4F5171',
      300: '#E1E6F4',
      400: '#F8F9FD',
    },
    blue: {
      100: '#142236',
      200: '#2097BC',
      300: '#484A69',
      400: '#333553',
    },
    boxShadow: {
      main: '-10px 10px 20px rgba(212, 212, 225, 0.2), 10px -10px 20px rgba(182, 182, 210, 0.2)',
    }
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
  },
  zIndex: {
    connectionInfo: 1,
    closeWidget: 10,
    fullscreen: 100,
    fullscreenControls: 110,
  },
})
