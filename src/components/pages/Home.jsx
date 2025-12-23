import React from 'react'
import CardSection from "../Home/CardSection"
import About from '../Home/about'
import Product from '../Home/Product'
import Contact from '../Home/contact'

const HomePage = () => {
  return (
    <div>
      <CardSection/>
      <About/>
      <Product/>
      <Contact/>
    </div>
  )
}

export default HomePage
