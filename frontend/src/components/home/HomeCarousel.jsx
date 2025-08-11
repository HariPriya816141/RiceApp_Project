// src/components/Home/HomeCarousel.jsx
import React from "react";
import "../../styles/homeCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import DiamondLine from "./DiamondLine";
import HeroContentBox, { slideData } from "./HeroContentBox";


const HomeCarousel = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        className="hero-swiper"
      >
        {slideData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-inner">
              <DiamondLine />
              <HeroContentBox heading={item.heading} caption={item.caption} image={item.image} index={index} />
              {/* image */}
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;







  
  