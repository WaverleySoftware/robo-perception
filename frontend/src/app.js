import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import red from '@mui/material/colors/red'
import './app.css'
import { StoreProvider } from './store'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Settings from './components/settings'

const theme = createTheme({
  palette: {
    primary: red,
  },
})

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Dashboard />
          <Settings />
        </ThemeProvider>
      </StoreProvider>
    </div>
  )
}

export default App
