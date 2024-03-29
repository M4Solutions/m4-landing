import React from "react";
import { testimonials } from "../services/data";

const Testimonials = () => {



    return (
        <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
            <div className="flex flex-wrap -m-4">
            {
                testimonials.map((data, idx) => {
                    return (
                        <div key={data.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={data.image} />
                                <p className="leading-relaxed">"{data.testimonial}"</p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                                <h2 className="text-ash font-medium title-font tracking-wider text-sm uppercase">{data.name}</h2>
                                <p className="text-ash">{data.occupation}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
        );
}
 
export default Testimonials;