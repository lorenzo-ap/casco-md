import Contact from 'components/Contact/Contact';
import DespreNoi from 'components/DespreNoi/DespreNoi';
import Parteneri from 'components/Parteneri/Parteneri';
import Promo from 'components/Promo/Promo';
import Recenzii from 'components/Recenzii/Recenzii';

const Home = () => {
  return (
    <>
      <Promo />
      <Parteneri />
      <DespreNoi />
      <Recenzii />
      <Contact />
    </>
  );
};

export default Home;
