//import React from 'react'
import { Link } from 'react-router-dom'; // Importa Link
import React, { useEffect } from 'react';
import './HeaderMaster.css';
import { useNavigate } from 'react-router-dom';

const HeaderMaster = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const header = document.querySelector('.header-container');
    setTimeout(() => {
      header.classList.add('show');
    }, 100);
  }, []);
  return (
    <header className='header-container'>
      <div className="img-title-container">
        <a className="ok" href="/">
          <img className='img-uvol' src="/uvol logo.jpg" alt="logo uvol" />
          <span className='title-header'>Uvol SRL</span>
        </a>
      </div>
      <div className="ref-container">
        <a className='ref-span' href="/">Inicio</a>
        <a className='ref-span' href="/aboutus">Quienes Somos</a>
        <a className='ref-span' href="/services">Nuestros Servicios</a>
      </div>
      <button className='btn-contact' onClick={() => navigate('/services')}>Contacta con Nosotros</button>
    </header>
  )
}

export default HeaderMaster;
