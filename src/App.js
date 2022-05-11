import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/Navbar'
import './App.css'
import Welcome from "./pages/Welcome";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"

function App() {
  return (
   
      <Router>
        {/* <Route path = "/" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/login" element = {<LogIn />} />
        <Route path = "/home" element = {<Home />} /> */}
        <Navbar />
        <Sidebar />
        <Welcome />
        <Home />
      </Router>
    

  )
}

export default App;