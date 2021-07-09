import axios from 'axios';

const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchCurrentWeather = async (query) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      appid: API_KEY,
    }
  });

  return data;
}

export const fetchWeatherForcast = async (latitude, longitude) => {
  const URL = 'https://api.openweathermap.org/data/2.5/onecall';

  const { data } = await axios.get(URL, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      units: 'metric',
      exclude: 'minutely'
    }
  });

  return data;
}