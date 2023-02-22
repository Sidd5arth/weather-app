import React from 'react';
import './Live.css';
import w1 from './Icons/w1.png';

const Live = () => {
  return (
    <div className='d-flex flex-column justify-content-between mt-3 styles1 p-2'>
      <h1 className='text-style2 d-flex justify-content-center'>23°C</h1>
      <div className='details d-flex flex-column justify-content-center text-align-center'>
         <img className='' src={w1}alt='partialy cloudy'/>
         <p className='text-style pt-1'>Night</p>
      </div>
    </div>
  )
}

export default Live
