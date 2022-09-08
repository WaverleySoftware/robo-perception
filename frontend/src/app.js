import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import red from '@mui/material/colors/red'
import './app.css'
import poster from './Media/pupper_cool.jpeg'

import { StoreProvider } from './store'
import { VideoPlayerView } from './VideoPlayer'
import Header from './components/header'
import Sidebar from './components/sidebar'

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
          <main className='main'>              
            <div className='main-content'>
              <VideoPlayerView poster={poster} controls={false} />
            </div>
            <Sidebar />
          </main>
        </ThemeProvider>
      </StoreProvider>
    </div>
  )
}

export default App
