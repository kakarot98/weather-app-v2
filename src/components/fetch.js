import React, { useState } from "react";
import axios from 'axios'

const API_KEY = "b86a040eae9280afdfff416815b2f168"


export const fetchWeatherUserLocation = async ()=>{
    //const [weatherData, setWeatherData] = useState({})
    navigator.geolocation.getCurrentPosition(
        (pos) => {
          let lat = pos.coords.latitude;
          let lon = pos.coords.longitude;
          //const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b86a040eae9280afdfff416815b2f168`;
          console.log("Latituide is: ", pos.coords.latitude);
          console.log("Longitude is: ", pos.coords.longitude);
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then((res) => res.json())
                   
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );

      //return weatherData
}