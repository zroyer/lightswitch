import React from 'react';
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <div
          className="toggle-div"
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          {theme.icon}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
