import Navbar from '../components/Navbar/Navbar.jsx';
import './welcome.css';
import {useEffect} from 'react';
import FoodJoke from '../components/FoodJoke';
import Footer from '../components/Footer.jsx';
import LogIn from './LogIn'

{/* youll return html, run JS above */}

function Welcome () {

	let name = localStorage.getItem("mytime")

	{/* JS end */}
	return (
		<div>
			<Navbar />
				{/* HTML start here */}

				<h1>Welcome!</h1>
						<h2> {name} </h2>
					{/*
						<p>
							Things to keep in mind when meal planning
						</p>

						<ul>
						  <li> It's recommended to drink (on average) 13.5 cups of water in a day </li>
						  <li>Not all carbs are bad! 😁 Choose good ones instead of avoiding them entirely. </li>
						  <li>Fruits and veggies are recommended to be half of the average diet 🥬!</li>
						  <li>Whole grains count for a fourth of the average diet 🧇.</li>
						  <li> Remember! Low fat doesn't always equal healthy 😉. Use plant based oils in moderation. </li>
						  <li>Plan food prep in moderation, you deserve to eat fresh food 😁</li>
						</ul>
					<br /> */}
				{/* joke -*/}

					<FoodJoke />

				{/* Joke end  */}

				<section className = "accent-bg">
					<br />
						<h2>About Pantrillo</h2>
						<p>
							Pantrillo started in early 2022 after the three founders, Pierce, Isabelle and Karl, met in an intensive college course where many conversations circled around how difficult it became to sit and eat dinner after the classes were all done. </p> <p> Whether the struggle came from not having the time to shop or energy to cook, we all realized it was an issue for almost everyone in the course. With that realization, the founders set out to help the busy-bodies, like them, all around the world with the hope of ensuring a healthy and easy meal for everybody. </p>

				</section>
				<br />
				<br />


	<Footer />
				{/* HTML end here */}




		</div>
	)
}

export default Welcome