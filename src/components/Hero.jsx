import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlides } from "../services/data";

const Hero = () => {

    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center ">
            <div className="md:w-1/2 flex-1">
                <h1 className="text-4xl font-extrabold leading-tight mb-4">
                High-Quality Printing Services @ M4 
                </h1>
                <p className="text-gray-100 mb-8 leading-loose">
                    Looking for where to get your printing works done? then you need to look no further than M4. We are committed to providing our customers with the best possible printing experience.
                </p>
                <div className="flex justify-center md:justify-start">
                    <a href="tel:09185000505" className="inline-block px-8 py-4 rounded text-blue-500 bg-white transform hover:bg-gray-200 mr-4" data-aos="fade-rigt" data-aos-duration="2000">
                        Get Started
                    </a>
                    <a href="https://wa.me/2348033581589" className="inline-block px-8 py-4 rounded text-blue-500 bg-white transorm hover:bg-gray-200" data-aos="fade-left" data-aos-duration="2000">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="flex-1 w-full sm:max-w-2xl xl:max-w-xl backdrop-blur-sm bg-white/30 p-1 ">
                <img src="./images/hero-image.webp" className="bg-blend-color h-5/6" alt="printing" />
            </div>
        </div>

    )
}
export default Hero;