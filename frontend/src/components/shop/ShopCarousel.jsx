import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import '../../styles/shopCarousel.css'; 

const riceImages = [
{ src: '/shopRice/daawat.jpg', name: "daawat"},
{ src: '/shopRice/kohinoor.jpg', name: "kohinoor"},
{ src: '/shopRice/fortune.jpg', name: "Fortune"},
{ src: '/shopRice/lalqilla.jpg', name: "Lal Qilla"},
{ src: '/shopRice/organicIndia.jpg', name: "Organic India"},
{ src: '/shopRice/kohinoor2.jpg', name: "kohinoor2"},
{ src: '/shopRice/indiagate1.jpg', name: "India Gate"},
{ src: '/shopRice/indiagate2.jpg', name: "India Gate2"},
{ src: '/shopRice/fortune2.jpg', name: "Fortune2"},
{ src: '/shopRice/daawat2.jpg', name: "Daawat2"},
{ src: '/shopRice/fortune3.jpg', name: "Fortune3"},
];

const ShopCarousel = () => {
  return (
    <div className="rice-carousel-wrapper">
      <h3 className="carousel-heading">Explore Popular Rice Brands </h3>
   

<Swiper
  slidesPerView={4}
  spaceBetween={20}
  freeMode={true}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[FreeMode, Autoplay]}
  className="rice-swiper"
  breakpoints={{
    0: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>

       {riceImages.map((img, index) => (
  <SwiperSlide key={index}>
    <div className="rice-slide">
      <img src={img.src} alt={img.name} />
      <p className="brand-name">{img.name}</p>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
};

export default ShopCarousel;
