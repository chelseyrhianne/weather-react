import React from "react";
import "./forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <p className="forecast-word">forecast</p>
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">
            <strong>Sunday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <strong>14°</strong>
          </div>
          <div className="forecast-min-max">13°/15°</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Monday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <strong>14°</strong>
          </div>
          <div className="forecast-min-max">13°/15°</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Tuesday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <strong>14°</strong>
          </div>
          <div className="forecast-min-max">13°/15°</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Wednesday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <strong>14°</strong>
          </div>
          <div className="forecast-min-max">13°/15°</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">
            <strong>Thursday</strong>
          </div>
          <img src="./icons/03d.svg" alt="" width="72" />
          <div className="forecast-temp">
            <strong>14°</strong>
          </div>
          <div className="forecast-min-max">13°/15°</div>
        </div>
      </div>
    </div>
  );
}
