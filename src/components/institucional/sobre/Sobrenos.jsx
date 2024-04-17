import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imagemSobre from '../../../assets/sobrenos.png';
import '../sobre/style.css'; // Importe o arquivo CSS aqui

const Sobre = () => {
  return (
    <div id="sobre" className="sobre-container">
      <Row>
        <Col md={6}>
          <div className="sobre-content">
          
            <p className="sobre-description">
                <h3 className="sobre-title">SOBRE NÓS</h3>
              <span className="sobre-text">
                A ADM Tecnologias, originada no estado do Rio Grande do Norte, tem como propósito facilitar o ambiente empresarial, proporcionando uma integração eficaz entre tecnologia e administração. Nosso foco está em auxiliar as empresas varejistas a manterem-se atualizadas quanto à correta tributação de seus produtos, garantindo uma gestão mais eficiente e em conformidade com as normas fiscais.
              </span>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="sobre-image">
            <img src={imagemSobre} alt="Imagem Sobre" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sobre;
