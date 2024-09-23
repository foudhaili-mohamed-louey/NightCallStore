import React from 'react';
import './Navbar.css';
import logo from './gamingstorelogo.png';
import search_icon from './search-b.png';

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <div className='navigation-style'>
        <img src={logo} alt="gaming store" className='logo-style' />
        <div className='Search-bar'>
          <input type='text' placeholder='Search...' className='text-bar-style' />
          <img src={search_icon} alt="gaming store" className='icon-search-style' />
        </div>
        <ul>
          <li className='element-style' onClick={() => handlePageChange('Home')}>Home</li>
          <li className='element-style' onClick={() => handlePageChange('About')}>About US</li> 
          <li className='element-style' onClick={() => handlePageChange('Contact')}>Contact US</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
