import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Navbar'



const Recipe = () => {
   
    const [recipe, setRecipe] = useState([])
    let params = useParams()

    const getRecipe = async (name) => {
            const data = await fetch(`
            https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}
            `)
            const recipe = await data.json();
            setRecipe(recipe.results)
    } 

    useEffect(() =>{
        getRecipe(params.type)
        console.log(params.type)
    },[params.type])

  return (
    
  <Grid>
   
       {recipe.map((item) => {
         return(
          
           <Card key={item.id}>
             <img src={item.image} alt="" />
             <h4>{item.title}</h4>
           </Card>
         )
       })} 
        
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

const Card = styled.div`
img{
  width: 100%;
  border-radius: 2rem;
}
a{
  text-decoration: none;
}
h4 {
  text-align: center;
  padding: 1rem;
}
`
export default Recipe