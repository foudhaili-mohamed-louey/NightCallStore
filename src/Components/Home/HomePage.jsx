import React from 'react'
import Nav from './Navigation/Navbar.jsx';
import Annoucement from './Annoucement/Annoucement.jsx';
import Categories from './Categories/categories.jsx';
import Footer from './footer/footer.jsx';
const HomePage = () => {
  return (
    <>
      <Annoucement />
      <Categories />
      <Footer />
    </>
  )
}

export default HomePage
