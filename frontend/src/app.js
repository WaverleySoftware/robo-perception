import React from 'react'
import './app.css'
import { StoreProvider } from './store'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Settings from './components/settings'
import ThemeProvider from './themes/ThemeProvider'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <ThemeProvider>
          <Header />
          <Dashboard />
          <Settings />
        </ThemeProvider>
      </StoreProvider>
    </div>
  )
}

export default App
