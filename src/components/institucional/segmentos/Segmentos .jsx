import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { FaBreadSlice } from "react-icons/fa";
import { IoConstruct } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import '../segmentos/style.css';

const Segmentos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Define quantos cards serão mostrados ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Define a velocidade de rotação do carrossel
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className='segmentos'>
    <div className="segmentos-container">
      <h2 className="segmentos-title">SEGMENTOS QUE ATENDEMOS</h2>
      <h3 className="subtitle">Trabalhamos em parceria com uma ampla gama de setores para garantir a melhor experiência aos nossos clientes.</h3>

    
      
      <Slider {...settings}> {/* Passa as configurações para o componente Slider */}
        <div className="counter">
          <span className="counter-value"><FaShoppingCart /></span>
          <h3>Mercados</h3>
        </div>
        <div className="counter blue">
          <span className="counter-value"><IoFastFoodSharp /></span>
          <h3>Restaurantes</h3>
        </div>
        <div className="counter blue">
          <span className="counter-value"><MdOutlinePets /></span>
          <h3>Pet Shop</h3>
        </div>
        <div className="counter blue">
          <span className="counter-value"><FaBreadSlice /></span>
          <h3>Padarias</h3>
        </div>

        <div className="counter blue">
          <span className="counter-value">< IoConstruct /></span>
          <h3>Materias de Construção</h3>
        </div>

        <div className="counter blue">
          <span className="counter-value"><FaHotel /></span>
          <h3>Hotéis</h3>
        </div>


      </Slider>
    </div>
    </section>
  );
};

export default Segmentos;
