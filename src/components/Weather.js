import React, { useEffect, useState } from "react";

const Weather = () => {

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [temperature, setTemperature] = useState("")
    const [icon, setIcon] = useState("")
    const [weatherCondition, setWeatherCondition] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        //const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b86a040eae9280afdfff416815b2f168`;
        console.log("Latituide is: ", pos.coords.latitude);
        console.log("Longitude is: ", pos.coords.longitude);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b86a040eae9280afdfff416815b2f168`
        )
          .then((res) => res.json())
          .then((res)=>{
              console.log(res)
              setCity(res.name)
              setCountry(res.sys.country)
              setTemperature(res.main.temp - 273.15)
              setIcon(res.weather[0].icon)
              setWeatherCondition(res.weather[0].description)
          });
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
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
