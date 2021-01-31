import React, { useEffect, useState } from "react";
import { fetchUserLocation, fetchWeather } from "./fetch";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");

  useEffect(() => {
    const fetchWUserWeatherCondition = async () => {
      const location = await fetchUserLocation();

      if (location !== null) {
        const data = await fetchWeather(location.latitude, location.longitude);

        if (data !== null) {
          setWeatherData(data)
          setCity(data.name);
          setCountry(data.sys.country);
          let decimalTemperature = data.main.temp - 273.15;

          setTemperature(decimalTemperature.toFixed(1));
          setWeatherCondition(data.weather[0].main);
          setIcon(data.weather[0].icon);
        }
      }
    };

    fetchWUserWeatherCondition();
    return () => {
      //cleanup
    };
  }, []);

  return (
    <div className="weather-box">
      {temperature && (<p className="Weather-temperature">
        {temperature}
        {"\u00b0"} C, {weatherCondition}
      </p>)}
      {icon && (
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          className="icon"
        />
      )}
      <p className="Weather-location">
        {city}, {country}
      </p>
    </div>
  );
};

export default Weather;
