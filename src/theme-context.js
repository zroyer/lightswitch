import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    icon: '🌚',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    icon: '💡',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
