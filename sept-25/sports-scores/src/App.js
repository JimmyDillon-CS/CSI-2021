import React from 'react';
// Be sure to uncomment the TableRow component import before using a TableRow
import TableRow from './components/TableRow.js';
import TableHeader from './components/TableHeader.js';
import Navbar from './components/Navbar.js';
// Be sure to uncomment the line importing the data before using it!
import data from './knicks-data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TableHeader/>
      <TableRow
        game={data[0]["Game"]}
        opponent={data[0]["Opponent"]}
        result={data[0]["Result"]}
        location={data[0]["Location"]}
        teamScore={data[0]["TeamScore"]}
        opponentScore={data[0]["OpponentScore"]}
        wins={data[0]["W"]}
        losses={data[0]["L"]}
      />
    </div>
  );
}

export default App;
