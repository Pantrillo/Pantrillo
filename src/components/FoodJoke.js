import React, {useState, useEffect} from 'react';


function FoodJoke({data}) {
	const [resultMsg, setResultMsg] = useState("Loading joke...");

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/food/jokes/random?apiKey=ec5faeee615c49b4a1af0ecb0c89bc0a`
		)
		.then((response) => response.json())
		.then((data) => {
			if(data.text.length < 125) {
				setResultMsg(data.text);
			}
			else {
				fetch(
					`https://api.spoonacular.com/food/jokes/random?apiKey=ec5faeee615c49b4a1af0ecb0c89bc0a`
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
		<span className="joke">
			<p>{resultMsg}</p>
		</span>
	)
}

export default FoodJoke