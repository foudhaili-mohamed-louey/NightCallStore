import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import './footer.css'
const footer = () => {
  return (
    <div className='footer-container'>
      <ul className='icons'>
        <li className='icon-facebook'><RiFacebookCircleLine /></li>
        <li className='icon-insta'><FiInstagram /></li>
        <li className='icon-x'><RiTwitterXLine/></li>
        <li className='icon-whatsup'><IoLogoWhatsapp/></li>
        
      </ul>
        <p>&copy; 2024 Foudhaili Mohamed Louey. All Rights Reserved. | Designed with 💻 and ❤️</p>
    </div>
  )
}

export default footer
