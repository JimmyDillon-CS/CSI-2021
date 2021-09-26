import React from 'react';
import building from './images/building.png';
import './Navbar.css';

function Navbar() {
  return(
    <div className="navbar">
      <img className="logo" alt="logo" src={building}/>
      <p className="company">StreetHard</p>
    </div>
  );
}

export default Navbar;
