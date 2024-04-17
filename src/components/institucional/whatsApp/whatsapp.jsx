import React, { useEffect, useState } from 'react';
import './style.css';
import { PiWhatsappLogoLight } from "react-icons/pi";

const Whatsapp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Defina a altura em que o botão deve aparecer
      const showHeight = 100;

      // Atualize o estado com base na posição da barra de rolagem
      setShowButton(scrollPosition > showHeight);
    };

    // Adicione um ouvinte de rolagem ao componente montado
    window.addEventListener('scroll', handleScroll);

    // Remova o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    // Ajuste o número de telefone para o formato internacional sem espaços ou caracteres especiais
    const phoneNumber = '+5584988423834';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    
    // Redireciona o usuário para o WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="whatsapp" style={{ display: showButton ? 'block' : 'none' }}>
      <a href="javascript:void(0)" className="whatsapp-button" onClick={handleButtonClick}>
        <PiWhatsappLogoLight size={'30'} color={'white'} className="contact-icon" />
      </a>
    </section>
  );
};

export default Whatsapp;
