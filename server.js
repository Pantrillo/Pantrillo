const express = require('express')
const app = express()  //create new express app
const port = 3000;  //using designated port number on front end to access back end

const {MongoClient} = require('mongodb')  //create a new mongoDB client
const url = "mongodb+srv://krshinn:pickspicks@cluster0.oam60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)

app.use(express.static('public'))  //allows you to pass json data from front end to back end
app.use(express.urlencoded({extended:true})) //allows you to access req.body


//function to verify log-in data
app.get('/api', (req,res) => {

  let ingredients = req.query.ingredients.split(',') //variable to search by
  

  async function postRecipe() {
  await client.connect()
  const collection = client.db('test_db').collection('test_recipe')
  
  let findIngredients = await collection.find(
  { searchedIngredients: { $all: ingredients } } ).toArray()

  await client.close()
	if (findIngredients !== null) {
	  console.log(findIngredients)
	  res.send(findIngredients)
	} else {
	  console.log('error')
	  res.sendStatus(400)
	}
  }
  postRecipe()
})

app.listen(port)