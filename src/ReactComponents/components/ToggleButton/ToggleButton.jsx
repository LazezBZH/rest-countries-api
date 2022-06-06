import { useState } from "react";
import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import "./ToggleButton.css";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="toggleButton">
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            <i className={darkMode ? "fas fa-moon" : ""}></i>
            <span className="d-lg-none d-md-block">Change Theme</span>
            <i className={darkMode ? "" : "fas fa-sun"}></i>
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default ToggleButton;
