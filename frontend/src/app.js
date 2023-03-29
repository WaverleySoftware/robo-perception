import React from 'react'
import './app.css'
import { StoreProvider } from './store'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Settings from './components/settings'
import ThemeProvider from './themes/ThemeProvider'
import { useTheme } from '@mui/material/styles'
import { isLightMode } from './themes/base'

const AppContent = () => {
  const theme = useTheme()

  return (
    <div className='App' style={{ background: isLightMode(theme.palette.mode) ? '#F2F4FC' : '#17162D' }}>
      <Header />
      <Dashboard />
      <Settings />
    </div>
  )
}

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </StoreProvider>
)

export default App
