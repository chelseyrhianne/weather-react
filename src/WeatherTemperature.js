import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature current-temp">
      {Math.round(props.celsius)}
      <span className="unit">°C</span>
    </span>
  );
}
