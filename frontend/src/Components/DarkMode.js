import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from '../images/Sun.svg';
import { ReactComponent as Moon } from '../images/Moon.svg';
import "../index.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleDarkMode}
        checked={darkMode}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
