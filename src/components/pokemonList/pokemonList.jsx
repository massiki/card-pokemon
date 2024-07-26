import { useState } from "react";
import pokemon from "../../data/pokemons.json";
import "./pokemonList.css";
import PokemonItem from "../pokemonItem/pokemonItem";

const PokemonList = () => {
  const [pokemons] = useState(pokemon);
  const [filterPokemons, setFilterPokemons] = useState(pokemon);

  const handleSeach = (e) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });

    setFilterPokemons(search);
  };

  return (
    <>
      <input
        type="text"
        placeholder="cari pokemon . . . "
        className="search"
        onChange={handleSeach}
      />

      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
         <h1>Data tidak ditemukan</h1> 
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem key={item.id} pokemon={item}/>
          ))
        )}
      </div>
    </>
  );
};

export default PokemonList;
