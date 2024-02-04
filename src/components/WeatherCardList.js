import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const WeatherCardList = () => {
    const [cities] = useState(['London', 'New York', 'Tokyo', 'Shanghai', 'Delhi', 'Mexico City', 'São Paulo', 'Cairo', 'Mumbai', 'Beijing']);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const API_KEY = '0b8b73c2a94cc932eaa6b14b18bd8cfb';
            const weatherDataPromises = cities.map(async (city) => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                return { city, data };
            });

            const weatherData = await Promise.all(weatherDataPromises);
            setWeatherData(weatherData);
        };

        fetchWeatherData();
    }, [cities]);

    return (
        <div>
            <div id="weather-card-list" className="section-background" style={{ padding: '50px' }}>
                <Splide options={{ perPage: 3, autoplay: true, interval: 1 }}>
                    {weatherData.map(({ city, data }) => (
                        <SplideSlide key={city}>
                            <div className="weather-card tc dib br3 pa5 ma2 grow bw2 shadow-5" style={{ height: '400px', width: '300px' }}>
                                <h2>{city}</h2>
                                <p>Temperature: {data.main.temp}°F</p>
                                <p>Feels like: {data.main.feels_like}</p>
                                <p>Condition: {data.weather[0].description}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default WeatherCardList;
