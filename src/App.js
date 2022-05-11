
import {BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home'

import './App.css'
import Welcome from "./pages/Welcome";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Welcome />
      <Home />
      
    </Router>
  )
}

export default App;