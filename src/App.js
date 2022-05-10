// import Pages from "./pages/Pages"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import Welcome from './pages/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/LogIn" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;