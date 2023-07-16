import React from 'react';
import './Live.css';
import dayjs from 'dayjs';

const Live = (props) => {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "sat",
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

  return (
    <div className='d-flex flex-column justify-content-between mt-4 styles1 p-2 align-item-center'>
      <h1 className='text-style2 d-flex justify-content-center'>{props.liveData.temp}°C</h1>
      <p className='p-style'>
        {props.liveData === NaN ? 
          `${months[dayjs.unix(props.liveData.dt).month()]} 
          ${dayjs.unix(props.liveData.dt).date()} 
          ${days[dayjs.unix(props.liveData.dt).day()]}` 
          : ""
        }
      </p>
      <div className='details d-flex flex-column align-items-center'>
        <img className='icon-style text-style01' src={`http://openweathermap.org/img/wn/${props.liveData.icon}@2x.png`} alt='' />
        <p className='text-style11'>
          {props.liveData.type ? props.liveData.type : "Please select a city"}
       </p>
      </div>
    </div>
  )
}
export default Live
