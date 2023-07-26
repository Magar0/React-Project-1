import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {

  const [weatherState, setWeatherState] = useState("")

  const {
    temp, humidity, pressure, weatherMood, name, speed, country, sunset
  } = tempInfo;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState('wi-day-cloudy');
          break;
        case "Haze":
          setWeatherState('wi-fog');
          break;
        case "Clear":
          setWeatherState('wi-day-sunny');
          break;
        case "Rain":
          setWeatherState('wi-day-rain');
          break;


        default:
          setWeatherState('wi-day-sunny');
          break;
      }

    }
  })

  // converting sec to time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let time = `${date.getHours()} : ${date.getMinutes()}`;

  return (
    <>
      <article className='widget'>
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weather">
          <div className="weatherInfo">
            <div className="temperature">
              <span>{temp} &deg;</span>
            </div>
            <div className="description">
              <div className="weatherCondition">{weatherMood}</div>
              <div className="place">{name}, {country}</div>
            </div>
          </div>

          <div className='date'>{new Date().toLocaleString("en-US")}</div>
        </div>
        {/* bottom 4 section  */}
        <div className="extra-temp">
          <div className="two-sided-section">
            <p>
              <i className='wi wi-sunset'></i>
            </p>
            <p className="extra-info-leftside">{time} <br />Sunset</p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className='wi wi-humidity'></i>
            </p>
            <p className="extra-info-leftside">{humidity} <br />Humidity</p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className='wi wi-rain'></i>
            </p>
            <p className="extra-info-leftside">{pressure} <br />Pressure</p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className='wi wi-strong-wind'></i>
            </p>
            <p className="extra-info-leftside">{speed} <br />Speed</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard;