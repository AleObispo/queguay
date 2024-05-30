import React from 'react';
import './WhatsAppButton.css'; // Asegúrate de importar los estilos CSS para el botón de WhatsApp
import whatsappIcon from '../assets/icons/whatsapp.png'

function WhatsAppButton() {
  // Reemplaza el enlace con tu enlace de WhatsApp
  const whatsappLink = 'https://api.whatsapp.com/send?phone=+34624474198&text=Hola! Estoy interesado en tu producto.';

  return (
    <a href={whatsappLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;