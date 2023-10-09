import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className="banner-content">
        <h1 className='text-8xl mb-8'>Your Dream Event <br /> Our Expertise</h1>
        <p className='text-3xl mb-8'>Turning Visions into Reality</p>

        <div className="action-btns">
          <button className="btn shadow-md my-4 text-white btn-1 mr-6">Discover More</button>
          <button className="btn btn-outline">Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;