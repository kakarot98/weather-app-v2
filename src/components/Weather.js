import React, { useEffect, useState } from "react";
import { fetchUserLocation, fetchWeather } from "./fetch";

const Weather = () => {
  //const [data, setData] = useState({});
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
          setCity(data.name);
          setCountry(data.sys.country);
          setTemperature(data.main.temp - 273.15);
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
    <div className="Weather">
      <p className="Weather-temperature">
        {temperature}{'\u00b0'}
        C
      </p>
      <p className="Weather-location">
        {city}, {country}
      </p>
      <p className="weather-description">
        Weather Condition: {weatherCondition}
      </p>
      {icon && (
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          className="icon"
        />
      )}
    </div>
  );
};

export default Weather;
