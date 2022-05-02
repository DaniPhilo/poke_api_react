import React from 'react'

function Form({ value, setValue, pokemons, setPokemons }) {

const handleChange = (event) => {
    setValue(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    setPokemons(prevState => [...prevState, event.target.id.value]);
    setValue('');
}

  return (
    <section>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="id">Pokémon ID: </label>
            <input type="text" name='id' value={value} onChange={handleChange} />
            <button type='submit'>Find</button>
        </form>
    </section>
  )
}

export default Form