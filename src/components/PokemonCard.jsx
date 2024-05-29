// PokemonCard.jsx
import React from 'react';
import styles from './PokemonCard.module.css';
import DarkModeToggle from './DarkModeToggle';

const PokemonCard = ({ pokemon, onLike, onDislike, darkMode, toggleDarkMode }) => {
  return (
    <div className={`${styles.card} ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
      <h2>{pokemon.name}</h2>
      <div className={styles.details}>
        <div className={styles.abilities}>
          {pokemon.abilities.map((ability, index) => (
            <span key={index} className={`${styles.abilityBox} ${darkMode ? 'dark-mode' : ''}`}>{ability}</span>
          ))}
        </div>
        <div className={styles.types}>
          {pokemon.types.map((type, index) => (
            <span key={index} className={`${styles.typeBox} ${darkMode ? 'dark-mode' : ''}`}>{type}</span>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.likeButton} ${darkMode ? 'dark-mode' : ''}`} onClick={onLike}>Like</button>
        <button className={`${styles.dislikeButton} ${darkMode ? 'dark-mode' : ''}`} onClick={onDislike}>Dislike</button>
      </div>
    </div>
  );
};

export default PokemonCard;
