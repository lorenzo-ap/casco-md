import { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/styles/Carousel.scss';

const Carousel: FC = () => {
  return (
    <div className="container">
      <div className="carousel mb-28">
        <Swiper
          className="bg-[#d9d9d9] rounded-lg"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}>
          {[1, 2, 3].map((e) => (
            <SwiperSlide key={e}>
              <div className="h-96 py-10 px-32 max-w-2xl flex flex-col justify-between items-start">
                <div className="text-5xl leading-snug">Lorem ipsum dolor sit</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <button className="button" type="button">
                  Cere oferta
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
