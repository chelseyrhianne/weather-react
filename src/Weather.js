import React, { useState } from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      desc: response.data.weather[0].description,
      iconUrl: `./icons/${response.data.weather[0].icon}.svg`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather row">
        <div className="col-4">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.desc}
            width="200"
            id="current-icon"
          />
        </div>
        <div className="col-4 headings">
          <h1 id="current-city">{weatherData.city}</h1>
          <h2 id="current-desc">{weatherData.desc}</h2>
          <h3>
            Last updated: <FormattedDate date={weatherData.date} />
          </h3>
        </div>
        <div className="col-4 current-details">
          <div>
            <span className="current-temp">
              {Math.round(weatherData.temperature)}°c
            </span>
          </div>
          <div>
            <span className="wind-speed">{Math.round(weatherData.wind)}</span>
            <strong>km/h</strong> wind
          </div>
          <div>
            <span className="humidity">{Math.round(weatherData.humidity)}</span>
            <strong>%</strong> humidity
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "89af958e94e45825dea3a9c48c0fc2f8";
    let city = props.defaultCity;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
