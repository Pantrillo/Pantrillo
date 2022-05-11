import {BrowserRouter as Router} from "react-router-dom";
import Home from './pages'

import './App.css'




function App() {
  return (
   
      <Router>
        {/* <Route path = "/" element = {<LogIn />} />
        <Route path = "/welcome" element = {<Welcome />} />
        <Route path = "/login" element = {<LogIn />} />
        <Route path = "/home" element = {<Home />} /> */}
       <Home/>
        
        
        
      </Router>
    

  )
}

export default App;