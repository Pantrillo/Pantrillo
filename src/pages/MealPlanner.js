import React, {useState} from "react";
import MealList from "./MealList";
// import FoodJoke from "./FoodJoke";
import './MealPlanner.css';

function MealPlanner() {
  const [mealData, setMealData] = useState(null); //set to null default
  const [calories, setCalories] = useState(2000); //set to 2000 default

  function handleChange(event) {
    setCalories(event.target.value); //function listens for event to set calories
  }
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=dc278d39f926447f9f01c6c2a958f3be&timeFrame=day&targetCalories=${calories}`
    ) //search meal plan by day and passing in state of calories
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data)
    })
    .catch(() => {
      console.log("error")
    });
  }
  return (
    <div className="App">
// why named App?
      <section className="controls">
        <input type="number"
        placeholder="Calories (e.g. 2000)"
        onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}

    </div>
  );
}

export default MealPlanner;
