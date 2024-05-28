import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import WelcomeCard from './components/WelcomeCard';
import PokemonCard from './components/PokemonCard';
import LikedPokemonGrid from './components/LikedPokemonList';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemon, setLikedPokemon] = useState([]);

  useEffect(() => {
    if (!showWelcome) {
      fetchRandomPokemon();
    }
  }, [showWelcome]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const fetchRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;
    const newPokemon = {
      id: data.id,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      abilities: data.abilities.map((ability) => ability.ability.name),
      types: data.types.map((type) => type.type.name)
    };
    setPokemon(newPokemon);
  };

  const handleLike = () => {
    setLikedPokemon([...likedPokemon, pokemon]);
    fetchRandomPokemon();
  };

  const handleDislike = () => {
    fetchRandomPokemon();
  };

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  if (showWelcome) {
    return <WelcomeCard onStart={() => setShowWelcome(false)} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
  }

  return (
    <div className={`${styles.container} ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {pokemon && (
        <PokemonCard
          pokemon={pokemon}
          onLike={handleLike}
          onDislike={handleDislike}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      <LikedPokemonGrid likedPokemon={likedPokemon} darkMode={darkMode} />
    </div>
  );
};

export default App;
