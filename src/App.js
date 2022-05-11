// import Pages from "./pages/Pages"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import Welcome from './pages/Welcome';
import MealPlanner from './pages/MealPlanner.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/MealList" element = {<MealPlanner />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;