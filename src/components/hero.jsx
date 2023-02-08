import React from "react";

const Hero = () => {
    return (
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="heading-1">
                        We Make<span className="text-dark-blue"> Lasting Impression</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    M4 Solution Limited is a budding cutting-edge full-service printing company founded in 2020. It focuses on the printing needs of educational institutions, the corporate sector, and the general public. It is our intention to provide the best possible printing solutions where attention is paidto quality and detail, resultingin satisfied customers with whom we have long lasting business relationships. The foundation of our business is integrity and honesty. We are proud of the client relationships that have developed resulting in interdependence and mutual growth.
                    </p>
                    <div className="pt-5 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="#" className="px-7 py-3 text-white w-full bg-dark-blue text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Get started
                        </a>
                        <a href="#" className="px-7 py-3 w-full outline outline-1 outline-dark-blue text-gray-200 text-center rounded-md block sm:w-auto">
                            Try it out
                        </a>
                    </div>
                </div>
                <div className="hero-background flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://img.freepik.com/premium-photo/large-offset-printing-press-running-long-roll-paper-production-line-industrial-printer-machine_39420-242.jpg?w=1480" className="w-full mx-auto sm:w-10/12 lg:w-full opacity-0" />
                </div>
            </section>
    )
}
 
export default Hero;

  