import React, {useState} from 'react'
import Form from './Form'
import List from './List'

function App() {

  const [value, setValue] = useState('');
  const [pokemons, setPokemons] = useState([]);

  return (
    <main>
      <Form value={value} setValue={setValue} pokemons={pokemons} setPokemons={setPokemons} />
      <List pokemons={pokemons} />
    </main>
  )
}

export default App