//import React from 'react'
import './AboutPage.css';
const AboutPage = () => {
  return (
    <div className="about-container">

      <div className="block alternate">
        <div className="text-container">
          <h2>Misión</h2>
          <p>Desarrollar soluciones tecnológicas que mejoren la eficiencia y efectividad de diversas industrias, facilitando la gestión de procesos y promoviendo la innovación continua.</p>
        </div>
        <div className="image-container">
          <img src="/Mision.jpeg" alt="Misión" />
        </div>
      </div>

      <div className="block">
        <div className="image-container">
          <img src="/Vision.jpeg" alt="Visión" />
        </div>
        <div className="text-container">
          <h2>Visión</h2>
          <p>Ser una empresa líder en el desarrollo de tecnología innovadora, reconocida por su capacidad para transformar procesos y contribuir al progreso sostenible de diferentes sectores.</p>
        </div>
      </div>

      <div className="block alternate">
        <div className="text-container">
          <h2>Quiénes Somos</h2>
          <p>UVOL, fundada en 2024, es una empresa dedicada a la creación de soluciones tecnológicas innovadoras que satisfacen las diversas necesidades del mercado. Nos comprometemos a desarrollar aplicaciones y plataformas que optimizan procesos en múltiples sectores, aportando valor a nuestros clientes.</p>
        </div>
        <div className="image-container">
          <img src="/UVOL.jpeg" alt="Quiénes Somos" />
        </div>
      </div>

      <div className="team-section">
        <h2>Equipo de UVOL</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/astronauta.gif" alt="Líder 1" />
            <h3>Romay Torrejon Josue Andres</h3>
            <p>Líder del Proyecto</p>
          </div>
          <div className="team-card">
            <img src="/backend.gif" alt="Líder 2" />
            <h3>Gonzales Cordova Janna Lia</h3>
            <p>Desarrolladora FullStack</p>
          </div>
          <div className="team-card">
            <img src="/UI.gif" alt="Líder 3" />
            <h3>Bilbao Yujra Bryan Nelson</h3>
            <p>Diseñador UI-UX</p>
          </div>
          <div className="team-card">
            <img src="/soporte.gif" alt="Líder 4" />
            <h3>Bautista Poma Walter Abdon</h3>
            <p>Secretario</p>
          </div>
        </div>
      </div>

      <div className="featured-project">
        <h2>VOLUNTARIAPP</h2>
        <div className="project-content">
          <img src="/VoluntariApp.jpeg" alt="Proyecto Destacado" />
          <div className="project-text">
            <p>Uno de los proyectos más recientes y significativos de UVOL es una plataforma integral diseñada para mejorar la gestión y participación en actividades comunitarias. Esta aplicación móvil ofrece una interfaz amigable y funcionalidades avanzadas, permitiendo una gestión eficiente y la generación de informes detallados.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutPage
