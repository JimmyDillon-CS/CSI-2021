import React from 'react';
import './TableStyle.css';

function TableRow(props) {
  // let myStyle = {
  //   backgroundColor:"green"
  // }
  return(
    <div className="table-rows" style={{backgroundColor: props.result === "W" ? "green" : "red"}}>
      <div>{props.game}</div>
      <div>{props.opponent}</div>
      <div>{props.result}</div>
      <div>{props.location}</div>
      <div>{props.teamScore}</div>
      <div>{props.opponentScore}</div>
      <div>{props.wins}</div>
      <div>{props.losses}</div>
    </div>
  );
}

export default TableRow;
