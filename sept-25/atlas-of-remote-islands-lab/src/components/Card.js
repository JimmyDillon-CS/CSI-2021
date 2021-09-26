import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage image={props.island.image}/>
            <CardInfo islandName={props.island.name} description={props.island.description} lon={props.island.coords.lon} lat={props.island.coords.lat} wiki={props.island.wiki}/>
        </div>
      </div>
    </li>
  );
}

export default Card;
