import { useEffect } from "react";
import { useMetadata } from "../utils/MetadataContext";
import Image from "../../public/images/image3.png";

const AboutUs = () => {
  const { setTitle, setDescription, activeSection } = useMetadata();

  useEffect(() => {
    if (activeSection === "about-us") {
      setTitle("Nosotros | Construir Valor - Obras en CABA y GBA");
      setDescription(
        "En Construir Valor, creamos más que obras: creamos confianza, vínculos duraderos y espacios pensados. Con más de una década de experiencia, ofrecemos soluciones integrales en arquitectura, ingeniería y construcción."
      );
    }
  }, [activeSection, setTitle, setDescription]);

  return (
    <section id="about-us" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={Image}
            alt="Imagen Nosotros"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="flex justify-center text-3xl md:text-6xl font-primary text-secondary-900 mb-4">
            ¿Quiénes somos?
          </h2>
          <p className="flex justify-center font-secondary text-secondary-900 leading-relaxed text-base md:text-lg">
            En Construir Valor, creamos más que obras: creamos confianza, vínculos duraderos y espacios pensados.
            Desde nuestros comienzos, asumimos un compromiso firme con la calidad, la innovación y la responsabilidad, ofreciendo soluciones integrales en arquitectura, ingeniería y construcción. Con más de una década de experiencia en proyectos edilicios, comerciales, industriales y del ámbito público, nuestro equipo de profesionales combina pasión y conocimiento en cada obra.
            Nuestro mayor diferencial es el acompañamiento cercano: guiamos a cada cliente en todas las etapas del proceso, desde la idea inicial hasta la entrega final, garantizando un servicio personalizado y una ejecución de excelencia. Los proyectos que realizamos se destacan por su funcionalidad, diseño y solidez, reflejando nuestra visión de construir con valor y para el futuro.

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;