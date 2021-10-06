import axios from "axios";
import React from "react";
import "./forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "89af958e94e45825dea3a9c48c0fc2f8";
  let units = "metric";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">
            <strong>Sunday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">
              <strong>15°</strong>
            </span>
            <span className="forecast-temp-min">12°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Monday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">
              <strong>15°</strong>
            </span>
            <span className="forecast-temp-min">12°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Tuesday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">
              <strong>15°</strong>
            </span>
            <span className="forecast-temp-min">12°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Wednesday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">
              <strong>15°</strong>
            </span>
            <span className="forecast-temp-min">12°</span>
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Thursday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">
              <strong>15°</strong>
            </span>
            <span className="forecast-temp-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
