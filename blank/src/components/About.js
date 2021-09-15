import "../App.css";
import React from "react";

function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <h2 className="about-me">
        <div>Data is sourced from IEX cloud</div>
        <br />
        <div>Dimitri Lafleur</div>
      </h2>
    </div>
  );
}

export default About;
