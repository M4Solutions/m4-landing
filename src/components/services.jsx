import React from "react";
import { services } from "../services/printingServices";

const Services = () => {
    return (
        <section className='py-14'>
            <div className="mx-auto px-4 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className='flex items-stretch justify-center flex-wrap -m-4'>
                {
                    services.map((service, idx) => (
                    <div key={idx} class="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h1 className="text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{service.name}</h1>
                            <ul className='py-8 space-y-3'>
                                {
                                    service.features.map((featureItem, idx) => (
                                        <p key={idx} className="flex items-center text-gray-600 mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>{featureItem}
                                        </p>
                                    ))
                                }
                            </ul>

                            <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Place a Call
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </section>
    );
};


export default Services;