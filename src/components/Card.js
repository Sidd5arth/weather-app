import React from 'react'
import './Card.css'
import dayjs from 'dayjs';

const Card = (props) => {
  // console.log(props)
  console.log(props.cardData.dt)
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "sat"
  ]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  // const weekIndex = dayjs.unix(props.cardData.dt).day()
props.cardData.map((val)=>{
  console.log(val);
})
  return (
      <div className='text-style3 card-cover pb-3'>
        <ul className='d-flex  m-0 ul-styles'>
          {props.cardData.map((val) => ( 
            <li key={val.dt} className='me-3'>    
              <p className='ps-2'>{`${months[dayjs.unix(val.dt).month()]} ${dayjs.unix(val.dt).date()} ${days[dayjs.unix(val.dt).day()]}`}</p>
              <div className='d-flex flex-column p-3 Card-style'>
                 <p className='mb-3'>{val.weather[0].main}</p>
                    <img src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`}alt='type'/>
                 <p className='m-0'>{val.temp.day}°C</p>
              </div>
            </li>
            ))}
        </ul>
      </div>  
  )
}

export default Card
