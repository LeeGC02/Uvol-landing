//import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="copy-img">
        <div className="img-title-container">
            <img className='img-uvol' src="/uvol logo.jpg" alt="logo uvol" />
            <span className='title-footer'>Uvol SRL</span>
        </div>
        <span className='copyright-span'>Copyright © 2024 Uvol SRL.</span>
      </div>
      <div className="social-net-container">
        <a className='network-a' href="#facebook">Facebook</a>
        <a className='network-a' href="#instagram">Instagram</a>
        <a className='network-a' href="#twitter">Twitter</a>
        <a className='network-a' href="#tiktok">TikTok</a>
        <a className='network-a' href="#youtube">YouTube</a>
      </div>   
    </footer>
  )
}

export default Footer
