import React, { useState } from "react";
import { fetchCityWeather } from "./fetch";

const Form = () => {
    const [showDetails, setShowDetails] = useState(false)
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const fetchWeather = async (e) => {
    e.preventDefault();
    if(city!==null & country!==null){
        const weather = await fetchCityWeather(city, country);
        if(weather!==null){
            setWeatherData(weather);
            setShowDetails(!showDetails)
            console.log(weather);
        }
        
    }
    
    
    
  };

  return (
    <div className="Form">
      <div className="form-container">
        <form onSubmit={fetchWeather} action="">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter country name..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button>Get Weather</button>
        </form>
        {showDetails && (
          <div className="weather-details">
            <p className="weather-details-temperature">
              {weatherData.main.temp - 273.15}
            </p>
            <p className="weather-details-mintemp">
              {weatherData.main.temp_min - 273.15}
            </p>
            <p className="weather-details-maxtemp">
              {weatherData.main.temp_max}
            </p>
            <p className="weatehr-details-description">
              {weatherData.weather[0].main}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].main}
              className="weather icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
