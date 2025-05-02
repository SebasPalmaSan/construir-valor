import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import Banner from "../../sections/Banner";
import AboutUs from "../../sections/AboutUs";
import Services from "../../sections/Services";
import Featured from "../../sections/Featured";
import Clients from "../../sections/Clients";
import Contact from "../../sections/Contact";

const Root = () => {
  return (
    <div className="root-container">
      <Navbar />
      <main>
        <section id="banner">
          <Banner />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="featured">
          <Featured />
        </section>
        <section id="clients">
          <Clients />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Root;