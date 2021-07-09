import React, { useState } from 'react';

import { fetchCurrentWeather, fetchWeatherForcast } from './api/FetchWeather';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const callApiCurrentWeather = async (query) => {
    const data = await fetchCurrentWeather(query);
    console.log(data);
    setWeather(data);
    setQuery('');
  }

  const search = async (e) => {
    if(e.key === 'Enter') {
      callApiCurrentWeather(query);
    }
  }

  return (
    <div className="main-container">
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          className="search" 
        />
        <button onClick={(e) => callApiCurrentWeather(query)}>
          Search
        </button>
      </div>
      

      {weather.main && (
        <div className="city">

          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>

          <div className="city-temp">
            {weather.main.temp.toFixed(1)}
            <sup>&deg;C</sup>
          </div>

          <div className="info">
          <img 
            className="city-icon" 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
          <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;