import React from 'react';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="textToSpeech__navbar">
      <div className="textToSpeech__navbar-links">
         <div className="textToSpeech__logo">
          
          <h1>Text2Speech</h1>
         </div>
         <div className="textToSpeech__navbar-links_container">
         <p><a href="#home">Home</a></p>
          <p><a href="#contact">Contact Us</a></p>
         </div>
        
 


      </div>
    </div>
  )
}

export default Navbar