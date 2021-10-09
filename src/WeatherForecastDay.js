import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">
        <strong>{day()}</strong>
      </div>
      <img
        src={`./icons/${props.data.weather[0].icon}.svg`}
        alt=""
        width="72"
      />
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          <strong>{maxTemperature()}</strong>
        </span>
        <span className="forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
