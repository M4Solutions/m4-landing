import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlides } from "../services/data";

const Hero = () => {
    return (
        // <div className="container mx-auto flex flex-col md:flex-row gap-2 items-center ">
        //     {/* <div className="md:w-1/2 flex-1">
        //         <h1 className="text-4xl font-bold leading-tight mb-4">Get High-Quality <span className="bg-gradient-to-r from-red-200 to-red-600 bg-clip-text text-transparent">Printing</span> Services at M4 Solutions</h1>
        //         <p className="text-gray-200 mb-8 leading-loose"> </p>
        //         <div className="flex">
        //             <a href="tel:09185000505" className="inline-block px-8 py-4 rounded text-blue-500 bg-white transform hover:scale-105 mr-4" data-aos="fade-rigt" data-aos-duration="3000">
        //                 Get Started
        //             </a>
        //             <a href="https://wa.me/2348033581589" className="inline-block px-8 py-4 rounded text-blue-500 bg-white transorm hover:scale-105" data-aos="fade-left" data-aos-duration="3000">
        //                 Contact Us
        //             </a>
        //         </div>
        //     </div> */}
        //     <div className="flex-1 backdrop-blur-sm bg-white/30 p-1 ">
        //         <img src="./images/hero-image.webp" className="bg-blend-color h-5/6" alt="printing" />
        //     </div>
        // </div>
        
        <div className="container mx-auto">
        <div className="backdrop-blur-sm bg-white/30 p-1 mx-auto">
            <Swiper
            spaceBetween={25}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    heroSlides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.image} alt={slide.alt} className="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="px-auto">
            <h1 className="text-4xl font-bold leading-tight mb-4">
                Get High-Quality <span className="bg-gradient-to-r from-red-200 to-red-600 bg-clip-text text-transparent">Printing</span> Services at M4 Solutions
            </h1>
            <p className="text-gray-200 mb-8 leading-loose"> </p>
            <div className="flex">
                <a href="tel:09185000505" className="inline-block px-8 py-4 rounded text-blue-500 bg-white transform hover:scale-105 mr-4" data-aos="fade-rigt" data-aos-duration="3000">
                        Get Started
                </a>
                <a href="https://wa.me/2348033581589" className="inline-block px-8 py-4 rounded text-blue-500 bg-white transorm hover:scale-105" data-aos="fade-left" data-aos-duration="3000">
                     Contact Us
                </a>
            </div>
        </div>
    </div>
    )
}
export default Hero;