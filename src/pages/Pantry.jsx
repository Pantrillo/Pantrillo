import React, {useState} from "react";
import Nav from '../pages/index.js';
import FoodDisplay from "./FoodDisplay";

function Pantry() {
  
  return(
    <div>
      <Nav />
    <div className="App">
      <section className="cont">
        <h1>Whats in Your Pantry?</h1>
        <FoodDisplay />
      </section>
    </div>
    </div>
  )
}

export default Pantry;
