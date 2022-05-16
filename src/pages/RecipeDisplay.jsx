import React, {useState, useEffect} from "react";
import FoodDisplay from "./FoodDisplay";
import './Pantry.css';

export default function RecipeDisplay() {

  
  // const [recipeData, setRecipeData] = useState(null); //set to null default
  // 
  //   
  //   function getRecipeData() {
  // 
  // 
  //       const title = document.getElementById('title')
  //       const ingredients = 
  //        document.getElementById('ingredients')
  //       const nutrition = document.getElementById('nutrition')
  //       const prep = document.getElementById('prep')
  //       const time = document.getElementById('time')
  //       const error = document.getElementById('error')
  //     
  //       title.innerHTML = ""
  //       ingredients.innerHTML = ""
  //       nutrition.innerHTML = ""
  //       prep.innerHTML = ""
  //       time.innerHTML = ""
  //       document.getElementById('image').src = ""
  //       
  //      try{
  //        const url = "/api?ingredients=" + values
  //       const rawRes = await fetch(url)
  //       const rawResJSON = await rawRes.json()
  //     
  //         
  //         for (i = 0; i < rawResJSON.length; i++) {
  //           if (rawResJSON[i] != null) {
  //           
  //           title.innerHTML += `<div id="title-cont"> ${rawResJSON[i].title} </div>`
  //             
  //           time.innerHTML += `<div id="time-cont"> ${rawResJSON[i].time} </div>`
  //             
  //             
  //           for (x = 0; x < rawResJSON[i].nutrition.length; x++) {
  //             nutrition.innerHTML += `
  //               <div id="nutrition-cont">
  //               <ul><li>${rawResJSON[i].nutrition[x]}</li></ul>
  //               </div>
  //               `
  //             } 
  //             
  //       
  //           for (y = 0; y < rawResJSON[i].prep.length; y++) {
  //             prep.innerHTML += `
  //               <div id="prep-cont">
  //               <p>${rawResJSON[i].prep[y]}</p>
  //               </div>
  //               `
  //             }
  //       
  //       
  //             for (z = 0; z < rawResJSON[i].ingredients.length; z++) {
  //             ingredients.innerHTML += `
  //               <div id="nutrition-cont">
  //               <ul><li> ${rawResJSON[i].ingredients[z]} </li></ul>
  //               </div>
  //               `
  //             }
  //       
  //             document.getElementById('image').src = rawResJSON[i].img
  //           } 
  //       }
  //       }
  //       
  //       catch {
  //         console.log('err')
  //         error.innerText = "There are no recipies that fit your search"
  //       }
  //     
  //     }
  // 
	// }
  
  
return(
	<div>

			<div id="title">  </div>
		

		  <div id="time"></div>
		

		  <div id="nutrition"></div>
		

			<div id="ingredients"></div>
		

			<div id="prep"></div>
			

			<img id="image" src=""></img>
		
		

			<div id="error"></div>
		
	</div>
	)
  }



/////////////////COMPONENT

// <!-- Show recipes on modal -->
// <div id = "modal">
//   <div class = "modal-content">
// 
// 	<button id = "bttn" onclick = "closeModal()"> X </button>
// 	<button id = "butt" onclick = "saveRecipe()"> Save </button>
// <!--     Show recipe title -->
//   <p id="title"></p>
// 
//   <!--   Show time to make recipe -->
//   <p id="time"></p>
// 
// <!--   Show nutrition -->
//   <p id="nutrition"></p>
// 
// <!--     show recipe searches ingredients -->
//   <p id="ingredients"></p>
// 
// <!--   show preparation -->
//   <p id="prep"></p>
// 
// <!--     disp recipe image -->
//   <!-- <img id="image" src=""></p> -->
// 
//    </div>
// </div>

/////////////////COMPONENT