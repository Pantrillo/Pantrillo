import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Search from '../components/Search'
import { Link as LinkRouter } from 'react-router-dom'

function Searched() {
    
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    const getSearched = async (name) => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}
        `)
        const recipe = await data.json();
        setSearchedRecipes(recipe.results)
} 

useEffect(() => {
    getSearched(params.search)

},[params.search])


  return <Grid>
    <h1>Search</h1>
   <Search />
   <BackButton to="/Welcome">
					Back
				</BackButton>
      {searchedRecipes.map((item) => {
          return(
              <Card key={item.id}>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
              </Card>
          )
      })}
      </Grid>
}

const BackButton = styled(LinkRouter)`
color: black;
text-decoration: none;
background: #fff;
border-radius: 50px;
width: 50%;
justify-content: center;
padding: 20px;
margin: 15px;
height: 25px;

&:hover{
  color: white;
  background: #008ed7;
  transition: all .25s ease-in-out;
}
`

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

export default Searched
