import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/styles/Carousel.scss';

const images: string[] = [
  'https://paytm.com/blog/wp-content/uploads/2021/10/14_Insurance_What-is-IDV-in-Car-Insurance.jpg',
  'https://www.outlookindia.com/outlookmoney/public/uploads/article/gallery/9f5518fc9b70672aaba65aa3af600c32.jpg',
  'https://www.bankrate.com/2021/07/08145135/car-how-to-read-insurance-policy-featured.jpg?auto=webp&optimize=high&crop=16:9',
];

const Carousel = () => {
  return (
    <div className="carousel mb-20">
      <Swiper
        className="bg-[#d9d9d9] rounded-lg"
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        loop
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className="bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}>
            <div className="bg-white bg-opacity-75">
              <div className="h-96 py-10 px-32 max-w-2xl flex flex-col justify-between items-start">
                <div className="text-5xl leading-snug">Lorem ipsum dolor sit</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <button className="button" type="button">
                  Cere oferta
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
