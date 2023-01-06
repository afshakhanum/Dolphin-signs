import React from 'react'
import './Footer.css'
import WhatsApp from '../Images/WhatsApp.png'
import Instagram from '../Images/InstagramLogo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='social-media'>
        <h5>Follow us on</h5>
        <img className='footer-social' src={WhatsApp} alt="whatsapp" />
        <img className='footer-social' src={Instagram} alt="whatsapp" />
      </div>
      <div className='contact-us'>
        <h5>Contact Us</h5>
        <p>9876543210</p>
        <p>dolphinsigns@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer