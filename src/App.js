import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

import pokemonData from './data/Pokedex.json';

const formattedPokemonData = pokemonData.map(pokemon => ({
  ndex: `#${pokemon.id.toString().padStart(4, '0')}`,
  name: pokemon.name.english,
  types: pokemon.type,
  image: pokemon.image.sprite
}));

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
