import React, { useState, useContext } from 'react'
import { GlobalContext } from './context';

function Create() {

    const { pokemons, setPokemons } = useContext(GlobalContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const types = [
            {
                slot: 1,
                type: { name: event.target.typeOne.value }
            },
            {
                slot: 2,
                type: { name: event.target.typeTwo.value }
            }
        ];

        const data = {
            id: event.target.id.value,
            name: event.target.name.value,
            sprites: { fornt_default: event.target.image.value },
            types: types.filter(type => type.type.name !== 'null')
        }

        setPokemons(prevState => [...prevState, data]);
    }

    return (
        <section>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="id">Id: </label>
                <input type="number" name="id" required/>

                <label htmlFor="name">Name: </label>
                <input type="text" name="name" minLength="3" required/>

                <label htmlFor="image">Image: </label>
                <input type="text" name="image" required/>

                <label htmlFor="typeOne">Type One: </label>
                <select type="number" name="typeOne">
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="electric">Electric</option>
                    <option value="ice">Ice</option>
                    <option value="Poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="ghost">Ghost</option>
                    <option value="rock">Rock</option>
                    <option value="psychic">Psychic</option>
                    <option value="bug">Bug</option>
                    <option value="dragon">Dragon</option>
                    <option value="fairy">Fairy</option>
                </select>

                <label htmlFor="typeTwo">Type Two: </label>
                <select type="number" name="typeTwo">
                    <option value="null">---</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="electric">Electric</option>
                    <option value="ice">Ice</option>
                    <option value="Poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="ghost">Ghost</option>
                    <option value="rock">Rock</option>
                    <option value="psychic">Psychic</option>
                    <option value="bug">Bug</option>
                    <option value="dragon">Dragon</option>
                    <option value="fairy">Fairy</option>
                </select>

                <input type="submit" />
            </form>
        </section>
    )
}

export default Create