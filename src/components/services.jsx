import React from "react";
import { services } from "../services/data";

const Services = () => {
    return (
            <div className="mx-auto px-4 md:px-8 py-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                <h3 className="text-3xl font-bold mb-4 text-center">Some of our services</h3>
                </div>
                <div className='flex items-stretch justify-center flex-wrap -m-4'>
                {
                    services.map((service, idx) => (
                    <div key={idx} className="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos="fade-up" data-aos-duration="3000">
                        <div className="h-full p-6 rounded-lg border-2 border-dark-blue flex flex-col relative overflow-hidden">
                            <h1 className="text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{service.name}</h1>
                            <ul className='py-8 space-y-3'>
                                {
                                    service.features.map((featureItem, idx) => (
                                        <p key={idx} className="flex items-center text-gray-600 mb-2">
                                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-dark-blue text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>{featureItem}
                                        </p>
                                    ))
                                }
                            </ul>

                            <a href="tel:09185000505" className="flex items-center mt-auto text-white bg-dark-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-500 rounded">Place a Call
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
    );
};


export default Services;