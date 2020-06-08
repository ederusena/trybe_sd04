import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokeArray from './Data'

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
        {pokeArray.map(poke => <Pokedex pokemon={poke} />)}
    </div>
  );
}

export default App;
