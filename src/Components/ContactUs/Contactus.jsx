import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Home/Navigation/Navbar';
import Footer from '../Home/footer/footer.jsx'; // Use the correct relative path
import './Contactus.css';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lf6riov', 'template_vbtpm6c', form.current, 'oS8eHqHMxGUKoIcx0')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
    
      <form ref={form} onSubmit={sendEmail} className='contact-us-form-style'>
        <h1 className='Main-title'>Contact Us</h1>
        <label className='little-titles-style'>Name</label>
        <input type="text" name="user_name" />
        <label className='little-titles-style'>Email</label>
        <input type="email" name="user_email" />
        <label className='little-titles-style'>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <Footer />
    </div>
  );
};

export default Contactus;
