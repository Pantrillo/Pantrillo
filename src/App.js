import {BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import Welcome from "./pages/Welcome";
import Sidebar from "./components/Sidebar";

function App() {
  return (
   
      <Router>
        {/* <Route path = "/" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/login" element = {<LogIn />} />
        <Route path = "/home" element = {<Home />} /> */}

        <Home />
      </Router>
    

  )
}

export default App;