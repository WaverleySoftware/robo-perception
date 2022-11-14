import React from 'react'
import './app.css'
import { StoreProvider } from './store'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Settings from './components/settings'
import ThemeProvider from './themes/ThemeProvider'
import { useTheme } from '@mui/material/styles'

const AppContent = () => {
  const theme = useTheme()

  return (
    <div className='App' style={{ background: theme.palette.background.main }}>
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
