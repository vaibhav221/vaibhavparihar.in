import React from 'react';
import logo from './MainVplogo.png'; // Make sure you have a logo.png in the src folder
import movingImage from './Background.svg'; 
import './All.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomCursor from './Customcursor.js';
import Navbar from './Navbar.js';
import Figma_logo from './Figma_logo.svg';
import Logo from './Logo.js';
import Logomobileview from './LogomobileView.js';
import './AllMobileview.css';
import react1 from './react.png';
import logo1 from './chakka.svg';
import arrow from './Arrow1.svg';
import './Div.css';
import { FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo_1 from './logo.svg';


function HomePage() {
  return (
    <div>
      <CustomCursor/>
      
      <div className="container">
      <div className="left-div">
        <div className="header">
          <img src={logo_1} alt="Logo" className="logo" />
          <span className="header-text">Hey, I’m Vaibhav.<br/><span className='header-text1'>UI/UX Designer</span></span>
          <div className="icons">
          <FaPhone className="icon" />
          <FaWhatsapp className="icon" />
            <FaMailBulk className="icon" />
            <button className="icon-button">Get In Touch</button>
          </div>
        </div>
        <h1 className="h-title">Obsessed with Crafting <span className='h-subtitle'>Seamless </span> Digital Experiences</h1>
        <p className="description">Hey, I'm Vaibhav, Welcome to my world of digital design where seamless experiences are the standard, and complexity is left at the door. </p>
      </div>
      
      <div className="image-container"> 
          
          <div className="main_image-flip-card">
              <div className="main_image-flip-card-inner">
                <div className="main_image-flip-card-front">
                  <img src={movingImage} alt="Flippable" className="main_image-flip-card-image" />
                </div>
                <div className="main_image-flip-card-back">
                  <div className="main_image-flip-card-data">
                  <div className='About_logo'>
                    <img src={logo1} className="logo_about" alt="Logo" />
                    <img src={arrow} className="arrow" alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            
         
          
          <br/>
          {/* <div className="overlay-text">Transform ideas Into Reality With <br/> Purposeful Branding and Effective<br/> Web Designing </div>
        */}
              </div>
      </div>
    </div>
      
      
      
       

          
        
        
      
     
      </div>

  );
}

export default HomePage;
