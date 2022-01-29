import React from 'react';
import Kids from "../assets/kids.png"
import './kids.css'
const kids = () => {
    return (
    <div class='kids'>
    <div class="container-fluid">
    <div class="row">
    
    <div class="col-lg-6">
    <h1>Create profiles kids.</h1>
        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
    </div>
    
    <div class="col-lg-6">
    <img class='title-images' src={Kids}  alt='hero' />
       
   
    </div>
    </div>
    </div>
    </div>
  )
};

export default kids;
