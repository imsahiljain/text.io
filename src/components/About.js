import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const About = () => {
  document.title = "text.io | About"
  return (
    <div className="heading">
    
        <h1>About text.io</h1>
        <p id="source">text.io is a tool that allows you to change the text in whatever way you desire.</p>
        <br />
        <Link to="/" id="source">Back to Home  <ion-icon name="open-outline"></ion-icon></Link>
    </div>
  );
};

export default About;
