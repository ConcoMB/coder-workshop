import { useParams, useNavigate } from 'react-router-dom';
import pokemonData from '../data/Pokedex.json';

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const pokemon = pokemonData.find(p => p.id.toString().padStart(4, '0') === id);
  
  if (!pokemon) return <div>Pokemon not found</div>;

  return (
    <div className="pokemon-detail">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to List
      </button>
      
      <div className="detail-content">
        <h1>{pokemon.name.english}</h1>
        
        <div className="main-info">
          <img 
            src={pokemon.image.sprite} 
            alt={pokemon.name.english} 
            className="pokemon-large-sprite" 
          />
          
          <div className="types">
            {pokemon.type.map((type) => (
              <span key={type} className={`type-badge type-${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="description">
          <h2>Description</h2>
          <p>{pokemon.description}</p>
        </div>

        {pokemon.evolution && (
          <div className="evolution">
            <h2>Evolution Line</h2>
            <div className="evolution-line">
              {pokemon.evolution.prev && (
                <div className="evolution-stage">
                  <h3>Previous Evolution</h3>
                  {Array.isArray(pokemon.evolution.prev) && pokemon.evolution.prev.map((evo, index) => (
                    <div key={index}>
                      <p>#{evo[0]} at {evo[1]}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {pokemon.evolution.next && (
                <div className="evolution-stage">
                  <h3>Next Evolution</h3>
                  {Array.isArray(pokemon.evolution.next) && pokemon.evolution.next.map((evo, index) => (
                    <div key={index}>
                      <p>#{evo[0]} at {evo[1]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail; 