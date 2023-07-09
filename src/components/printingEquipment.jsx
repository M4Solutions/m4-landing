import React from "react";
import {machines} from "../services/data";

const PrintingEquipment = () => {

    return (         
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2 text-center">Our Services</h2>
                <div className="text-gray-600 leading-relaxed mx-auto max-w-8xl">
                    <p className="mt-2">
                        From handbills and brochures to posters, calendars, annual reports, magazines, and books and manuals, wehave the capacity to print large quantities of high-quality prints that meet our clients' brand and product requirements and global standards. Our professional services guarantee our clients impeccable precision and timely delivery.
                    </p>
                    <p className="mt-2">
                        In addition to our printing press, we have a state-of-the-art finishing division with a wide range of advanced machinery and equipment. These machines provide the highest quality finishing for printed materials, including:
                    </p>

                    <ul className="list-disc mt-2 ml-5">
                            <li>Heidelberg Speed Master MOFP 5 Color</li>
                            <li>Digital Printing Machine</li>
                            <li>Perforating Machine</li>
                            <li>Computer to Plate Machines</li>
                            <li>Duplo booklet maker</li>
                            <li>Xerox Versant 280</li>
                            <li>Monogram Machine</li>
                            <li>Diecutter</li>
                    </ul>

                    <p className="mt-2">
                        Our finishing division is able to handle a wide range of printing projects, from simple to complex. We are committed to providing our clients with the highest quality printing and finishing services possible.
                    </p>

                    {/* <p className="text-gray-600 leading-relaxed mx-auto max-w-8xl mt-2">
                        M4 Solutions Limited produces its items with superb quilty on time and cost effectively. The company is focused on integrated solutions and clients stand to benefit from prepress and post press processes.These include; Flyers, Calendars, Magazines, Brochures, Presentation Folders, Corporate Stationery, NCR Books, Banners, Business Cards,Seasonal Cards,e t c.
                    </p> */}
                </div>
                
            </div>
            <div className="flex flex-wrap items-stretch -mx-4">
                    {
                        machines.map((machine, idx) => {
                            return (
                                <div data-aos="fade-up" data-aos-duration="3000" key={machine.name} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                    <div className="relative">
                                        <img className="w-full h-64 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 object-fit" src={`./images/${machine.image}`} alt={machine.name} />
                                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white bg-opacity-80 rounded-lg">
                                        <p className="text-sm text-gray-800 font-bold">{machine.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}



export default PrintingEquipment;