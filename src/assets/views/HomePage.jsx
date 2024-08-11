// import React from 'react'
import './HomePage.css';
import HeaderMaster from '../components/HeaderMaster';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div className="a">
      <HeaderMaster/>
      <div className='homepage-container'>
        <div className="textbox-container">
          <div className="text-content">
              <h3>Titulo</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro ipsa neque illo nesciunt maiores nisi unde eum nam? Laudantium doloribus et voluptates harum fugit cum labore temporibus vitae ex.</p>
          </div>
          <img className='img-tipo' src="/tipo.png" alt="tipo" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
