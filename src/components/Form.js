import React, { useState } from "react";
import { fetchCityWeather } from "./fetch";

const Form = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const fetchWeather = async e => {
      e.preventDefault()
      const weather = await fetchCityWeather(city, country)
      console.log(weather)
  };

  return (
    <div className="Form">
      <div className="form-container">
        <form onSubmit={e => fetchWeather(e)} action="">
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
        </form>
      </div>
    </div>
  );
};

export default Form;
