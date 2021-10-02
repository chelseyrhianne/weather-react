import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather row">
        <div className="col-4">
          <img
            src={props.data.iconUrl}
            alt={props.data.desc}
            width="200"
            id="current-icon"
          />
        </div>
        <div className="col-4 headings">
          <h1 id="current-city">{props.data.city}</h1>
          <h2 id="current-desc">{props.data.desc}</h2>
          <h3>
            Last updated: <FormattedDate date={props.data.date} />
          </h3>
        </div>
        <div className="col-4 current-details">
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div>
            <span className="wind-speed">{Math.round(props.data.wind)}</span>
            <strong>km/h</strong> wind
          </div>
          <div>
            <span className="humidity">{Math.round(props.data.humidity)}</span>
            <strong>%</strong> humidity
          </div>
        </div>
      </div>
    </div>
  );
}
