import React from 'react';
import '../App.css';

function Product(props) {
  let price = parseFloat(props.price);
  price.toFixed(2);
  return(
    <div className="product" onClick={() => {props.addToCart(props.type, price)}}>
      <p>Click me to buy a {props.type}! </p>
      <p>${props.price}</p>
    </div>
  );
}

export default Product;