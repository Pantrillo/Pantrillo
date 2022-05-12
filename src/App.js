import {BrowserRouter, Routes, Route} from "react-router-dom";

import LogIn from './pages/LogIn';
import Welcome from './pages/Welcome';
import './App.css'



function App() {
  return (

   

      
        

    <BrowserRouter>
      <Routes>
        

        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/login" element = {<LogIn />} />
        

        
      </Routes>
    </BrowserRouter>


  )
}

export default App;