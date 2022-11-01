import React, { useState } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { getThemeByName, themesList } from './base'

export const ThemeContext = React.createContext({})

const ThemeProvider = (props) => {
    const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'

    const [selectedThemeName, setSelectedThemeName] = useState(curThemeName);

    const theme = getThemeByName(selectedThemeName);

    const setThemeName = (selectedThemeName) => {
        localStorage.setItem('appTheme', selectedThemeName);
        setSelectedThemeName(selectedThemeName);
    }

    return (
      <ThemeContext.Provider value={{themesList, selectedThemeName, setThemeName}}>
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;