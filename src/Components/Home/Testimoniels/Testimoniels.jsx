import SectionHead from "../../SectionHead/SectionHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimoniels = () => {
  const [reivews, setRevidew] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setRevidew(data));
  }, []);

  console.log(reivews.length);

  return (
    <div className="mb-10">
      <SectionHead
        subTitle={"TESTIMONIALS"}
        Heading={"---What Our Clients Say---"}
      ></SectionHead>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reivews.map((reivew) => (
          <SwiperSlide key={reivew._id}>

            <div className="flex flex-col items-center my-16 mx-24 space-y-3">
              <Rating
               style={{ maxWidth: 180 }}
                value={reivew.rating} readOnly
                />
              <p>{reivew.details}</p>
              <div className="text-2xl">{reivew.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimoniels;
