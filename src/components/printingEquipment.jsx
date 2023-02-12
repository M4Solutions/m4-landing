import React from "react";
import SectionHead from "./common/sectionHead";
import {machines} from "../services/printingServices";

const PrintingEquipment = () => {

    return (         
        <div className="bg-light-blue">
            <SectionHead header={'SERVICES'} desc={'Our Services and Printing Equipment'}/>
            <div>
                <p>
                Ranging from handbills, brochures, posters, calendars, annual reports, magazines to books & manuals, we are equipped with extensive capacity to print large quantities and quality prints that resonate with our client's brand and products and which match globally acceptable standards. Our professional services guarantee our clientele of impeccable precision and timely delivery. Complementing the printing press, we boast of a thoroughly garnished finishing division equipped with an array of the most advanced machinery and equipment. These provide most premium finishing on printed works and comprise of; Heidelberg Speed Master MOFP 5 Colour, Digital Printing Machine,Perforating Machine, Computer to Plate Machines, Duplo booklet maker, Xerox Versant 280, Monogram Machine, Diecutter.
                </p>
                <p className="mt-4">
                M4 Solutions Limited produces its items with superb quilty on time and cost effectively. The company is focused on integrated solutions and clients stand to benefit from prepress and post press processes.These include; Flyers, Calendars, Magazines, Brochures, Presentation Folders, Corporate Stationery, NCR Books, Banners, Business Cards,Seasonal Cards,e t c.
                </p>
            </div>
            <div className="flex flex-wrap -m-4 mt-4">
            {
                machines.map(machine => {
                    return (
                        <div key={machine.id} class="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                            <img className="absolute inset-0 w-full h-full object-cover object-center" src={`/images/${machine.image}`} alt={machine.name}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-opacity-0 bg-opacity-55 opacity-0 hover:opacity-100">
                                <h1 className="title-font text-lg opacity-0 text-gray-900 mb-3">Shooting Stars</h1>
                                <p className="leading-relaxed opacity-0">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <h2 className="tracking-widest text-sm title-font font-bold bg-white text-black text-center mb-1 uppercase">{machine.name}</h2>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}



export default PrintingEquipment;