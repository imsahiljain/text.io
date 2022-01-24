import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <div className="heading">
        <h1>text.io</h1>
        <p id="source">Do anything with your text.</p>
        <Link to="/about" id="source">About text.io <ion-icon name="open-outline"></ion-icon></Link>
        <hr/>
    </div>
  );
};

export default Header;
