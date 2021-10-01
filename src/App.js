import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Weather defaultCity="Auckland" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
