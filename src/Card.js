import React, { useState, useEffect } from 'react'

function Card({ pokemon }) {

    const [data, setData] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            const filteredData = { id: data.id, name: data.name, url: data.sprites.front_default, type: data.types[0].type.name }
            setData(filteredData);
        }
        fetchPokemon();
    }, []);

    return (
        <div>
            <img src={data.url} alt="" />
            <h4>#{data.id} {data.name}</h4>
            <p>Type: {data.type}</p>
        </div>
    )
}

export default Card