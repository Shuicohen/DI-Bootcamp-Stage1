import React from 'react'
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './App.css'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={theme === 'light' ? lightThemeStyle : darkThemeStyle}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

const lightThemeStyle = {
  backgroundColor: 'white',
  color: 'black',
};

const darkThemeStyle = {
  backgroundColor: 'black',
  color: 'white',
};
const App = () => {
  return (
    <ThemeProvider>
      <div className='App'>
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  )
}
export default App
