import React from "react";

const Hero = () => {
    return (
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="heading-1">
                        One page Template for
                         <span className="text-dark-blue"> Digital agency</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="javascript:void(0)" className="px-7 py-3 text-white w-full bg-dark-blue text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Get started
                        </a>
                        <a href="javascript:void(0)" className="px-7 py-3 w-full outline outline-1 outline-dark-blue text-gray-200 text-center rounded-md block sm:w-auto">
                            Try it out
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://img.freepik.com/premium-photo/large-offset-printing-press-running-long-roll-paper-production-line-industrial-printer-machine_39420-242.jpg?w=1480" className="w-full mx-auto sm:w-10/12 lg:w-full" />
                </div>
            </section>
    )
}
 
export default Hero;

  