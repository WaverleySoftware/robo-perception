import React, { useMemo, useState } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { getColorModeSettings, lightMode, darkMode, isLightMode } from './base'

export const ColorModeContext = React.createContext({})

const ThemeProvider = (props) => {
    const currentMode = localStorage.getItem('appMode') || lightMode

    const [mode, setMode] = useState(currentMode)

    const colorMode = React.useMemo(
      () => ({
        // The mode switch would invoke this method
        toggleColorMode: () => {
          setMode((prevMode) => {
            const newMode = isLightMode(prevMode) ? darkMode : lightMode
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