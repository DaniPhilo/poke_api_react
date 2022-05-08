import React from 'react'
import Card from './Card'

import { useParams, useSearchParams } from 'react-router-dom'

function Detail() {

    const [searchParams, setSearchparams] = useSearchParams();
    const types = [{
        slot: 1,
        type: { name: searchParams.get('typeOne') }
    },
    {
        slot: 2,
        type: { name: searchParams.get('typeTwo') }
    }
    ]
    const pokemon = {
        id: useParams().id,
        name: searchParams.get('name'),
        sprites: {front_default: searchParams.get('image')},
        types: types.filter(type => type.type.name !== 'null')
    }

    return (
        <section>
            <Card pokemon={pokemon} />
        </section>
    )
}

export default Detail