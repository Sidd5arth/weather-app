import React, { useEffect, useState } from 'react';
import './weather.css'
import Live from './Live';
import Card from './Card';
import search from './Icons/search.png'
import getWeatherData from '../services/weatherService';

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const fetchApi = async () =>{
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=34480b98aa332da53123a0ac63a4ea9d`;
  //     const response = await fetch(url);
  //     const resJson = await response.json();
  //     console.log(resJson);
  //     setCity(resJson);
  //   }
  //   fetchApi();
  // }, [search])
  const cityHandler = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6bb50d01e5210a66c960cbf8f394fd37`)
      .then(res => res.json())
      .then(data => console.log(data));
      
  }



  return (
    <div className='p-5'>
    <div className='weather text-style3 p-5'>
      <div> Hello Siddharth !<br/> Check the weather today.</div>
      <div className="form d-flex flex-row justify-content-between mt-3">
          <input 
          type="text" 
          className="form-control form-input p-2 me-2 text-style3" 
          placeholder="Search a city"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          />
          <button className="ms-2 button-styles" onClick={cityHandler}>
           <img src={search}alt='search'/>
          </button> 
      </div>
      <Live/>
      <div className='d-flex flex-row gap-3 mt-4 sc-style'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </div>
    </div>
    </div>
  )
}

export default Weather;
