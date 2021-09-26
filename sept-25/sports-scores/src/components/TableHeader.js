import React from 'react';
import './TableStyle.css';

function TableHeader() {
  return(
  <div>
    <h1>Season Results</h1>
    <div className="table-header">
      <div>Game</div>
      <div>Oppenent</div>
      <div>Result</div>
      <div>Location</div>
      <div>Team</div>
      <div>Opponent</div>
      <div>Wins</div>
      <div>Losses</div>
    </div>
  </div>
  );
}

export default TableHeader;
