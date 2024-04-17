import React from 'react';
import '../../institucional/serviços/style.css'
import { GrSystem } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";

const NossosServicos = () => {
  return (
    <section id="servicos" className="servicos">
        <h2>NOSSOS SERVIÇOS</h2>
        <h3 className="subtitle"> Oferecemos soluções personalizadas para atender às suas necessidades específicas.</h3>
    
      <div className="servicos-container">
   
        <div className="servico-card">
          <GrSystem size={55} color={'#2c2b29'} />
          <p>Sistemas para sua Empresa</p>
        </div>
        <div className="servico-card">
          <TbReportSearch size={60} color={'#2c2b29'}/>
          <p>Assessoria Tributária</p>
        </div>
        <div className="servico-card">
          <FaComputer size={60} color={'#2c2b29'} />
          <p>Venda de Equipamentos</p>
        </div>
        <div className="servico-card">
          <FaGears size={60} color={'#2c2b29'} />
          <p>Manutenção de Equipamentos </p>
        </div>
        <div className="servico-card">
          <LiaCertificateSolid size={60} color={'#2c2b29'} />
          <p>Certificados Digitais </p>
        </div>

      </div>
    </section>
  );
};

export default NossosServicos;
