import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Aprender yarn','Aprender react', 'Aprender redux']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Exercicio React 12.1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {compromissos.map(toDo => task(toDo))}
        </a>
      </header>
    </div>
  );
}

export default App;
