import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import MissionAndVision from "../components/MissionAndVision";
import Testimonials from "../components/Testimonial";
import Services from "../components/Services";
import PrintingEquipment from "../components/PrintingEquipment";
import CTA from "../components/CTA";
import About from "../components/About";
import TrustedCompanies from "../components/TrustedCompanies";

const Home = () => {

    return (
        <div className="bg-white">
            <header className="bg-gradient-to-r to-cyan-500 from-blue-600 text-white px-2">
                <NavBar />
                <section className="flex items-center py-10">
                    <Hero />
                </section>
            </header>
            <section id="about" className="py-8 ">
                <About />
            </section>
            <section className="py-8 bg-dark-blue text-white">
                <MissionAndVision />
            </section>
            <section className="py-8 px-2 bg-cyan-400">
                <Features />
            </section>
            <section id="services" className="">
                <PrintingEquipment />
            </section> 
            <section>
                <Services />
            </section> 
            <section className="py-8 bg-dark-blue text-white">
                <Testimonials />
            </section>
            <section className="py-20">
                <TrustedCompanies />
            </section>
            <section className="py-20 bg-blue-600">
                <CTA />
            </section>
            <footer id="contact" className="py-16 px-4 bg-gray-900 text-gray-500">
                <Footer />
            </footer>
        </div>
     );
}
 
export default Home;