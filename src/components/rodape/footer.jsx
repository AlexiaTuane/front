import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../rodape/style.css'; // Renomeei o arquivo para refletir o estilo

const Rodape = () => {
  return (
    <footer className="rodape">
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
          
          </Col>
          <Col>
         
          </Col>
          <Col>
      
          </Col>
        </Row>
      </Container>

      <div className="rodape-section rodape-section-3">
        <p className="rodape-text">
          Adm Tecnologias - © Copyright 2013. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
