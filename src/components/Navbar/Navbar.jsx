import React from "react";

function Navbar() {

return(
  
    <header class="header" id="header">
      <nav class="navbar container">
        <a href="./index.html">
          <h2 class="logo">Pantrillo</h2>
        </a>
          <div class="menu" id="menu">
        <ul class="list">
          <li class="list-item">
            <a href="#" class="list-link current">Home</a>
          </li>
          <li class="list-item">
            <a href="/welcome" class="list-link">About</a>
          </li>
          <li class="list-item">
            <a href="#" class="list-link">Ing</a>
          </li>
          <li class="list-item">
                  <a href="#" class="list-link">Meal Planner</a>
          </li>
          <li class="list-item">
                  <a href="#" class="list-link">Pre-made recipes</a>
          </li>
          <li class="list-item screen-lg-hidden">
                  <a href="#" class="list-link">Sign in</a>
          </li>
          <li class="list-item screen-lg-hidden">
                  <a href="#" class="list-link">Sign up</a>
          </li>
        </ul>
          </div>
          <div class ="list list-right">
            <button class="btn place-items-center" id="theme-toggle-btn">
              <i class="ri-sun-line sun-icon"></i>  
              <i class="ri-moon-line moon-icon"></i> 
            </button>
    
    
    
            
    <button class="btn place-items-center" id="search-icon">
      <i class="ri-search-line"></i>
    </button>
      
    <button class="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
      <i class="ri-menu-3-line open-menu-icon"></i>  
      <i class="ri-close-line close-menu-icon"></i>  
    </button>
      <a href="#" class="list-link screen-sm-hidden">Sign in</a>
      <a href="#" class="list-link screen-sm-hidden sign-up-btn fancy-border">
    <span>sign in</span>
    </a>
          </div>
        </nav>
    </header>  
    
)
}





















  export default Navbar