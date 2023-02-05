// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default ({spaceBetween, slidesPerView, swiperSlides}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {swiperSlides.map(slide => {
            return(
                <SwiperSlide key={slide.id}>
                    {
                        slide.image && <img src={slide.image} alt={slide.title}/>
                    }
                </SwiperSlide>
            )
        })}
    </Swiper>
  );
};