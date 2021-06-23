import Pokemon from './Pokemon';
import pokemons from 'data';

class Pokedex extends Component {
  render() {
    return (
      pokemons.map((poke) => <Pokemon pokemon={poke})        
    );
  }
}

export default Pokedex;