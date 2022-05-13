import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './welcome.css';
import FoodJoke from '../components/FoodJoke';
import Footer from '../components/Footer/Footer.jsx';
{/* youll return html, run JS above */}

function Welcome () {
	let name = localStorage.getItem("mytime")

	{/* JS end */}
	return (
		<div>
				{/* HTML start here */}
		<Sidebar />
		<Navbar />
			


		<div id = "welc-hero">
			<h1>Welcome!</h1>
			<h2> {name} </h2>
	
			<a class="welcome-btn" href="#down">About us</a>
			<a class="welcome-btn" href="#bottom">Who we are</a>
		</div>			{/* joke -*/}
		
		<div className = "TitleJok">
			<FoodJoke />
		</div>
	
		<div id="about">
			<h2>About Pantrillo</h2>
			<section>
				<p>Pantrillo started in early 2022 after the three founders, Pierce, Isabelle and Karl, met in an intensive college course where many conversations circled around how difficult it became to sit and eat dinner after the classes were all done. </p> <p> Whether the struggle came from not having the time to shop or energy to cook, we all realized it was an issue for almost everyone in the course. With that realization, the founders set out to help the busy-bodies, like them, all around the world with the hope of ensuring a healthy and easy meal for everybody. </p>
			</section>
		</div>
		
			<hr />
		
		<div className = "bio">
	
			<h3> Pierce </h3>
	
			<h3> Isabelle </h3>
	
			<h3> Karl </h3>
	
		</div>
		<hr />
	
		<Footer />

	</div>
	)
}

export default Welcome