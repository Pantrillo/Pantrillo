import React, {useState, useEffect} from 'react';
import './Pantry.css';


export default function Pantry() {
  //const [ingredientData, setIngredientData] = useState(""); //set to null default
  
  /* useEffect(() => {
		document.getElementById("pantry-btn").addEventListener("click", function() {
	  	document.getElementById("recipe-overlay").style.display= "block"
		})
  	
		document.getElementById("close-modal-pantry").addEventListener("click", function() {
	  	document.getElementById("recipe-overlay").style.display= "none"
		})
	}, []) */
  
	async function sendIngredients() {
	  
	  let values = []
	  let checkboxes = document.querySelectorAll('input:checked')
		
		checkboxes.forEach((checkbox) => { 
		values.push(checkbox.value)
		})
		
		values.join(',')
		console.log(values)
	  
	  
		  const title = document.getElementById('title')
		  const ingredients = 
		   document.getElementById('ingredients')
		  const nutrition = document.getElementById('nutrition')
		  const prep = document.getElementById('prep')
		  const time = document.getElementById('time')
		  const error = document.getElementById('error')
		
		  title.innerHTML = ""
		  ingredients.innerHTML = ""
		  nutrition.innerHTML = ""
		  prep.innerHTML = ""
		  time.innerHTML = ""
		  document.getElementById('image').src = ""
		  
		 try{
		   const url = "/api?ingredients=" + values
		   const rawRes = await fetch(url)
		   const rawResJSON = await rawRes.json()
		
			
			for (let i = 0; i < rawResJSON.length; i++) {
			  if (rawResJSON[i] != null) {
			  
			  title.innerHTML += `<div id="title-cont"> ${rawResJSON[i].title} </div>`
				
			  time.innerHTML += `<div id="time-cont"> ${rawResJSON[i].time} </div>`
				
				
			  for (let x = 0; x < rawResJSON[i].nutrition.length; x++) {
				nutrition.innerHTML += `
				  <div id="nutrition-cont">
				  <ul><li>${rawResJSON[i].nutrition[x]}</li></ul>
				  </div>
				  `
				} 
				
		  
			  for (let y = 0; y < rawResJSON[i].prep.length; y++) {
				prep.innerHTML += `
				  <div id="prep-cont">
				  <p>${rawResJSON[i].prep[y]}</p>
				  </div>
				  `
				}
		  
		  
				for (let z = 0; z < rawResJSON[i].ingredients.length; z++) {
				ingredients.innerHTML += `
				  <div id="nutrition-cont">
				  <ul><li> ${rawResJSON[i].ingredients[z]} </li></ul>
				  </div>
				  `
				}
		  
				document.getElementById('image').src = rawResJSON[i].img
			  } 
		  }
		  }
		  
		  catch {
			console.log('err')
			error.innerText = "There are no recipies that fit your search"
		  }
		
		}
	  
	
	return (
		<div>
			
		<form className="food-disp" action="/api" method="post">

				<h2>Protein:</h2>
				<div className = "pantry-wrapper">
				
					<div className="pantry-cont">
						  <input type="checkbox" id="chicken" alt="N/A" value="chicken"/>
						  <label htmlFor="chicken">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/chicken.png" />
						  </label>
					</div>

					<div className="pantry-cont">
					  <input type="checkbox" id="beef" alt="N/A" value="beef" />
					  <label htmlFor="beef">
					  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/beef.png" />
					  </label>
					</div>
				
					<div className="pantry-cont">

						  <input type="checkbox" id="fish" alt="N/A" value="fish" />
						<label htmlFor="fish">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/fish.png" />
						</label>
					</div>
					
					<div className="pantry-cont">

						  <input type="checkbox" id="eggs" alt="N/A" value="eggs"/>
						<label htmlFor="eggs">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/eggs.png" />
						</label>

					</div>
				</div>
			
			
			<h2>Vegetables:</h2>
				<div className = "pantry-wrapper">
					<div className="pantry-cont">
				 
						<input type="checkbox" id="scallions" alt="N/A" value="scallions"/>
						<label htmlFor="scallions">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/scallions.png" />
						</label>
					</div>

					 

					<div className="pantry-cont">
						<input type="checkbox" id="broccoli" alt="N/A" value="broccoli"/>
						<label htmlFor="broccoli">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/broccoli.png" />
						</label>
					</div>

				 

					<div className="pantry-cont">
						<input type="checkbox" id="carrots" alt="N/A" value="carrots"/>
						<label htmlFor="carrots">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/carrot.png" />
						</label>
					</div>

				

					<div className="pantry-cont">
						<input type="checkbox" id="onions" alt="N/A" value="onions"/>
						<label htmlFor="onions">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/onion.png" />
						</label>
					</div>

										  

					<div className="pantry-cont">
						 <input type="checkbox" id="mushrooms" alt="N/A" value="mushrooms"/>
						 <label htmlFor="mushrooms">
						 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/mushrooms.png" />
						 </label>
					</div>

										   

					<div className="pantry-cont">
						<input type="checkbox" id="bell-peppers" alt="N/A" value="bell-peppers"/>
						<label htmlFor="bell-peppers">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/bell-pepper.png" />
						</label>
					</div>
				</div>

			
				<h2>Starches:</h2>
				  
				<div className = "pantry-wrapper">
					<div className="pantry-cont">
					  
						<input type="checkbox" id="potatoes" alt="N/A" value="potatoes"/>
						<label htmlFor="potatoes">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/potato.png" />
						</label>
					</div>

					  
					<div className="pantry-cont">
						 <input type="checkbox" id="noodles" alt="N/A" value="noodles"/>
						 <label htmlFor="noodles">
						 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/noodle.png" />
						 </label>
					</div>
				  
					<div className="pantry-cont">
						 <input type="checkbox" id="rice" alt="N/A" value="rice"/>
						 <label htmlFor="rice">
						 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/rice.png" />
						 </label>
					</div>
				</div>

			  
			 
				   <h2>Fats:</h2>
				   
				<div className = "pantry-wrapper">
				   <div className="pantry-cont">
						  <input type="checkbox" id="butter" alt="N/A" value="butter"/>
						  <label htmlFor="butter">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/butter.png" />
						  </label>
					</div>
					   
					<div className="pantry-cont">
							 <input type="checkbox" id="cheese" alt="N/A" value="cheese"/>
							 <label htmlFor="cheese">
							 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/cheese.png" />
							 </label>
					</div>
					   
					<div className="pantry-cont">
						  <input type="checkbox" id="vegetable-oil" alt="N/A" value="vegetable-oil"/>
						  <label htmlFor="vegetable-oil">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/vegetable-oil1.png" />
						  </label>
					</div>

					   
					<div className="pantry-cont">
						  <input type="checkbox" id="olive-oil" alt="N/A" value="olive-oil"/>
						  <label htmlFor="olive-oil">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/olive.png" />
						  </label>
					   </div>
				</div>
				
			<button className="pantry-btn" onClick={sendIngredients}>Generate recipes </button>

		</form>
		
		
		
		<div className="recipe-cont">
			
		
			<div classname="recipe-head">
				  <div id="title"></div>
				<div id="time"></div>
			</div>
		
			<div className="recipe-img">
				  <img id="image" src=""></img>
				<div id="nutrition"></div>
			</div>
		
			<div className="recipe-prep">
				  <div id="ingredients"></div>
				  <div id="prep"></div>
			</div>
		
				<div id="error"></div>
		
		</div>

		
	</div>

	

)
}
