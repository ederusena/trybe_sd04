import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['comer', 'correr', 'dançar', 'jogar', 'voar'];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {tarefas.map((tasks) => task(tasks))}
      </header>
    </div>
  );
}

export default App;
