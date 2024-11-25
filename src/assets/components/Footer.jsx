import './Footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-content">
        <div className="copy-img">
          <div className="img-title-container">
              <a className="ok" href="/">
                <img className='img-uvol' src="/uvol logo.jpg" alt="logo uvol" />
                <span className='title-footer'>Uvol SRL</span>
              </a>
          </div>
          <span className='copyright-span'>Copyright © 2024 Uvol SRL.</span>
        </div>

        <div className="quick-links">
          <h4 className="footer-heading">Enlaces rápidos</h4>
          <ul className="link-list">
            <li><a href="/aboutus">Sobre Nosotros</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="social-net-container">
          <h4 className="footer-heading">Síguenos</h4>
          <div className="social-links ">
            <div className="icon-links">
              <a className='network-a' href="https://www.facebook.com/tuPerfilDeFacebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              <Icon icon="line-md:facebook" width="24" height="24" />
            </div>
            <div className="icon-links">
              <a className='network-a' href="#instagram">Instagram</a>
              <Icon icon="line-md:instagram" width="24" height="24" />
            </div>
          </div>
          <div className="social-links">
            <div className="icon-links">
              <a className='network-a' href="#twitter">Twitter</a>
              <Icon icon="line-md:twitter-x-alt" width="24" height="24" />
            </div>
            <div className="icon-links">
              <a className='network-a' href="#tiktok">TikTok</a>
              <Icon icon="line-md:tiktok" width="24" height="24" />
            </div>
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

