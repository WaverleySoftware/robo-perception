import React, { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import red from '@mui/material/colors/red'
import yellow from '@mui/material/colors/yellow'
import './app.css'
import { StoreProvider, useStore } from './store'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Settings from './components/settings'
import { observer } from 'mobx-react'

const Root = observer(() => {
  const {settingsStore: { currentAppTheme }} = useStore()
  const theme = useMemo(() => createTheme({
      palette: {
        primary: currentAppTheme?.value === 'light' ? red : yellow,
        mode: currentAppTheme?.value
      },
    }), [currentAppTheme]
  )

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Dashboard />
      <Settings />
    </ThemeProvider>
  )
})

function App() {
  return (
    <div className='App'>
      <StoreProvider colorTheme={'light'}>
        <Root />
      </StoreProvider>
    </div>
  )
}

export default App
