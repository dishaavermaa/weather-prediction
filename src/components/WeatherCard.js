import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div class="weathercard" className="weather-card-1 tc dib br3 pa3 ma2 grow bw2 shadow-5" style={{height: '250px',width: '200px'}}>
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°F</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
