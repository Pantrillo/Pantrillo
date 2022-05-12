// import Pages from "./pages/Pages"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import Welcome from './pages/Welcome';
import MealPlanner from './pages/MealPlanner';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/mealplanner" element = {<MealPlanner />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;