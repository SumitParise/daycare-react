// ContactUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../ContactUs.css'
import AnimatedText from './AnimateText';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 style={{color: 'grey'}}>Contact Us</h2>
      {/* <h3 style={{color: 'black'}}>Day Care Advertisement</h3> */}
      <AnimatedText />
      <div className="contact-item">
      </div>
      <div className="contact-item">
        <a href="mailto:info@daycare.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} /> info@daycare.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
