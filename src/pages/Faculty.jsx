import React from 'react'
import SocialBar from '../components/HomeCom/SocialBar'
import Navbar from '../components/HomeCom/Navbar'
import FacultyHero from '../components/FacultyCom/FacultyHero'
import BoardOfDirector from '../components/FacultyCom/BoardOfDirector'
import Faculties from '../components/FacultyCom/Faculties'
import Footer from '../components/HomeCom/Footer'

const Faculty = () => {
  return (
    <div>
      <SocialBar/>
      <Navbar/>
      <FacultyHero/>
      <BoardOfDirector/>
      <Faculties/>
      <Footer/>
    </div>
  )
}

export default Faculty