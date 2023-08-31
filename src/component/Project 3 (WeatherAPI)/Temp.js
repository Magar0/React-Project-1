import React, { useState, useEffect } from 'react';
import './style.css';
import WeatherCard from './weatherCard';

const Temp = () => {

  const [searchValue, setSearchValue] = useState("jorhat");
  const [tempInfo, setTempInfo] = useState({})

  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=479a7b690583815022ddc7c7a046ce0a`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0]
      const { name } = data
      const { speed } = data.wind
      const { country, sunset } = data.sys

      const myNewWeatherInfo = {
        temp, humidity, pressure, weatherMood, name, speed, country, sunset
      };

      setTempInfo(myNewWeatherInfo);
      document.getElementById("error").textContent = ""
    }

    catch (error) {
      document.getElementById("error").textContent = "Type the place correctly"
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Weather Forecasting"
    getWeather()
  }, []);

  return (
    <>
    <div className="main-box-weather">
      <div> <h2>Thapa Weather Forecast</h2></div>
      <div className="search">
        <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

        <button className='searchBtn' onClick={getWeather}>Search</button>
      </div>
      <div className="error"><h5 id='error'></h5></div>

      {/* temp card */}
     
     < WeatherCard tempInfo={tempInfo}/>
     </div>
    </>
  )
}

export default Temp