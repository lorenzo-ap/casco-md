import { FC } from 'react';
import Carousel from './Carousel';

const Promo: FC = () => {
  return (
    <div className="container">
      <div className="mb-28">
        <Carousel />
        <div className="flex gap-x-10">
          <div className="w-full h-96 bg-[#d9d9d9] rounded-lg"></div>
          <div className="w-full h-96 bg-[#d9d9d9] rounded-lg"></div>
          <div className="w-full h-96 bg-[#d9d9d9] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
