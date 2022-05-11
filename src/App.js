// import Pages from "./pages/Pages"
import {BrowserRouter as Router} from "react-router-dom";
import LogIn from './pages/LogIn';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import './App.css'


function App() {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App;
