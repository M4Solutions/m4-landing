import Carousel from "../components/common/carousel"
import Footer from "../components/footer";
import Hero from "../components/hero";
import NavBar from "../components/navBar";
import Features from "../components/features";
import MissionVision from "../components/missionVision";
import Testimonials from "../components/testimonial";
import Stats from "../components/stats";
import SectionHead from "../components/common/sectionHead";
import Services from "../components/services";
import { useContext } from "react";
import { numberContext } from "../contexts/NumberContxt";

const Home = () => {
    const currentNumber = useContext(numberContext);
    console.log("context ==>", currentNumber)
    return (
        <div className="bg-white">
            <header className="bg-ash">
                <NavBar />
                <Hero />
            </header>
            <section className="section-spacing">
                <MissionVision />
            </section>
            <section className="section-spacing bg-ash">
                <SectionHead header={'FEATURES'} desc={'We commit to listen, understand and deliever the outcomes desiredmby our clients'}/>
                <Features />
            </section>
            <section className="features text-white py-5 bg-ash">
                <SectionHead header={'SERVICES'} desc={'What we do...'}/>
                <Services />
            </section> 
            <section className="section-spacing">
                <div className="text-center">
                    <SectionHead header={'REVIEWS'} desc={'What do people say?'} />
                    <h2 className="">
                        We are trusted by over
                        <span className="text-dark-blue"> 35K </span> 
                        customers including both businesses and individuals

                    </h2>
                </div>
                <Testimonials />
            </section>
        
            <section className="section-spacing bg-black text-white">
                <Footer />
            </section>
        </div>
     );
}
 
export default Home;