import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const content = [
    {id: 1, item: 'a'},
    {id: 2, item: 'b'},
    {id: 3, item: 'c'},
    {id: 4, item: 'd'},
  ];

  return (
    <div className="App">
      <Dropdown content={content}>Título da lista customizado</Dropdown>
    </div>
  );
}

export default App;