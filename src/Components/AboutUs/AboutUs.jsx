import React from 'react'
import './AboutUs.css'
import Nav from '../Home/Navigation/Navbar'
import Footer from '../Home/footer/footer.jsx'

const AboutUs = () => {
  return (
    <>
    
        <div className='about-us-container'>
        <h1 className='aboutus-title-style'>About Us</h1><br/>
        <h6 className='description-style'>Welcome to our website, your ultimate destination for online gaming and digital gift cards! 
            We are passionate gamers and tech enthusiasts dedicated to providing a seamless shopping experience for fellow players. 
            Whether you're looking for the latest games, exclusive content, or digital gift cards for platforms like Steam, PlayStation, 
            or Xbox, our website has you covered. Our mission is to deliver fast, secure, and reliable access to all the gaming essentials 
            you need. At our website, we believe in empowering gamers to level up their experience with ease and convenience. 
            Join us and explore a world of endless gaming possibilities!</h6>
        </div>
        <Footer />
    </>
  )
}

export default AboutUs
