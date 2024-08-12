import React from 'react';
import './wpp.css';

const WhatsAppContact = () => {
  const Number = '59172579423'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me interesa su servicio'; // Mensaje predeterminado

  return (
    <a
      href={`https://wa.me/${Number}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppContact;
