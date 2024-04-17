import React from 'react';
import './style.css';
import Contato from '../../../assets/contato.png';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contatos = () => {
  return (
    <section id="contatos" >
      <h2 className="contato-title">CONTATOS</h2>
       <div className="contatos-container">
      <div className="info-container">
        <h1>Informações de Contato</h1>
        <div className="contact-item">
          <FaSquareInstagram  size={'30'} color={'#3BB1D6'} className="contact-icon" />
          <div className="contact-text">Instagram: @admtecnologias</div>
        </div>
        <div className="contact-item">
          <FaWhatsappSquare   size={'30'} color={'#3BB1D6'} className="contact-icon" />
          <div className="contact-text">WhatsApp:+55 (84) 98842-3834</div>
        </div>
        <div className="contact-item">
          < MdEmail size={'30'} color={'#3BB1D6'} className="contact-icon" />
          <div className="contact-text">Email: comercial@admtecnologias.com.br </div>
        </div>
        <div className="contact-item">
          <FaPhoneAlt  size={'25'} color={'#3BB1D6'} className="contact-icon" />
          <div className="contact-text">Telefone: (84) 98842-3834</div>
        </div>
        <div className="contact-item">
          <IoLocationSharp size={'50'} color={'#3BB1D6'} className="contact-icon" />
          <div className="contact-text">Endereço: Prédio do NIT - Av. Sen. Salgado Filho, 1559 - 1º Andar - Tirol, Natal - RN, 59015-000</div>
        </div>
      </div>
      <div className="contato-image">
        <img src={Contato} alt="Imagem Sobre" className="img-fluid" />
      </div>
      </div>
    </section>
  );
};

export default Contatos;