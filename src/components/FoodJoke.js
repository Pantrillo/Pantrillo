import React, {useState, useEffect} from 'react';

function FoodJoke({data}) {
	const [resultMsg, setResultMsg] = useState("Loading joke...");
	
	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/food/jokes/random?apiKey=b365a722796f4714ade3978021c8ba93`
		)
		.then((response) => response.json())
		.then((data) => {
			if(data.text.length < 150) {
				setResultMsg(data.text);
			}
			else {
				fetch(
					`https://api.spoonacular.com/food/jokes/random?apiKey=b365a722796f4714ade3978021c8ba93`
				)
				.then((response) => response.json())
				.then((data) => {
				setResultMsg(data.text);
				console.log(data.text)
		})
	}

		})
		.catch(() => {
			console.log("error");
		})
	}, [])
	
	return(
		<span class="joke">
			<p>{resultMsg}</p>
		</span>
	)
}

export default FoodJoke