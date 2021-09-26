import React from 'react';
import './App.css';
import StateCard from './components/StateCard.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <StateCard />
    </div>
  );
}

export default App;
