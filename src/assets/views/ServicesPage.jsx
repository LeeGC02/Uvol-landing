import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesPage.css';
import Footer from '../components/Footer';

const services = [
  {
    title: "Desarrollo de Plataformas Digitales",
    description: "Transformamos ideas en aplicaciones y plataformas digitales robustas y escalables.",
    details: "Desde la conceptualización hasta el lanzamiento, nuestro equipo de desarrolladores y diseñadores trabaja en estrecha colaboración para crear soluciones que optimicen procesos y mejoren la experiencia del usuario. Aplicaciones móviles y plataformas web.",
    image: "/App.jpg"
  },
  {
    title: "Ciberseguridad",
    description: "Servicios avanzados de ciberseguridad para proteger los datos y sistemas críticos de su organización.",
    details: "Identificamos y corregimos puntos débiles en sus sistemas antes de que puedan ser explotados. Monitoreo y gestión de amenazas en tiempo real.",
    image: "/Vulnerabildiad.webp"
  },
  {
    title: "Integración de Sistemas",
    description: "Facilitamos la integración de sistemas y aplicaciones para que su empresa funcione como una máquina bien engrasada.",
    details: "Nuestros servicios de integración garantizan que todas sus herramientas y plataformas trabajen en conjunto de manera eficiente. Conectamos sistemas de gestión de clientes y recursos empresariales para mejorar la eficiencia operativa y automatizamos tareas repetitivas.",
    image: "/erp-crm.webp"
  },
  {
    title: "Consultoría Tecnológica",
    description: "Asesoramiento estratégico para ayudar a su empresa a aprovechar las tecnologías emergentes y mantenerse competitiva en el mercado.",
    details: "Evaluamos sus necesidades tecnológicas y diseñamos soluciones a medida que se alineen con sus objetivos comerciales. Ayudamos a adoptar nuevas tecnologías y rediseñar procesos para adaptarse al entorno digital actual.",
    image: "/Consultoría tecnológica.webp"
  },
  {
    title: "Soporte y Mantenimiento",
    description: "Soporte técnico y mantenimiento continuo para asegurar que sus sistemas operen sin problemas y estén siempre actualizados.",
    details: "Nuestro equipo está disponible en todo momento para resolver cualquier problema técnico que pueda surgir. Nos aseguramos de que sus sistemas estén siempre en la última versión y funcionando de manera óptima.",
    image: "/soporte.gif"
  },
];

const ServicesPage = () => {
  return (
    <div className='a'>
      <div className='servicios-container'>
        <h1 className="servicios-title">Nuestros Servicios</h1>
        <p className="servicios-description">
          En UVOL, estamos comprometidos con la creación de soluciones tecnológicas innovadoras que ayudan a nuestros clientes a transformar sus negocios y adaptarse a un mundo digital en constante evolución. Ofrecemos una gama de servicios diseñados para satisfacer las necesidades únicas de cada organización.
        </p>

        <Accordion defaultActiveKey="0" className="servicios-accordion">
          {services.map((service, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{service.title}</Accordion.Header>
              <Accordion.Body>
                <div className="card-content">
                  <div className="card-text">
                    <p className="service-description">{service.description}</p>
                    <p>{service.details}</p>
                  </div>
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className='contact-container'>
        <div className='contact-divider'>

          <div className='pasos-container'>
            <p className='title_general'> ¿Necesitas algún servicio?</p>
            <p className='title2'> Nosotros podemos ayudarte!!!</p>

            <div className='imgtxt-container'>
              <img className='steps' src="/email.png" alt="steps" />
              <p className='ptxt'>1. Hablanos de tu idea</p>
            </div>

            <div className='imgtxt-container'>
            <img className='steps' src="/requeriments.png" alt="steps" />
              <p className='ptxt'>2. Definiremos tus requerimientos</p>
            </div>

            <div className='imgtxt-container'>
            <img className='steps' src="/email (1).png" alt="steps" />
              <p className='ptxt'>3. Recibe nuestra propuesta</p>
            </div>

            <div className='imgtxt-container'>
            <img className='steps' src="/paper-plane.png" alt="steps" />
              <p className='ptxt'>4. Hagamos tu proyecto realidad</p>
            </div>

          </div>

          <div className='llenado-container'>

            <div className='titletxt-container'>
              <p className='title'>País</p>
              <input type="text" />
            </div>

            <div className='titletxt-container'>
              <p className='title'>Nombre</p>
              <input type="text" />
            </div>

            <div className='titletxt-container'>
              <p className='title'>E-mail</p>
              <input type="text" />
            </div>

            <div className='titletxt-container'>
              <p className='title'>Empresa</p>
              <input type="text" />
            </div>

            <div className='titletxt-container'>
              <p className='title'>Teléfono</p>
              <input type="text" />
            </div>


            <div className='titletxt-container'>
              <p className='title'>Cuentanos tu idea</p>
              <input type="text" className='large'/>
            </div>

            <button className='contacto'>ENVIAR</button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage;
