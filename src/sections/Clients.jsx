import { useEffect, useState } from "react";
import { useMetadata } from "../utils/MetadataContext";
import Image1 from "../../public/images/image6.jpg";
import Image2 from "../../public/images/image7.png";
import Image3 from "../../public/images/image8.png";

const clientsData = [
  {
    name: "Juan Pérez (Empresa Constructora El Pilar)",
    image: Image1,
    comment:
      "Contratamos el servicio para una obra edilicia de gran envergadura en la zona de Palermo...",
  },
  {
    name: "Lucía Fernández (Gerente de Compras, Centro Médico Vital)",
    image: Image2,
    comment:
      "Nuestra institución necesitaba una remodelación integral de varios sectores clave...",
  },
  {
    name: "Roberto Méndez (Director General, Granja Tres Arroyos S.A.)",
    image: Image3,
    comment:
      "Encargamos un proyecto industrial complejo con necesidades técnicas específicas...",
  },
];

const Clients = () => {
  const { setTitle, setDescription, activeSection } = useMetadata();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (activeSection === "clients") {
      setTitle("Nuestros Clientes | Construir Valor - Obras en CABA y GBA");
      setDescription(
        "Descubre lo que nuestros clientes opinan sobre Construir Valor. Proyectos destacados en CABA y GBA."
      );
    }
  }, [activeSection, setTitle, setDescription]);

  const selectedClient = clientsData[selectedIndex];

   return (
    <section id="clients" className="bg-secondary-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center text-3xl md:text-5xl font-primary mb-12">
          Nuestros Clientes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              {clientsData.map((client, index) => (
                <img
                  key={index}
                  src={client.image}
                  alt={client.name}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-md cursor-pointer transition duration-300 ${
                    selectedIndex === index
                      ? "ring-4 ring-primary-500 scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

            <p className="text-secondary-200 text-sm md:text-lg text-center lg:text-left max-w-md italic font-secondary">
              “{selectedClient.comment}”
            </p>
          </div>

          {/* LADO DERECHO */}
          <div className="flex flex-col items-center lg:items-end text-white">
            <img
              src={selectedClient.image}
              alt={selectedClient.name}
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover mb-4"
            />
            <p className="font-secondary text-center lg:text-right text-lg md:text-xl">
              {selectedClient.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;