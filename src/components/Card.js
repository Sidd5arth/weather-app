import React from 'react'
import './Card.css'
import w1 from './Icons/w1.png';

const Card = () => {
  return (
    <div className='text-style3 card-cover pb-3'>
      <p className='ps-2'> Mon, 28 Feb</p>
    <div className='p-3 Card-style'>
        <p>10:00 AM</p>
        <img src={w1}alt='partialy cloudy'/>
        <p>20°C</p>
    </div>
    </div>
  )
}

export default Card
