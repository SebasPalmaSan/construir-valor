import Image from "../../public/images/image3.png";

const AboutUs = () => {
    return (
      <section id="nosotros" className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2">
            <img
              src={Image}
              alt="Imagen Nosotros"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
  
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2">
            <h2 className="flex justify-center text-2xl md:text-6xl font-primary text-secondary-900 mb-4">
              ¿Quiénes somos?
            </h2>
            <p className="flex justify-center font-secondary text-secondary-900 leading-relaxed text-base md:text-lg">
            En Construir Valor, no solo construimos obras: construimos confianza, relaciones duraderas y espacios que trascienden generaciones. 
            Desde nuestros inicios, nos hemos comprometido con un propósito claro: brindar soluciones integrales en arquitectura, ingeniería y construcción, apostando siempre por la calidad, la innovación y la responsabilidad. 
            Somos un equipo de profesionales apasionados por lo que hacemos, con más de una década de trayectoria en el rubro edilicio, comercial, industrial y público. 
            Nuestro diferencial radica en la capacidad de acompañar a cada cliente en todas las etapas del proyecto, desde la concepción de la idea hasta la entrega final, 
            garantizando un servicio personalizado y un estándar de excelencia en cada detalle. A lo largo de los años hemos desarrollado obras que se destacan por su funcionalidad, diseño y solidez.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  