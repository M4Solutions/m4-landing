import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Children } from 'react';

const Carousel = ({slides, spaceBetween, slidesPerView}) => {
  console.log(slides)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {Children}
    </Swiper>
  );
};

export default Carousel;