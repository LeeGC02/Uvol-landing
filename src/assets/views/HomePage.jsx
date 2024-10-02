// import React from 'react'
import './HomePage.css';
import HeaderMaster from '../components/HeaderMaster';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="a">
      <div className='homepage-container'>
        <div className="textbox-container">
          <div className="text-content">
            <br />
              <h3 className='U-text'>UVOL</h3>
              <br />
              <p className='H-text'>Somos una empresa dedicada a la creación de soluciones tecnológicas innovadoras que abordan diversas necesidades del mercado. Fundada en 2024, la empresa se ha comprometido a desarrollar aplicaciones y plataformas que faciliten la gestión y optimización de procesos en diferentes sectores.</p>
              <br />
              <button className='btn-contact' onClick={() => navigate('/services')}>Contacta con Nosotros</button>
          </div>
          <img className='img-tipo' src="/tipo.png" alt="tipo" />
        </div>
      </div>

      <div className='lastProject-container'>
        <div className='textP-container'>
          
        </div>
      </div>

      <div className='acronimo-container'>
        <div className='textA-container'>
          <div className='textAcron-content'>
            <p className='acron-title'>SOMOS UVOL</p>
            <p className='U-text'>UNIVERSAL</p>
            <p>Representa nuestro compromiso de crear soluciones que sean versátiles y aplicables en diversos contextos y sectores. Queremos que nuestras tecnologías puedan ser utilizadas en una amplia gama de aplicaciones para resolver diferentes desafíos.</p>
            <p className='VOL-text'>E<span className='highlight'>VOL</span>UTION</p>
            <p> En UVOL, nos comprometemos a innovar y a mejorar continuamente nuestras soluciones para mantenernos a la vanguardia de la tecnología. Buscamos adaptarnos a los cambios del mercado y a las nuevas necesidades de nuestros clientes, promoviendo un crecimiento y desarrollo continuo.</p>
          </div>
        </div>
      </div>

      <div className='teamdev-container '>

        <div className='leader-container'>
          <div className='textsup-container'>
            <p>EQUIPO DE DESARROLLO</p>
          </div>
          <img className='img-leader' src="/astronauta.gif" alt="leader" />
          <div className='textinf-container'>
            <p className='leader'>Lider de Proyecto</p>
            <p className='detalles'>Responsable de planificar, ejecutar y cerrar proyectos de manera efectiva y eficiente. Actúa como el punto de contacto principal entre el equipo del proyecto y la parte interesada.</p>
          </div>  
        </div>

        <div className='team-container'>
          <div className='team-card1'>
          <img className='img-UX' src="/UX.gif" alt="UX" />
          <p className='ux-ui'>Diseñador UX-UI</p>
          <p className='detalles'>Se enfoca en cómo los usuarios interactúan con un producto digital, asegurando que la experiencia sea intuitiva, eficiente y agradable. Investiga y analiza el comportamiento de los usuarios para crear wireframes, prototipos y mapas de flujo que mejoren la usabilidad del sitio o aplicación.</p>
          </div>

          <div className='team-card1'>
          <img className='img-DEV1' src="/frontend.gif" alt="DEV1" />
          <p className='dev1'>Front Web</p>
          <p className='detalles'>Se especializa en el desarrollo de la parte visible y con la que interactúan los usuarios de un sitio web o aplicación. Utiliza tecnologías como HTML, CSS, y JavaScript para construir interfaces responsivas, accesibles y atractivas, asegurando que el diseño se traduzca correctamente en todos los dispositivos y navegadores.</p>
          </div>

          <div className='team-card1'>
          <img className='img-DEV2' src="/fullstack.gif" alt="DEV2" />
          <p className='dev2'>Full Stack</p>
          <p className='detalles'>Es un profesional versátil que domina tanto el desarrollo frontend como el backend. Es capaz de diseñar, construir y mantener la arquitectura completa de una aplicación, desde la base de datos y la lógica del servidor hasta la interfaz de usuario. Maneja tecnologías y lenguajes de programación para crear soluciones integrales que sean eficientes, escalables y seguras.</p>
          </div>
        </div>

      </div>
      <Footer/>

    </div>
  )
}

export default HomePage
