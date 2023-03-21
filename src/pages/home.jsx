import Footer from "../components/footer";
import Hero from "../components/hero";
import NavBar from "../components/navBar";
import Features from "../components/features";
import MissionVision from "../components/missionVision";
import Testimonials from "../components/testimonial";
import SectionHead from "../components/common/sectionHead";
import Services from "../components/services";
import PrintingEquipment from "../components/printingEquipment";
import CTA from "../components/cta";
import About from "../components/about";

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
                <MissionVision />
            </section>
            <section className="py-8 px-2 bg-cyan-500">
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