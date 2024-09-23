import { useState } from 'react';
import './App.css'; 
import HomePage from './Components/Home/HomePage.jsx';
import Contactus from './Components/ContactUs/Contactus.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Nav from './Components/Home/Navigation/Navbar.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Fixed prop casing */}
      
      {currentPage === 'Home' && <HomePage />}
      {currentPage === 'About' && <AboutUs />}
      {currentPage === 'Contact' && <Contactus />}
    </>
  );
}

export default App;
