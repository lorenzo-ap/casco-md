import Carousel from 'components/Carousel/Carousel';
import Contact from 'components/Contact/Contact';
import DespreNoi from 'components/DespreNoi/DespreNoi';
import Parteneri from 'components/Parteneri/Parteneri';
import Recenzii from 'components/Recenzii/Recenzii';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Carousel />
      <Parteneri />
      <DespreNoi />
      <Recenzii />
      <Contact />
    </>
  );
};

export default Home;
