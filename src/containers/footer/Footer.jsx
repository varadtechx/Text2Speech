import React from 'react';
import textToSpeechLogo from '../../assests/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="textToSpeech__footer section__padding">
  

    <div className="textToSpeech__footer-links">
      <div className="textToSpeech__footer-links_logo">
       <h1>Text2Speech</h1>
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="textToSpeech__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="textToSpeech__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="textToSpeech__footer-links_div">
        <h4>Get in touch</h4>
        <p>sample address </p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="textToSpeech__footer-copyright">
      <p>@2023 Text2Speech. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;