import lightTheme from './lightTheme'
import darkTheme from './darkTheme'

export function getThemeByName(theme) {
  return themeMap[theme]
}

export const themeMap = {
  lightTheme,
  darkTheme
};

export const themesList = [{
  id: '1',
  label: 'Light Theme',
  value: 'lightTheme'
}, {
  id: '2',
  label: 'Dark Theme',
  value: 'darkTheme'
}]
