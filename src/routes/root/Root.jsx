import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import AboutUs from "../../sections/AboutUs";
import Banner from "../../sections/Banner";
import Clients from "../../sections/Clients";
import Contact from "../../sections/Contact";
import Featured from "../../sections/Featured";
import Services from "../../sections/Services";



const Root = () => {
    return (
        <div className="root-container">
            <Navbar />

            <Banner />
            <AboutUs />
            <Services />
            <Featured />
            <Clients />
            <Contact />

            <Footer />
            
            
        </div>
    );

}

export default Root;