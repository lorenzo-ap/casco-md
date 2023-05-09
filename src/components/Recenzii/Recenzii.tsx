import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/styles/RecenziiCarousel.scss';

const Recenzii = () => {
  return (
    <section className="recenzii">
      <div className="bg-[#338588] py-14">
        <h2 className="title">Recenzii</h2>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          initialSlide={1}
          grabCursor={true}
          className="mySwiper h-[27rem] pb-[50px !important]">
          {[1, 2, 3, 4].map((e) => (
            <SwiperSlide key={e}>
              <div className="h-5/6 bg-[#bebebe] py-6 px-12 rounded-xl flex flex-col justify-between">
                <h3 className="text-3xl">Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                  lobortis.
                </p>
                <div className="flex items-center gap-x-5">
                  <div className="bg-[#b1b1b1] rounded-full w-20 h-20">
                    <img src="" alt="" />
                  </div>
                  <div>Vlad Glavan</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recenzii;
