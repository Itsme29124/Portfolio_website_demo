{/*import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo.png"
import user_icon from "../../assets/user.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Thank you for visiting our website.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2023 Nasir Mansuri. All rights reserved .</p>
            <div className="footer-bottom-right">
                <p>Terms and Conditions</p>
                <p>Privacy</p>
                <p>Thank you for joining</p>
            </div>
        </div>
    </div>
  )
}

export default Footer */}


import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo3.png';
import user_icon from '../../assets/user.png';

const generalInstructions = 'Full website will be launched soon !! Stay tuned :)';
const messages = 'Thank you for subscribing';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleTermsClick = () => {
    alert(generalInstructions);
  };

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
      alert(messages);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Thank you for visiting our website.</p>
        </div>
        <div className="footer-top-right">
          <div className={`footer-email-input ${emailError ? 'error' : ''}`}>
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {emailError && <p className="error-message">Please enter a valid email address.</p>}

          <div className="footer-subscribe" onClick={handleSubscribe} style={{ cursor: 'pointer' }}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2023 Nasir Mansuri. All rights reserved .</p>
        <div className="footer-bottom-right">
          <p onClick={handleTermsClick} style={{ cursor: 'pointer' }}>
            Terms and Conditions
          </p>
          <p onClick={handleTermsClick} style={{ cursor: 'pointer' }}>
            Privacy
          </p>
          <p>Thank you for joining</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
