import React from "react";
import {machines} from "../services/printingServices";

const PrintingEquipment = () => {

    return (         
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2 text-center">Our Services</h2>
                <p className="text-gray-600 leading-relaxed mx-auto max-w-8xl">
                    Ranging from handbills, brochures, posters, calendars, annual reports, magazines to books & manuals, we are equipped with extensive capacity to print large quantities and quality prints that resonate with our client's brand and products and which match globally acceptable standards. Our professional services guarantee our clientele of impeccable precision and timely delivery. Complementing the printing press, we boast of a thoroughly garnished finishing division equipped with an array of the most advanced machinery and equipment. These provide most premium finishing on printed works and comprise of; Heidelberg Speed Master MOFP 5 Colour, Digital Printing Machine,Perforating Machine, Computer to Plate Machines, Duplo booklet maker, Xerox Versant 280, Monogram Machine, Diecutter.
                </p>
                <p className="text-gray-600 leading-relaxed mx-auto max-w-8xl">
                    M4 Solutions Limited produces its items with superb quilty on time and cost effectively. The company is focused on integrated solutions and clients stand to benefit from prepress and post press processes.These include; Flyers, Calendars, Magazines, Brochures, Presentation Folders, Corporate Stationery, NCR Books, Banners, Business Cards,Seasonal Cards,e t c.
                </p>
            </div>
            <div className="flex flex-wrap items-stretch -mx-4">
                    {
                        machines.map((machine, idx) => {
                            return (
                                <div key={machine.name} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
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