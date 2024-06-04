
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/ImageResorce/home/slide1.jpg'
import img2 from '../../../assets/ImageResorce/home/slide2.jpg'
import img3 from '../../../assets/ImageResorce/home/slide3.jpg'
import img4 from '../../../assets/ImageResorce/home/slide4.jpg'
import img5 from '../../../assets/ImageResorce/home/slide5.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
import SectionHead from './../../SectionHead/SectionHead';


export default function Cetagory() {
  return (
    <div>
        <SectionHead
         subTitle={'---From 11:00am to 10:00pm---'}
         Heading={'ORDER ONLINE'}
         >
        </SectionHead>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
           <img src={img3} alt="" />
           <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
         <img src={img5} alt="" />
         <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Jani na</h1>
        </SwiperSlide><SwiperSlide>
         <img src={img5} alt="" />
         <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Jani na</h1>
        </SwiperSlide><SwiperSlide>
         <img src={img5} alt="" />
         <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Jani na</h1>
        </SwiperSlide><SwiperSlide>
         <img src={img5} alt="" />
         <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Jani na</h1>
        </SwiperSlide><SwiperSlide>
         <img src={img5} alt="" />
         <h1 className='uppercase text-center text-white -mt-20 font-bold text-3xl'>Jani na</h1>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
