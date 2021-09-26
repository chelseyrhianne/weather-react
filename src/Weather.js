import React from "react";
import "./weather.css";

export default function Weather() {
  let data = {
    city: "Auckland",
    desc: "Few clouds",
    day: "Saturday",
    time: "09:30",
    temp: 13,
    minTemp: 12,
    maxTemp: 14,
    wind: 2,
    humidity: 77,
    iconUrl: "./icons/02d.svg",
  };
  return (
    <div className="Weather row">
      <div className="col-4">
        <img src={data.iconUrl} alt={data.desc} width="200" id="current-icon" />
      </div>
      <div className="col-4 headings">
        <h1 id="current-city">{data.city}</h1>
        <h2 id="current-desc">{data.desc}</h2>
        <h3>
          Last updated: <span>{data.day}</span>, <span>{data.time}</span>
        </h3>
      </div>
      <div class="col-4 current-details">
        <div>
          <span className="current-temp">{data.temp}°c</span>{" "}
          <span>
            {data.minTemp}° / {data.maxTemp}°
          </span>
        </div>
        <div>
          <span className="wind-speed">{data.wind}</span>
          <strong>km/h</strong> wind
        </div>
        <div>
          <span className="humidity">{data.humidity}</span>
          <strong>%</strong> humidity
        </div>
      </div>
    </div>
  );
}
