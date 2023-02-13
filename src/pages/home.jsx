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

const Home = () => {

    return (
        <div className="bg-white">
            <header className="bg-ash">
                <NavBar />
                <Hero />
            </header>
            <section className="section-spacing">
                <MissionVision />
            </section>
            <section className="features section-spacing bg-ash">
                <SectionHead header={'FEATURES'} desc={'We commit to listen, understand and deliever the outcomes desiredmby our clients'}/>
                <Features />
            </section>
            <section className="text-white py-5 section-spacing bg-light-blue">
                <PrintingEquipment />
            </section> 
            <section>
                <Services />
            </section> 
            <section className="section-spacing bg-dark-blue text-white">
                <div className="text-center">
                    <SectionHead header={'REVIEWS'} desc={'What do people say?'} />
                </div>
                <Testimonials />
            </section>
            <section>
                <CTA />
            </section>
        
            <section className="section-spacing bg-black text-white">
                <Footer />
            </section>
        </div>
     );
}
 
export default Home;