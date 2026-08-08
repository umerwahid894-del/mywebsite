import React from 'react'
import Navbar from '../components/HomeCom/Navbar'
import AboutUs from '../components/AboutCom/AboutUs'
import Beliefs from '../components/AboutCom/Beliefs'
import Footer from '../components/HomeCom/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <Beliefs/>
      <Footer/>
    </div>
  )
}

export default About