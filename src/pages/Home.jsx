import React from 'react'
import Navbar from '../components/HomeCom/Navbar'
import Hero from '../components/HomeCom/Hero'
import WhoWe from '../components/HomeCom/WhoWe'
import OurVMO from '../components/HomeCom/OurVMO'
import FeatureCourse from '../components/HomeCom/FeatureCourse'
import Stars from '../components/HomeCom/Stars'
import FAQs from '../components/HomeCom/FAQs'
import Footer from '../components/HomeCom/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoWe/>
      <OurVMO/>
      <FeatureCourse/>
      <Stars/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default Home