import React, {useState} from 'react'

const GlobalContext = React.createContext();

const ContextProvider = ({children}) => {

    const [pokemons, setPokemons] = useState([]);

    return (
        <GlobalContext.Provider value={ {pokemons, setPokemons} }>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, ContextProvider}