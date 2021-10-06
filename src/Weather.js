import React, { useState } from "react";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
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
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiKey = "89af958e94e45825dea3a9c48c0fc2f8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="city-search" onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            className="search-bar"
            autoComplete="off"
            placeholder="Search for a city"
            onChange={handleCityChange}
          />
          <input type="submit" className="search-button select go" value="Go" />
        </form>
        <form className="current-loc">
          {" "}
          <input
            type="submit"
            className="current-loc select"
            value="Use current location"
          />
        </form>
        <hr />
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
