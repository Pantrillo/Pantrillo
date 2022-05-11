import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Popular from '../components/Popular'
import Welcome from './Welcome'
import FoodJoke from '../components/FoodJoke'



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Popular />
        <Welcome />
        <FoodJoke />
        
    </>
  )
}

export default Home