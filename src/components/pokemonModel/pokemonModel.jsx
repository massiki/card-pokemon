import "./pokemonModel.css";
import { FaWindowClose  } from "react-icons/fa";
import { colours } from "../../data/colours";

const Model = (propt) => {
  return (
    <>
      <div className="container">
        <div className="model">
          <FaWindowClose  className="close" onClick={propt.closeModel}/>
          <div
            className="card"
            style={{ backgroundColor: propt.detailPokemon.color }}
          >
            <img
              src={propt.detailPokemon.imageUrl}
              alt={propt.detailPokemon.name}
              width={200}
            />
            <h1>{propt.detailPokemon.name}</h1>
            <div className="container-badge">
              {propt.detailPokemon.types.map((item, index) => (
                <span
                  key={index}
                  className="badge"
                  style={{ backgroundColor: colours[item.toLowerCase()] }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div
            className="card text-left"
            style={{ backgroundColor: propt.detailPokemon.color }}
          >
            <h1>Status</h1>
            <div>HP: {propt.detailPokemon.stats.HP}</div>
            <div>Attack: {propt.detailPokemon.stats.Attack}</div>
            <div>Defense: {propt.detailPokemon.stats.Defense}</div>
            <div>
              Special Attack: {propt.detailPokemon.stats["Special Attack"]}
            </div>
            <div>
              Special Defense: {propt.detailPokemon.stats["Special Defense"]}
            </div>
            <div>Speed: {propt.detailPokemon.stats.Speed}</div>
          </div>
          <div className="card text-left" style={{backgroundColor: propt.detailPokemon.color}}>
            <h1>Description</h1>
            <p>{propt.detailPokemon.description}</p>
          </div>
          <div className="card text-left" style={{backgroundColor: propt.detailPokemon.color}}>
            <h1>Abilities</h1>
            {propt.detailPokemon.abilities.map((item, index) => (
              <div className="card-abilities" key={index}>
                <div><strong>name</strong>: {item.name}</div>
                <div><strong>effect</strong>: {item.effect}</div>
                <div><strong>description</strong>: {item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
