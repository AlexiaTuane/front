import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagem02 from '../../../assets/imagem02.jpg';
import imagem003 from '../../../assets/imagem003.jpg';
import imagem0004 from '../../../assets/imagem0004.jpg';
import '../Carrosel/style.css'

const Carrossel = () => {
  return (
    <Carousel id='carrosel' fade interval={1887}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem02}
          alt="Primeira imagem"
        />
        <Carousel.Caption className="text-center">
          <h3 className="textoimg1">Gestão para o seu negócio</h3>
          <p>Controle é a palavra chave quando o assunto é gestão empresarial. Acompanhar tudo o que é realizado e obter levantamentos referentes a períodos específicos permite aos empresários entender corretamente o seu nicho de mercado.</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem003}
          alt="Segunda imagem"
        />
        <Carousel.Caption className="textoimg2">
          <h3>Controle as suas vendas
             com eficiência</h3>
          <p>Não deixe o caos atrapalhar o sucesso do seu negócio invista em recursos que ajudarão a organizar sua empresa e transforme a confusão em produtividade e eficiência.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem0004}
          alt="Terceira imagem"
        />
        <Carousel.Caption className="text-center">
          <h3 className="no-line-break">Recursos que te ajudarão a organizar sua empresa</h3>
          <p>Um sistema de gestão é a chave para o sucesso do seu negócio, ele permite uma visão completa e estratégica da empresa, tornando possível identificar oportunidades e desafios, e tomar decisões mais precisas e rápidas para alcançar seus objetivos.</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;
