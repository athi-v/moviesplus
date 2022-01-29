import React from 'react';
import Tv from '../assets/old.jpg'

import './Featured.css'
const Featured = () => {
  return (
    <div class='featured'>
    <div class="container-fluid">
    <div class="row">
    
    <div class="col-lg-6">
    <img class='title-images' src={Tv}  alt='hero' />
    </div>
    
    <div class="col-lg-6">
        <div className='para'>
        <h1>Enjoy movies on Movie+TV.</h1>
        <p>Also you can watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      <div class='form-div'>
      <form>

        <input type='email' placeholder='Enter your email'></input> <button class='btn btn-primary'>Learn More</button>
      </form>
      </div>
        </div>
        
    </div>
    </div>
    </div>
    </div>
  )
};

export default Featured;
