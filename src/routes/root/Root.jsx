import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import Banner from "../../sections/Banner";
import AboutUs from "../../sections/AboutUs";
import Services from "../../sections/Services";
import Featured from "../../sections/Featured";
import Clients from "../../sections/Clients";
import Contact from "../../sections/Contact";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import Notifications from "../../components/Notifications";
import { useMetadata } from "../../utils/MetadataContext";

const Root = () => {
  const { setActiveSection } = useMetadata();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "banner";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <div className="root-container">
      <Notifications />
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
      {/* Botón de WhatsApp */}
      <Link
        to="https://wa.me/5491171686433"
        className="fixed bottom-35 right-2 md:bottom-28 md:right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 9999 }}
      >
        <IoLogoWhatsapp size={40} />
      </Link>
    </div>
  );
};

export default Root;