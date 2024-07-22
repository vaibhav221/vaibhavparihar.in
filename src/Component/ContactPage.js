import React from 'react';
import './All.css';
import Navbar from './Navbar';
import './AllMobileview.css';

const Contactpage = () => {
  return (
    <div style={{ textAlign:'center' }} id="Conatct-main-page">
            <div className="project-left-div">
        
        <h1 className="c-title">Like Our Work! <span className='c-subtitle'>& Have A Project In Mind?</span></h1>
        <p className="description">Then Let's Connect and Turn your Ideas Into Reality.</p>
        <button className="icon-button" smooth to="/contactpage-container" >Lets Connect →</button>
      </div>
 
    {/* <div className='Bottom_navbar'><Navbar/></div> */}
    </div>
  );
}

export default Contactpage;
