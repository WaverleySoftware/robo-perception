import React from 'react'
import './app.css'
import { StoreProvider, useStore } from './store'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Settings from './components/settings'
import ThemeProvider from './themes/ThemeProvider'
import { useTheme } from '@mui/material/styles'
import { isLightMode } from './themes/base'
import { Grid } from '@mui/material'
import Sidebar from './components/sidebar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { observer } from 'mobx-react'

const AppContent = observer(() => {
  const theme = useTheme()
  const { settingsStore: { showSidebar }} = useStore()
  const isFullHD = useMediaQuery('(min-width:1920px)')

  return (
    <Grid style={{
      background: isLightMode(theme.palette.mode) ? '#F2F4FC' : '#17162D',
      width: '100%',
      height: '100%',
    }}>
      <Sidebar />
      <Grid>
        <Header />
        <Grid sx={{
          marginLeft: showSidebar && isFullHD ? '256px' : 0,
          transition: theme.transitions.create(['margin'], {
            duration: 250,
          }),
        }}>
          <Dashboard />
          <Settings />
        </Grid>
      </Grid>
    </Grid>
  )
})

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </StoreProvider>
)

export default App
