import React from 'react';
import '../../institucional/Parceiros/style.css';
import sebrae from '../../../assets/sebrae.png';
import g3 from '../../../assets/g3.png';
import elgin from '../../../assets/elgin.png';
import ifrn from '../../../assets/ifrn.png';
import itnc from '../../../assets/itnc.png';

const Parceiros = () => {
  return(
     <section className='parceiros'>
      <h2 className="parceiros-title">PARCEIROS</h2>
      <div className="cards">
        <div className="card credentialing red">
          <div className="overlay"></div>
          <div className="circle">
            <img src={g3} alt="Imagem g3" className="circle-image" />
          </div>
        </div>

        <div className="card credentialing red">
          <div className="overlay"></div>
          <div className="circle">
            <img src={sebrae} alt="Imagem Sebrae" className="circle-image" />
          </div>
        </div>

        <div className="card credentialing red">
          <div className="overlay"></div>
          <div className="circle">
            <img src={elgin} alt="Imagem Elgin" className="circle-image" />
          </div>
        </div>

        <div className="card credentialing red">
          <div className="overlay"></div>
          <div className="circle">
            <img src={ifrn} alt="Imagem IFRN" className="circle-image" />
          </div>
        </div>

        <div className="card credentialing red">
          <div className="overlay"></div>
          <div className="circle">
            <img src={itnc} alt="Imagem ITNC" className="circle-image" />
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Parceiros;
