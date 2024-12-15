import React from "react";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
