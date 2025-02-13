import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import 'styled-components';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function swiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="public/tables.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/shades.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/lamp.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/Love this.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/fireplace.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/Container barbershop.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/custombraai.jpg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/bins.jpeg" alt=""></img></SwiperSlide>
        <SwiperSlide><img src="public/barsetting.jpeg" alt=""></img></SwiperSlide>
      </Swiper>
    </>
  );
}

