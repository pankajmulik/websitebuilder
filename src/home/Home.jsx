import React from 'react'
import Navbar from '../navbar/Navbar'
import  './Home.scss'
import Title from '../component/Title'
import Product from '../products/Product'
import RelatedProducts from '../relateddeals/RelatedProducts'
import Signup from '../signup/Signup'
import FooterSection from '../footer/Footersection'
const Home = () => {
  return (
      <div id='Home'>
          <div id="home-nav" >
              
        <Navbar />
        
        <Title />
        
        <Product />
        
        <RelatedProducts/>
        <Signup />
        
        
        <FooterSection/>
          </div>


    </div>
  )
}

export default Home