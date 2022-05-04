import { useEffect, useState } from 'react'


function Popular() {

  const [popular, setPopular] = useState([])  //create variable, function to modify, useState to define what kind of data you have
  
  useEffect(() => {
  getPopular()      


  },[]);
    

  const getPopular = async () => { //wait for data before you render anything out
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);
    const data = await api.json()
    setPopular(data.recipes)
  }
return <div>

  {popular.map((recipe) => {  //get all data from array/ map over it
    return(
       <div key={recipe.id}>
         <p>{recipe.title}</p>  
       </div>           // looping over each recipe and outputting something here
    )
  })} 
  
</div>
  
}

export default Popular