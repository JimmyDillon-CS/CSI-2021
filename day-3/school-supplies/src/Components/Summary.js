import React from 'react';
import '../App.css';

function Summary(props) {
  var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  });
  
  return(
    <div className="summary">
      <p>This is a Summary!</p>
      <p>Your items: {props.globalState.cart}</p>
      <p>Total: {formatter.format(props.globalState.total)}</p>
    </div>
  );
}

export default Summary;
