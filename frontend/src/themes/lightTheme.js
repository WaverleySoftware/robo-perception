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
    hr: {
      main: '#E1E6F4'
    },
    button: {
      disabled: '#E1E6F4'
    },
    background: {
      main: '#F2F4FC',
      paper: 'rgba(253, 253, 255, 0.8)',
      formItemBg: '#FFFFFF',
      switchOffBg: '#B7C0D9',
      closeWidget: '#B7C0D9',
      closeWidgetHover: '#EAEDF7',
      keyboardButtonBg: '#DFE5F7',
      keyboardButtonBgHover: '#28BDEB',
      keyboardButtonBgPressed: '#2097BC',
      keyboardIconBg: '#B7C0D9',
      keyboardIconBgHover: '#FFFFFF',
      keyboardIconBgPressed: '#FFFFFF'
    },
    border: {
      formItem: '#B7C0D9',
    },
    robotSelect: {
      iconBg: '#E2E7F5',
      selectedOptionBg: '#F7F8FC',
      dropdownBg: '#FFFFFF'
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
  }
});

export default lightTheme
