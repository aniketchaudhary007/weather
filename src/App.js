import React, { useState } from 'react';
import './App.css';
import WeatherInformation from './WeatherInformation';

export default function App() {
  const [cityName, setCityName] = useState('');
  const [weatherInfo, setWeatherInfo] = useState({});
  

  const getWeather = (e) => {
     e.preventDefault()
     fetch(`https://api.weatherapi.com/v1/current.json?key=7e26a42064b3422aad8173714202911&q=${cityName}`)
       .then(res => res.json())
       .then(
         (result) => {
           setWeatherInfo(result);
         }
       );
   };

  const getCityName = (e) => {
    setCityName(e.target.value);
  };
 
  return (
    <div className="App">
      <h1>What's the Weather?</h1>
      <form>
        <input
          type="textbox"
          autoFocus
          placeholder="Enter the name of the city"
          value={cityName}
          onChange={getCityName}
        />
        <button onClick={getWeather}>Find</button>
      </form>
       <WeatherInformation
      weatherInfo={weatherInfo}
      />
    </div>
  );
} 