import React from 'react';
import styles from './PokemonCard.module.css';
import DarkModeToggle from './DarkModeToggle';

const PokemonCard = ({ pokemon, onLike, onDislike, darkMode, toggleDarkMode }) => {
  return (
    <div className={styles.card}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
      <h2>{pokemon.name}</h2>
      <div className={styles.details}>
        <div className={styles.abilities}>
          {pokemon.abilities.map((ability, index) => (
            <span key={index} className={styles.abilityBox}>{ability}</span>
          ))}
        </div>
        <div className={styles.types}>
          {pokemon.types.map((type, index) => (
            <span key={index} className={styles.typeBox}>{type}</span>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.likeButton} onClick={onLike}>Like</button>
        <button className={styles.dislikeButton} onClick={onDislike}>Dislike</button>
      </div>
    </div>
  );
};

export default PokemonCard;