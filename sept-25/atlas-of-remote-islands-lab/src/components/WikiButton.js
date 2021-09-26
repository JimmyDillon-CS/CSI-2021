import React from 'react';
import '../App.css';

function WikiButton(props) {
  return(
    <a href={props.wiki} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-block card-btn">View on Wikipedia</button>
    </a>
  );
}

export default WikiButton;