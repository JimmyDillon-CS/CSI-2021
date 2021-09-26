import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  // console.log(data);
  
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Atlantic Ocean</h2>
        <div className="cards">
          {data.islands.filter(island => island.region === "Atlantic Ocean").map(island => <Card island={island}/>)}
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Arctic Ocean</h2>
        <div className="cards">
          {data.islands.filter(island => island.region === "Arctic Ocean").map(island => <Card island={island}/>)}
        </div>
      </div>
    
      <div className="container">
        <h2 className="section-title">Indian Ocean</h2>
        <div className="cards">
          {data.islands.filter(island => island.region === "Indian Ocean").map(island => <Card island={island}/>)}
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Antarctic Ocean</h2>
        <div className="cards">
          {data.islands.filter(island => island.region === "Antarctic Ocean").map(island => <Card island={island}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
