import React, { useState } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { lightTheme, darkTheme } from "../theme";

const CACHE_KEY = 'IS_DARK';

const ThemeProvider = ({ children }) => {
  const _isDark = localStorage.getItem(CACHE_KEY);

  const [isDark, setIsDark] = useState(() => {
    return _isDark ? JSON.parse(_isDark) : false;
  });

  const toggleTheme = (state) => {
    setIsDark(() => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(state));
      return state;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <BaseThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;