import Pokemon from './Pokemon';
import pokemons from '../data';
import React from 'react';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((poke) => <Pokemon pokemon={poke} />)        
    );
  }
}

export default Pokedex;