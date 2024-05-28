// LikedPokemonList.jsx
import React from 'react';
import styles from './LikedPokemonList.module.css';

const LikedPokemonGrid = ({ likedPokemon, darkMode }) => {
  return (
    <div className={`${styles.likedPokemonGridContainer} ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className={styles.heading}>Pokémon you have liked ❤️</h2>
      <div className={`${styles.likedPokemonGrid} ${darkMode ? 'dark-mode' : ''}`}>
        {likedPokemon.map((pokemon) => (
          <div key={pokemon.id} className={`${styles.pokemonItem} ${darkMode ? 'dark-mode' : ''}`}>
            <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
            <span className={styles.pokemonName}>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemonGrid;
