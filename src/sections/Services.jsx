import { useEffect } from "react";
import { useMetadata } from "../utils/MetadataContext";

const services = [
  { title: "Obras privadas e industriales", year: 2012, image: "https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747767132/obras-industriales_wgxdgk.png"},
  { title: "Home services", year: 2014, image: "https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747767128/home-services_rbu2ar.jpg" },
  { title: "Reformas", year: 2012, image: "https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747767132/reformas_wwhhrg.jpg" },
  { title: "Reparaciones de techos", year: 2012, image: "https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747767134/reparacion-techo_dtjvkl.png" },
];

const Services = () => {
  const { setTitle, setDescription, activeSection } = useMetadata();

  useEffect(() => {
    if (activeSection === "services") {
      setTitle("Servicios | Construir Valor - Obras en CABA y GBA");
      setDescription(
        "En Construir Valor, ofrecemos soluciones integrales en arquitectura, ingeniería y construcción. Descubre nuestros servicios."
      );
    }
  }, [activeSection, setTitle, setDescription]);

  return (
    <section id="services" className="bg-secondary-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center text-3xl md:text-6xl font-primary mb-12">
          Servicios
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible">
          {services.map((service, index) => (
            <div
              className="flex-shrink-0 w-72 sm:w-auto flex flex-col items-center"
              key={index}
            >
              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="p-4 font-secondary">
                <h3 className="font-normal text-lg text-white mb-2">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;