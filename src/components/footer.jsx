import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMobilePhone, faEnvelope, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 flex flex-col items-start justify-center md:justify-start mb-8 md:mb-0">
                    <img src="/images/logo.png" alt="M4 Solutions" className="mb-4" height={32} width={32}/>
                    <p className="text-sm mb-4">
                        We are a printing press company that specializes in high-quality printing services for businesses and individuals. Our mission is to provide our clients with top-notch printing services that exceed their expectations and help them achieve their goals.
                    </p>
                    <p className="text-sm text-rose-500">
                        ...We make lasting impression
                    </p>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-xl mb-4">Contact Us</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="tel:08033581589">
                                <FontAwesomeIcon icon={faPhone}/>
                                <span className="ml-2">
                                    0803 3581 589
                                </span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="tel:09185000505">
                                <FontAwesomeIcon icon={faMobilePhone}/>
                                <span className="ml-2">
                                    0918 500 0505
                                </span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="mailto:m4solutions@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope}/> 
                            <span className="ml-2">
                                m4solutions@gmail.com
                            </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/RWc6WdmwL5DYs5Mv6">
                                <FontAwesomeIcon icon={faMapLocation}/>
                                <span className="ml-2">
                                CF 05 Gidan Isa Plaza, Plot 2014 Moshood Abiola Way Opp. Arts & Culture, Area 10, Garki, Abuja.
                                </span>
                            </a>
                        </li>
                    </ul>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.286074487534!2d7.482762031735421!3d9.037647698067499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0c07effdb7%3A0xf83e1f89bf6588e8!2sGidan%20Isa%20Plaza!5e0!3m2!1sen!2sng!4v1679739435091!5m2!1sen!2sng" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>

                <div className="col-span-1 md:col-span-1">

                    <h3 className="text-xl mb-4">Follow Us</h3>
                    <div className="flex items-center">
                        
                        <a href="#" className="mr-4 hover:text-blue-600">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="#" className="mr-4 hover:text-blue-600">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="https://www.instagram.com/m4solutions_/" className="mr-4 hover:text-blue-600">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="https://wa.me/2348033581589" className="mr-4 hover:text-blue-600">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                    </div>
                </div>
            </div>

     );
}
 
export default Footer;
