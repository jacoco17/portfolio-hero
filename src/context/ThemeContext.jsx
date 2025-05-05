import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update CSS variables based on theme
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--background', '#0b0e10');
      root.style.setProperty('--surface', '#11151a');
      root.style.setProperty('--text', '#a4b1cd');
      root.style.setProperty('--heading', '#ffffff');
      root.style.setProperty('--primary', '#66fcf1');
      root.style.setProperty('--primary-dark', '#45b1a8');
    } else {
      root.style.setProperty('--background', '#f5f5f5');
      root.style.setProperty('--surface', '#ffffff');
      root.style.setProperty('--text', '#666');
      root.style.setProperty('--heading', '#333');
      root.style.setProperty('--primary', '#00a55e');
      root.style.setProperty('--primary-dark', '#008c4f');
    }
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 