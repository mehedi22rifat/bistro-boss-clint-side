// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import img1 from '../../../assets/ImageResorce/home/01.jpg'
import img2 from'../../../assets/ImageResorce/home/02.jpg'
import img3 from '../../../assets/ImageResorce/home/03.png'
import img4 from '../../../assets/ImageResorce/home/04.jpg'
import img5 from '../../../assets/ImageResorce/home/05.png'
import img6 from '../../../assets/ImageResorce/home/06.png'



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {

   
  return (
    <div className='container mx-auto'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        mousewheel={true}
        keyboard={true}
        modules={[ Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><Slide images={img1} text={'mehedi'} /></SwiperSlide>
        <SwiperSlide><Slide images={img2} text={'mehedi'} /></SwiperSlide>
        <SwiperSlide><Slide images={img3} text={'mehedi'} /></SwiperSlide>
        <SwiperSlide><Slide images={img4} text={'mehedi'} /></SwiperSlide>
        <SwiperSlide><Slide images={img5} text={'mehedi'} /></SwiperSlide>
        <SwiperSlide><Slide images={img6} text={'mehedi'} /></SwiperSlide>
      
      </Swiper>
    </div>
  );
}
