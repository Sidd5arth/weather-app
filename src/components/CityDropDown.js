import React, { useState } from 'react';
import './CityDropDown.css';
import cities from './Data/in.json';
import axios from 'axios';


const CityDropDown = (props) => {

    const handleChange = (event) =>{
        const selectedCity = cities.filter((city) =>{
            return city.city === event.target.value
        })[0]
        const API_KEY ='34480b98aa332da53123a0ac63a4ea9d';
        let Lattitude = selectedCity.lat;
        let Longitude = selectedCity.lng;
        let exclude = 'hourly,minutely';
        const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${Lattitude}&lon=${Longitude}&exclude=${exclude}&units=metric&lang=tr&appid=${API_KEY}`
    
        const fetchCityData = ()=>{
            axios(URL).then((data) => {
                props.onSelect(data.data.daily);
                
            })
        }
        fetchCityData();
    }


  return (
    <div>
      <select className='dropdown-style'
      onChange = {handleChange}
      >
        {
            cities && cities.length > 0 && cities.map((city)=>{
                return(
                    <option key = {`${city.lat}${city.lng}`}
                    value = {city.city}
                    className='text-black text-style3 drop-style'
                    style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255, 255, 255, 0.5)', color:'black' }}>
                        {city.city}-{city.admin_name}
                        
                    </option>
                )
            })
        }
      </select>
    </div>
  )
}

export default CityDropDown;
