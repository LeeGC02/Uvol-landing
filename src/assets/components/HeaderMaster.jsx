//import React from 'react'
import { Link } from 'react-router-dom'; // Importa Link
import './HeaderMaster.css';

const HeaderMaster = () => {
  return (
    <header className='header-container'>
      <div className="img-title-container">
        <img className='img-uvol' src="/uvol logo.jpg" alt="logo uvol" />
        <span className='title-header'>Uvol SRL</span>
      </div>
      <div className="ref-container">
        <a className='ref-span' href="/">Inicio</a>
        <a className='ref-span' href="/aboutus">Quienes Somos</a>
        <a className='ref-span' href="/services">Nuestros Servicios</a>
      </div>
      <button className='btn-contact'>Contacta con Nosotros</button>
    </header>
  )
}

export default HeaderMaster
