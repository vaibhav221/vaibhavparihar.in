import React from 'react';
import './All.css';
import './OurProject.css';
import P2 from './p2.png'
import './Maincomponent.css';
import gif_for_project from './gif_for_project.gif';
import project_card2 from './project_card2.svg';
import { HashLink as Link } from 'react-router-hash-link';
import P1_gif from './P1_gif.gif';
import sparkle from './sparkle.png'
import './AllMobileview.css';
import star from './star.svg'
import P1 from './P1.gif'

const Ourprojects = () => {
  return (
    <div id="project-App">
      <div className="gallery-container">
      <h1 className="title">Our <span className='subtitle'>project</span></h1>
    </div>
      
      <div className="project-left-div">
        
        <h1 className="title">What makes me <span className='subtitle'>different?</span></h1>
        <p className="description">I create unique digital experiences tailored to your brand and goals. By merging creativity with functionality and staying ahead of design trends, I ensure every project not only looks stunning but also performs flawlessly.</p>
        <button className="icon-button">Browse my work →</button>
      </div>
      <div className="containerrr">
      <div className="boxx">
        <div className="image-containerrr">
          <img src={P1} alt="Image 1" />
          <div className="hover-boxx">
            <h3>ELECTRIFUEL</h3>
            <p>Branding </p>
          </div>
        </div>
      </div>
      <div className="boxx">
        <div className="image-containerrr">
          <img src={P2} alt="Image 2" />
          <div className="hover-boxx">
            <h3>8Seva</h3>
            <p>Subheading 2</p>
          </div>
        </div>
      </div>
    </div>
  
      

      </div>
      
    

    
  );
}

export default Ourprojects;
