import React, { useEffect, useState } from "react";
import {fetchWeatherUserLocation} from './fetch'

const Weather = () => {

    const [data, setData] = useState({})
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [temperature, setTemperature] = useState("")
    const [icon, setIcon] = useState("")
    const [weatherCondition, setWeatherCondition] = useState("")

  useEffect(() => {
      const fetchWUserWeatherCondition = async ()=>{
          setData(await fetchWeatherUserLocation())
          //console.log(data)
      }
    
      
      fetchWUserWeatherCondition()
    return () => {
      //cleanup
    };
  }, []);

  return (
    <div className="Weather">
      <p className="Weather-city-name">City: {city}</p>
      <p className="Weather-country-name">Country: {country}</p>
      <p className="Weather-temperature">Current temperature: {temperature}</p>
      <p className="weather-description">Weather Condition: {weatherCondition}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="icon"/>
    </div>
  );
};

export default Weather;
