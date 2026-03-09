/** @format */

import React, { useState } from "react";
import planets from "./planetdata";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const nextPlanet = () => {
    setIndex((index + 1) % planets.length);
  };

  const prevPlanet = () => {
    setIndex((index - 1 + planets.length) % planets.length);
  };

  const planet = planets[index];

  return (
    <div className='container'>
      <h1>🌌 Solar System</h1>

      <div className='viewer'>
        <button onClick={prevPlanet} className='nav'>
          ⬅
        </button>

        <div className='planet-box'>
          <img src={planet.image} alt={planet.name} />

          <h2>{planet.name}</h2>

          <p>{planet.info}</p>
        </div>

        <button onClick={nextPlanet} className='nav'>
          ➡
        </button>
      </div>
    </div>
  );
}

export default App;
