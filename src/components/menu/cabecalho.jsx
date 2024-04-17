import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { IoLogoWhatsapp } from "react-icons/io";
import AdmLogo from '../../assets/AdmLogo.png';
import '../menu/style.css';

const Cabecalho = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="cabecalho-container">
      <Navbar className="sub-cabecalho">
        <Container className='conteiner'>
          <Nav>
            <div className="tags-1">
              <FiMail /> comercial@admtecnologias.com.br
            </div>
            <div className="tags-2">
              <IoLogoWhatsapp/> (84) 98842-3834
            </div>
            <div className="tags-3">
              Gestão para o seu negócio
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={ScrollLink} to="/inicio" onClick={scrollToTop}>
            <img src={AdmLogo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-start">
            <Nav>
              <Nav.Link onClick={scrollToTop} className="custom-nav-link">
                Início
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="sobre" smooth={true} duration={200} className="custom-nav-link">
                Sobre Nós
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="servicos" smooth={true} duration={200} className="custom-nav-link">
                Serviços
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="contatos" smooth={true} duration={200} className="custom-nav-link">
                <b>Contato</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="custom-nav-link">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
