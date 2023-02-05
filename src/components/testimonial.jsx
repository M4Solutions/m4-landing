import React from "react";
import { testimonials } from "../services/printingServices";

const Testimonials = () => {



    return (
        <section className="py-14 flex gap-3 flex-col lg:flex-row">
            {
                testimonials.map((data, idx) => {
                    return (
                        <div key={data.id} className="max-w-screen-lg mx-auto p-4 border border-purple shadow-lg rounded-md duration-300 hover:shadow-sm">
                            <div className="max-w-3xl">
                            <figure>
                                <blockquote>
                                    <p className="text-gray-800 text-lg text-center font-semibold">
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                                    </p>
                                </blockquote>
                                <div className="flex justify-center items-center gap-x-4 mt-6">
                                    <img src={data.image}  className="w-16 h-16 rounded-full"/>
                                    <div>
                                        <span className="block text-gray-800 font-semibold">{data.name}</span>
                                        <span className="block text-gray-600 text-sm mt-0.5">Founder of meta</span>
                                    </div>
                                </div>
                            </figure>
                            </div>
                        </div>
                    )
                })
            }
        </section>
        );
}
 
export default Testimonials;