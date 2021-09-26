import React from 'react';
import '../App.css';

function CardImage(props) {

  let urlProp = "url(" + props.image + ")";

  return(
    <div className="card-image" style={{backgroundImage: urlProp}}></div>
  );
}

export default CardImage;