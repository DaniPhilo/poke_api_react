import React, { useEffect } from 'react'
import Card from './Card'

function List({ pokemons }) {

    return (
        <section>
            {
                pokemons.map((pokemon, index) => {
                    return <Card key={index} pokemon={pokemon}/>
                })
            }
        </section>
    )
}

export default List