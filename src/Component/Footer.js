import React from 'react';
import './All.css'; 
import logo from './logo.svg';
import displacement from './Displacement.mp4'


const Footer = () => {
  return (
    <div className="footer-container">
      
      
        <img src={logo} alt="Logo" className="footer-logo" />
        {/* <div>
          <p className="footer-main-text">Vaibhav Parihar</p>
          <p className="footer-sub-text">Designs</p>
        </div> */}
      
      
      
        <p className="footer-follow">Follow us on</p>
        <div className="footer-social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="footer-center">
        {/* <p className="footer-contact">Contact</p> */}
        <p className="footer-email">ranyparihar@gmail.com</p>
        
      </div>
      
    </div>
  );
}

export default Footer;
