import React, { useMemo, useState } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { getColorModeSettings, lightMode, darkMode } from './base'

// TODO:
// 1) setup theme settings by mode
// 2) use variables for 'light' and 'dark'
// 3) update components depends on mode
// 4) update header design
// 5) boxShadow to config ???

export const ColorModeContext = React.createContext({})

const ThemeProvider = (props) => {
    const currentMode = localStorage.getItem('appMode') || 'light'

    const [mode, setMode] = useState(currentMode)

    const colorMode = React.useMemo(
      () => ({
        // The mode switch would invoke this method
        toggleColorMode: () => {
          setMode((prevMode) => {
            const newMode = prevMode === lightMode ? darkMode : lightMode
            localStorage.setItem('appMode', newMode)
            return newMode
          })
        },
      }),
      [],
    )

    // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getColorModeSettings(mode)), [mode]);

    return (
      <ColorModeContext.Provider value={colorMode}>
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default ThemeProvider;