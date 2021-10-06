import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Auckland" />
        <Footer />
      </div>
    </div>
  );
}
