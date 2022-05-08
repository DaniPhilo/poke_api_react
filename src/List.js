import React, { useContext } from 'react'
import Card from './Card'
import { GlobalContext } from './context'

function List() {

    const { pokemons } = useContext(GlobalContext);

    return (
        <section>
            {pokemons.length > 0 ?
                pokemons.map(pokemon => {
                    return <Card key={pokemon.id} pokemon={pokemon}/>
                })
                :
                <h4>No results...</h4>
            }
        </section>
    )
}

export default List