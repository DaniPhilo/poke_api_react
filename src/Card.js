import React from 'react'

function Card({ pokemon }) {

    const data = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types
    }

    const typeTwo = pokemon.types[1] ? pokemon.types[1].type.name : null;

    return (
        <div>
            <h4>
                #{data.id} 
                <a href={`/pokemon/${data.id}?name=${data.name}&image=${data.image}&typeOne=${data.types[0].type.name}&typeTwo=${typeTwo}`}> {data.name}</a>
            </h4>
            <img src={data.image} alt="" />
            <div className="types">
                {data.types.map(item => <p key={item.slot}>{item.type.name}</p>)}
            </div>

        </div>
    )
}

export default Card