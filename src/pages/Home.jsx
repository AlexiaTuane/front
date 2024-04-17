
import Cabecalho from '../components/menu/cabecalho';
import Footer from '../components/rodape/footer';
import Carrossel from '../components/institucional/Carrosel/Carrossel';
import Sobre from '../components/institucional/sobre/Sobrenos';
import MissaoVisaoValor from '../components/institucional/MVV/MissaoVisaoValores';
import Segmentos from '../components/institucional/segmentos/Segmentos ';
import Parceiros from '../components/institucional/Parceiros/Parceiros';
import NossosServicos from '../components/institucional/serviços/servicos';
import Contatos from '../components/institucional/contato/contatos';
import Whatsapp from '../components/institucional/whatsApp/whatsapp';

const Home = () => {
  return (
    <div >
      
      <Cabecalho />
      <Carrossel />
      <Sobre />
      <MissaoVisaoValor />
      <NossosServicos />
      <Segmentos />
      <Parceiros />
      <Contatos />
      <Whatsapp/>
      <Footer />
    </div>
  );
};

export default Home;
