import React from 'react';
import { IoRocketSharp, IoDiamond } from "react-icons/io5"; 
import { RiFocus2Fill } from "react-icons/ri";
import '../MVV/style.css';

const MissaoVisaoValor = () => {
  return (
    <div className="missao-visao-valor-container">
      <div className="missao-visao-valor-card">
        <div className="missao-visao-valor-header">
          <IoRocketSharp />
          <h3> Missão</h3>
        </div>
        <div className="missao-visao-valor-content">
          <p>
            Nossa missão é fornecer soluções tecnológicas inovadoras que ajudem nossos clientes a alcançar o sucesso em seus negócios.
          </p>
        </div>
      </div>
      <div className="missao-visao-valor-card">
        <div className="missao-visao-valor-header">
          <RiFocus2Fill /> 
          <h3> Visão</h3>
        </div>
        <div className="missao-visao-valor-content">
          <p>
            Nossa visão é ser a empresa líder em soluções de automação comercial, oferecendo produtos de qualidade e excelente serviço ao cliente.
          </p>
        </div>
      </div>
      <div className="missao-visao-valor-card">
        <div className="missao-visao-valor-header">
          < IoDiamond />
          <h3> Valores</h3>
        </div>
        <div className="missao-visao-valor-content">
          <p>
          Compromisso com confiabilidade e promessas cumpridas. Transparência baseada em fatos e dados legais. Ética guiada pelo bem-estar e tratamento justo. Democratização da informação para promover aprendizado e inovação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissaoVisaoValor;
