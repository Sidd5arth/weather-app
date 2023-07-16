import React, { useState } from 'react';
import './weather.css'
import Live from './Live';
import Card from './Card';
import CityDropDown from './CityDropDown';
// import getWeatherData from '../services/weatherService';

const Weather = () => {
  const [liveData, setLiveData] = useState([]);
  const [cardData, setCardData] = useState([]);
  
  const cityHandler = (city) => {
    console.log(city);

    const liveValues = {
      temp : city[0].temp.day,
      type : city[0].weather[0].main,
      icon : city[0].weather[0].icon,
      dt : city[0].dt,
    }
    const cardValues = 
    [city[1], city[2], city[3], city[4],
     city[5], city[6], city[7]]

    setCardData(cardValues);
    setLiveData(liveValues);
  
  }

  return (
    <div className='min-vh-100 p-5'>
    <div className='weather text-style3 p-5'>
      <div> Hello Siddharth !<br/> Check today's weather.</div>
      <CityDropDown onSelect={cityHandler}/>
      <Live liveData = {liveData}/>
      <div className='d-flex flex-row gap-3 mt-3 sc-style'>
         <Card cardData = {cardData}/>
      </div>
    </div>
    </div>
  )
}

export default Weather;
