import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css'; // Import your CSS for styling
import Navbar from './components/NavBar';
import 'tachyons';
import WeatherCardList from './components/WeatherCardList';
import Contact from './Contact';


const API_KEY = '0b8b73c2a94cc932eaa6b14b18bd8cfb';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [showData, setShowData] = useState(false); // Add a new state to control data display

  useEffect(() => {
    // Fetch weather data when the component mounts
    if (city && showData) { // Only fetch data if city is provided and showData is true
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [city, showData]);

  const handleSearch = () => {
    // Triggered when the search button is clicked
    setWeatherData(null); // Clear previous weather data
    setShowData(true); // Set showData to true to display the data
  };

 
  return (
    <div className="App" >
      <Navbar className="bg-white"/>
            <h1 className='f1 ma5'>WeatherWise</h1>
            <div className="search-container" >
              <input
                className="search-input pa3 ba"
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ width: '300px' }} // Increase the width of the input
              />
              <br /> {/* Add a line break for spacing */}
              <button 
                onClick={handleSearch} 
                style={{ 
                  marginTop: '10px',
                  backgroundColor: '', // Add background color
                  borderRadius: '20px', // Make the borders round
                  color: 'black', // Add text color
                  padding: '10px 20px' // Add padding
                }}
              >
                Search
              </button> {/* Add margin-top for spacing */}
            </div>
            {showData && weatherData && ( // Only display the data if showData is true and weatherData is available
              <WeatherCard data={weatherData}/>
            )}
            <WeatherCardList />
            <Contact />
          </div>
  );
}
export default App;