import { useTheme } from '@mui/material/styles'
import { useContext } from 'react'
import { ColorModeContext } from '../../themes/ThemeProvider'
import { styled } from '@mui/material/styles'
import { default as Toggle } from '@mui/material/Switch'

const Switch = styled(Toggle)(({ theme }) => ({
  width: 44,
  height: 22,
  padding: 0,
  display: 'flex',
  position: 'relative',
  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: 12,
    height: 12,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    pointerEvents: 'none',
  },
  '&:before': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%2210%22%20viewBox%3D%220%200%208%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.79399%209.125C3.70099%209.12382%202.65311%208.6891%201.88024%207.91624C1.10738%207.14338%200.672666%206.09549%200.671484%205.0025C0.618922%201.92574%204.11755%20-0.145477%206.78344%201.3984L6.81611%201.41653C7.03583%201.53849%207.03766%201.85382%206.81936%201.97832V1.97832C6.79777%201.99063%206.77414%202.00056%206.75036%202.00779C3.59163%202.96833%203.60485%206.55277%207.0617%207.80477V7.80477C7.30597%207.91492%207.33559%208.24996%207.11461%208.4015V8.4015C6.43212%208.87197%205.62292%209.12425%204.79399%209.125Z%22%20fill%3D%22%23ffffff%22%2F%3E%0A%3C%2Fsvg%3E%0A')`,
    left: 5,
  },
  '&:after': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.7959%208.29167C4.5309%208.29167%203.50423%207.265%203.50423%206C3.50423%204.735%204.5309%203.70833%205.7959%203.70833C7.0609%203.70833%208.08757%204.735%208.08757%206C8.08757%207.265%207.0609%208.29167%205.7959%208.29167ZM6.25423%202.33333V0.958333C6.25423%200.70625%206.04798%200.5%205.7959%200.5C5.54382%200.5%205.33757%200.70625%205.33757%200.958333V2.33333C5.33757%202.58542%205.54382%202.79167%205.7959%202.79167C6.04798%202.79167%206.25423%202.58542%206.25423%202.33333ZM6.25423%2011.0417V9.66667C6.25423%209.41458%206.04798%209.20833%205.7959%209.20833C5.54382%209.20833%205.33757%209.41458%205.33757%209.66667V11.0417C5.33757%2011.2937%205.54382%2011.5%205.7959%2011.5C6.04798%2011.5%206.25423%2011.2937%206.25423%2011.0417ZM2.58757%206C2.58757%205.74792%202.38132%205.54167%202.12923%205.54167H0.754232C0.502148%205.54167%200.295898%205.74792%200.295898%206C0.295898%206.25208%200.502148%206.45833%200.754232%206.45833H2.12923C2.38132%206.45833%202.58757%206.25208%202.58757%206ZM11.2959%206C11.2959%205.74792%2011.0896%205.54167%2010.8376%205.54167H9.46257C9.21048%205.54167%209.00423%205.74792%209.00423%206C9.00423%206.25208%209.21048%206.45833%209.46257%206.45833H10.8376C11.0896%206.45833%2011.2959%206.25208%2011.2959%206ZM3.37132%203.57542C3.55007%203.39667%203.55007%203.10792%203.37132%202.92917L2.45465%202.0125C2.2759%201.83375%201.98715%201.83375%201.8084%202.0125C1.62965%202.19125%201.62965%202.48%201.8084%202.65875L2.72507%203.57542C2.81673%203.66708%202.93132%203.70833%203.05048%203.70833C3.16965%203.70833%203.28423%203.6625%203.3759%203.57542H3.37132ZM9.78798%209.99208C9.96673%209.81333%209.96673%209.52458%209.78798%209.34583L8.87132%208.42917C8.69256%208.25042%208.40382%208.25042%208.22506%208.42917C8.04631%208.60792%208.04631%208.89667%208.22506%209.07542L9.14173%209.99208C9.2334%2010.0837%209.34798%2010.125%209.46715%2010.125C9.58632%2010.125%209.7009%2010.0792%209.79257%209.99208H9.78798ZM2.45465%209.99208L3.37132%209.07542C3.55007%208.89667%203.55007%208.60792%203.37132%208.42917C3.19257%208.25042%202.90382%208.25042%202.72507%208.42917L1.8084%209.34583C1.62965%209.52458%201.62965%209.81333%201.8084%209.99208C1.90007%2010.0837%202.01465%2010.125%202.13382%2010.125C2.25298%2010.125%202.36757%2010.0792%202.45923%209.99208H2.45465ZM8.87132%203.57542L9.78798%202.65875C9.96673%202.48%209.96673%202.19125%209.78798%202.0125C9.60923%201.83375%209.32048%201.83375%209.14173%202.0125L8.22506%202.92917C8.04631%203.10792%208.04631%203.39667%208.22506%203.57542C8.31673%203.66708%208.43132%203.70833%208.55048%203.70833C8.66965%203.70833%208.78423%203.6625%208.8759%203.57542H8.87132Z%22%20fill%3D%22%23142236%22%2F%3E%0A%3C%2Fsvg%3E%0A')`,
    right: 5,
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#142236' : '#fff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#142236',
    boxShadow: 'none'
  },
  '& .MuiSwitch-track': {
    borderRadius: 11,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'light' ? '#142236' : '#fff',
    boxSizing: 'border-box',
  },
}))


const ModeSwitcher = () => {
  const theme = useTheme()
  const { toggleColorMode } = useContext(ColorModeContext)

  return <Switch checked={theme.palette.mode === 'light'} onChange={toggleColorMode}/>
}

export default ModeSwitcher
