import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

import pokemonData from './data/Pokedex.json';

const formattedPokemonData = pokemonData.map(pokemon => {
  if (!pokemon?.id || !pokemon?.name?.english || !pokemon?.type || !pokemon?.image?.sprite) {
    console.error(`Invalid pokemon data structure:`, pokemon);
    return null;
  }
  return {
    ndex: `#${pokemon.id.toString().padStart(4, '0')}`,
    name: pokemon.name.english,
    types: pokemon.type,
    image: pokemon.image.sprite
  }
}).filter(Boolean);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonList pokemonData={formattedPokemonData} />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
