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
      secondary: '#B7C0D9',
      robotPositionTitle: '#B7C0D9',
      robotSpeedValue: '#28BDEB',
      disabledVideoPlayerIcon: '#777C94',
      disabledPlayButtonIcon: '#B7C0D9',
      logo: '#ffffff',
    },
    hr: {
      main: '#80819A',
      batteryLevel: '#777C94',
    },
    button: {
      disabled: '#565873'
    },
    background: {
      main: '#17162D',
      paper: 'rgba(51, 53, 83, 0.8)',
      formItemBg: '#484A69',
      switchOffBg: '#4F5171',
      closeWidget: '#FFFFFF',
      closeWidgetHover: '#4F5171',
      keyboardButtonBg: '#4F5171',
      keyboardButtonBgHover: '#28BDEB',
      keyboardButtonBgPressed: '#2097BC',
      keyboardIconBg: '#B7C0D9',
      keyboardIconBgHover: '#FFFFFF',
      keyboardIconBgPressed: '#FFFFFF',
      robotPositionButton: '#4F5171',
      robotSpeedButtonDisabled: '#565873',
      circleProgressTrail: '#4F5171', 
      batteryLevel: '#4F5171',
      disabledPlayButton: 'rgba(225, 230, 244, 0.2)',
    },
    border: {
      formItem: '#777C94',
    },
    robotSelect: {
      iconBg: '#38395C',
      selectedOptionBg: '#3E405E',
      dropdownBg: '#4F5171'
    },
    boxShadow: {
      robotSpeedButton: 'none',
      card: 'none'
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
});

export default darkTheme
