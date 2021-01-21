import axios from "axios";

const API_KEY = "b86a040eae9280afdfff416815b2f168";

export const fetchUserLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        if (lat && lon) return resolve({ latitude: lat, longitude: lon });

        return resolve(null);
      },
      (error) => {
        return reject(error);
      }
    );
  });
};

export const fetchWeather = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    if (data) return data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const fetchCityWeather = async (city, country) => {
  try {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    
    if (data) return data
  } catch(error){
    console.error();
  }

}


