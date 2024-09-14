import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-content">
        <div className="copy-img">
          <div className="img-title-container">
              <img className='img-uvol' src="/uvol logo.jpg" alt="logo uvol" />
              <span className='title-footer'>Uvol SRL</span>
          </div>
          <span className='copyright-span'>Copyright © 2024 Uvol SRL.</span>
        </div>

        <div className="quick-links">
          <h4 className="footer-heading">Enlaces rápidos</h4>
          <ul className="link-list">
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#faq">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div className="social-net-container">
          <h4 className="footer-heading">Síguenos</h4>
          <div className="social-links">
            <a className='network-a' href="https://www.facebook.com/tuPerfilDeFacebook" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className='network-a' href="#instagram">Instagram</a>
            <a className='network-a' href="#twitter">Twitter</a>
            <a className='network-a' href="#tiktok">TikTok</a>
          </div>
        </div>
        
        <div className="contact-info">
          <h4 className="footer-heading">Contáctanos</h4>
          <p>Correo: uvol@uvol.com</p>
          <p>Teléfono: +591 72579423</p>
          <p>Dirección: Av. José Aguirre, La Paz-Bolivia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

