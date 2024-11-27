import { useNavigate } from 'react-router-dom';
import '../App.css';

function PokemonList({ pokemonData }) {
  const navigate = useNavigate();

  return (
    <table className="pokemon-table">
      <thead>
        <tr>
          <th>Ndex</th>
          <th>MS</th>
          <th>Pokémon</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemonData.map((pokemon) => (
          <tr key={pokemon.ndex}>
            <td>{pokemon.ndex}</td>
            <td>
              <img src={pokemon.image} alt={pokemon.name} className="pokemon-sprite" />
            </td>
            <td 
              className="pokemon-name"
              onClick={() => navigate(`/pokemon/${pokemon.ndex.replace('#', '')}`)}
              style={{ cursor: 'pointer' }}
            >
              {pokemon.name}
            </td>
            <td className="type-container">
              {pokemon.types.map((type) => (
                <span key={type} className={`type-badge type-${type.toLowerCase()}`}>
                  {type}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokemonList; 