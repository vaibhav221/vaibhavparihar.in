import React from 'react';
import './All.css';
import './Testimonials.css';
import image1 from './T1.svg';

const images = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    
    
  ];
const Testimonials = () => {
  return (
    <div className='testimonialss'>
           <div className="services-left">
        <h1 className="services-title">Client</h1>
        <h2 className="services-heading">Gossip</h2>
        <p className="services-text">Hear what our clients are saying about their experiences!
        </p>
      </div>
      <div className="testimonial-container">
      {/* <h2>Testimonials</h2> */}
      <div className="image-scroller-container">
        <div className="scroller-row scroller-row-1">
          {images.concat(images).map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} className="scroller-image2" />
          ))}
        </div>
        <div className="scroller-row scroller-row-2">
          {images.concat(images).map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} className="scroller-image2" />
          ))}
        </div>
      </div>
    </div>
      

    </div>
  );
}

export default Testimonials;
