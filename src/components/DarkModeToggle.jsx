import React from 'react';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className={`${styles.toggleButton} ${darkMode ? styles.dark : ''}`} onClick={toggleDarkMode}>
      <span className={styles.heart}></span>
    </button>
  );
};

export default DarkModeToggle;