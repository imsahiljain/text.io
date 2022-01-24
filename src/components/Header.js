import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <div className="heading">
        <h1>text.io</h1>
        <p id="source">Do anything with your text.</p>
        <a href="/" id="source">About text.io <ion-icon name="open-outline"></ion-icon> </a>
        <hr/>
    </div>
  );
};

export default Header;
