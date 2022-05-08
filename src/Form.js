import React, { useContext } from 'react'
import { GlobalContext } from './context';

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, delay);
  };
}

function Form() {

  const { pokemons, setPokemons } = useContext(GlobalContext);


  const handleChange = (id) => {
    // Esto no funciona, no sé por qué. Aparece vacío, aunque pokemons esté lleno y los nombres coincidan en todos los tests que he hecho fuera.
    // const match = pokemons.filter(pokemon => pokemon.name === id);
    // console.log(match)
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(async response => {
          if (response.status === 200) {
            const data = await response.json();
            console.log(data)
            setPokemons(prevState => [...prevState, data]);
          }
        })
        .catch(error => console.log(error));
    };
  }

  const debounceOnChange = React.useCallback(debounce(handleChange, 1000), []);

  return (
    <>
      <section>
        <label htmlFor="id">Pokémon ID: </label>
        <input type="text" name='id' onChange={(e) => debounceOnChange(e.target.value)} />
      </section>
    </>
  )
}

export default Form