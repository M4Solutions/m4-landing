import Carousel from "../components/common/carousel"
import Service from "../components/service";
import Footer from "../components/footer";
import Hero from "../components/hero";
import NavBar from "../components/navBar";
import { services } from "../services/printingServices";
import Features from "../components/features";
import Testimonials from "../components/testimonial";
import Stats from "../components/stats";

const Home = () => {
    return (
        <div className="bg-white">
            <header className="bg-ash">
                <NavBar />
                <Hero />
            </header>
            <Features />
            <section className="features text-white py-5">
               {
                services.map((service, idx) => {
                    return (
                        <Service key={service.id} title={service.title} body={service.body} image={service.image} background={idx % 2 ? 'dark-blue' : 'light-blue'} />
                    )
                })
               }
            </section> 
            <section>
                
            </section>
            <section className="mx-3">
                <div className="container text-center">
                    <h2 className="heading-3 max-w-2xl mx-auto">
                        We are trusted by over
                        <span className="text-dark-blue"> 35K </span> 
                        customers including both businesses and individuals

                    </h2>
                </div>
                <Testimonials />
            </section>
        
            <section className="py-5 bg-black text-white">
                <Footer />
            </section>
        </div>
     );
}
 
export default Home;