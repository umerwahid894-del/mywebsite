import React from 'react'
import SocialBar from '../components/HomeCom/SocialBar'
import Navbar from '../components/HomeCom/Navbar'
import Videos from '../components/GalleryCom/Videos'
import Picture from '../components/GalleryCom/Picture'
import Footer from '../components/HomeCom/Footer'

const Gallery = () => {
  return (
    <div>
      <SocialBar/>
      <Navbar/>
      <Videos/>
      <Picture/>
      <Footer/>
    </div>
  )
}

export default Gallery