/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { banner1, banner2, banner3 } from "../../assets/banner-img/index";

const Banner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper max-w-[400px] md:max-w-[800px] lg:max-w-[1000px]">
        <SwiperSlide>
          <img src={banner1} className="w-full h-56 md:h-72 lg:h-80 xl:h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} className="w-full h-56 md:h-72 lg:h-80 xl:h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} className="w-full h-56 md:h-72 lg:h-80 xl:h-96" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
