import React from 'react';
import styles from './WelcomeCard.module.css';
import DarkModeToggle from './DarkModeToggle';

const WelcomeCard = ({ onStart, darkMode, toggleDarkMode }) => {
  return (
    <div className={`${styles.welcomeCard} ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1>Welcome to PokéSwipe!</h1>
      <div className={styles.instructions}>
        <p>How to play PokéSwipe:</p>
        <p>Pokémon appear one at a time.</p>
        <p>Choose "Like" or "Dislike".</p>
        <p>Build Your Favorite Team!</p>
      </div>
      <button className={styles.startButton} onClick={onStart}>Let's Go</button>
    </div>
  );
};

export default WelcomeCard;
