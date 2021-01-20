import React, { useEffect, useState } from "react";

const Weather = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b86a040eae9280afdfff416815b2f168`;
        console.log("Latituide is: ", pos.coords.latitude);
        console.log("Longitude is: ", pos.coords.longitude);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b86a040eae9280afdfff416815b2f168`
        )
          .then((res) => res.json())
          .then((res)=>console.log(res));
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
    <div>
      <h1>
        This is where the current weather of your location will be displayed
      </h1>
    </div>
  );
};

export default Weather;
