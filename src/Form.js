import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="Form">
      <form className="city-search">
        <input
          id="city-name"
          type="text"
          className="search-bar"
          autoComplete="off"
          placeholder="Search for a city"
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
    </div>
  );
}
