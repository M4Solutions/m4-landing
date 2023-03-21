import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 flex items-center justify-center md:justify-start mb-8 md:mb-0">
                    <img src="./images/company-logo.png" alt="Company Logo" className="w-32" />
                    <p className="ml-4 text-sm">
                        We are a printing press company that specializes in high-quality printing services for businesses and individuals. Our mission is to provide our clients with top-notch printing services that exceed their expectations and help them achieve their goals.
                    </p>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-xl mb-4">Contact Us</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><FontAwesomeIcon icon={faPhone}/> 123-456-7890</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faEnvelope}/> info@example.com</li>
                        <li><FontAwesomeIcon icon={faLocation}/> 123 Main St, New York, NY 10001</li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-1">

                    <h3 className="text-xl mb-4">Follow Us</h3>
                    <div className="flex items-center">
                        
                        <a href="#" className="mr-4">
                        <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="#" className="mr-4">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="#" className="mr-4">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="#" className="mr-4">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                    </div>
                </div>
            </div>

     );
}
 
export default Footer;
