import React, { useState, useEffect } from 'react'


function Home(props) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
     const [id, setId] = useState(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(result => setPokemon(result))
    }, [id])


 function randomNumber() {
        return Math.floor(Math.random() * 151) + 1;
    }

    console.log("pokemon.sprites.front_default", pokemon);
    return (
        <>
     {pokemon && 
        <div>
            <div className="card__poster">
                 <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card__info">
                 <h3 className="card__info-title">{pokemon.name} </h3> 
                <p className="card__info-para">{pokemon.height} </p>
                <p className="card__info-para">{pokemon.weight}</p>
                 {pokemon.types.map(type => (
                    <p key={type.type.name} className="card__info-para">{type.type.name}</p>
                  ))}
            </div>
             <button className="btn " onClick={() => setId(randomNumber)}>Random Pokémon</button>
        </div>
       }    
       </>
    )
}


export default Home
