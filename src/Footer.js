import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        className="contact"
        href="https://github.com/chelseyrhianne/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        className="contact"
        href="https://www.linkedin.com/in/chelsey-watson-7ab824177"
        target="_blank"
        rel="noreferrer"
      >
        Chelsey Watson
      </a>
    </div>
  );
}
