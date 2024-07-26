import { colours } from "../../data/colours";
import "./pokemonItem.css";
import Model from "../pokemonModel/pokemonModel";
import { useState } from "react";

const PokemonItem = ({ pokemon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => {
    return setIsOpen(true);
  };
  const closeModel = () => {
    return setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Model closeModel={closeModel} detailPokemon={pokemon}/>}
      <div
        onClick={openModel}
        className="pokemon-card"
        style={{ backgroundColor: pokemon.color }}
      >
        <img src={pokemon.imageUrl} alt={pokemon.name} width={200} />
        <h1>{pokemon.name}</h1>
        <div className="types-container">
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className="type-badge"
              style={{ backgroundColor: colours[item.toLowerCase()] }}
            >
              {item}
            </span>
          ))}
        </div>
        <p className="description">{pokemon.description}</p>
      </div>
    </>
  );
};

export default PokemonItem;
