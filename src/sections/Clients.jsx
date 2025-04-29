import { useEffect, useState } from "react";
import Image1 from "../../public/images/image6.jpg";
import Image2 from "../../public/images/image7.png";
import Image3 from "../../public/images/image8.png";

const clientsData = [
  {
    name: "Juan Pérez (Empresa Constructora El Pilar)",
    image: Image1,
    comment: "Contratamos el servicio para una obra edilicia de gran envergadura en la zona de Palermo, y desde el primer contacto notamos profesionalismo, puntualidad y atención al detalle. El equipo no solo cumplió con los tiempos pactados, sino que también aportó soluciones innovadoras a desafíos imprevistos que surgieron durante la ejecución del proyecto. La calidad de los materiales y la mano de obra.",
  },
  {
    name: "Lucía Fernández (Gerente de Compras, Centro Médico Vital)",
    image: Image2,
    comment: "Nuestra institución necesitaba una remodelación integral de varios sectores clave, incluyendo áreas de atención al paciente. Desde el primer momento, el equipo nos brindó confianza con una propuesta clara y ajustada a nuestras necesidades. Nos sorprendió gratamente la organización del trabajo y cómo lograron mantener la actividad del centro sin interrupciones significativas durante la obra.",
  },
  {
    name: "Roberto Méndez (Director General, Granja Tres Arroyos S.A.)",
    image: Image3,
    comment: "Encargamos un proyecto industrial complejo con necesidades técnicas específicas, y la experiencia fue excelente de principio a fin. Nos ayudaron a optimizar los espacios y garantizar la seguridad estructural sin comprometer la operatividad del área. Se adaptaron a nuestros horarios productivos, evitando paradas innecesarias y asegurando que la obra avanzara sin afectar el flujo del negocio.",
  },
];

const Clients = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
      }, 20000);
  
      return () => clearInterval(interval);
    }, []);
  
    const selectedClient = clientsData[selectedIndex];
  
    return (
      <section id="clients" className="bg-secondary-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-2xl md:text-5xl font-primary mb-12">
            Nuestros Clientes
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LADO IZQUIERDO */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex space-x-4 mb-6">
                {clientsData.map((client, index) => (
                  <img
                    key={index}
                    src={client.image}
                    alt={client.name}
                    onClick={() => setSelectedIndex(index)}
                    className={`w-48 h-48 object-cover rounded-md shadow-md cursor-pointer transition duration-300 ${
                      selectedIndex === index
                        ? "ring-2 ring-white scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>
  
              <p className="text-secondary-200 text-sm md:text-lg text-center md:text-right max-w-md italic font-secondary">
                “{selectedClient.comment}”
              </p>
            </div>
  
            {/* LADO DERECHO */}
            <div className="flex flex-col items-center md:items-end text-white">
              <img
                src={selectedClient.image}
                alt={selectedClient.name}
                className="w-full max-w-xl md:h-[500px] rounded-lg shadow-lg object-cover mb-4"
              />
              <p className="font-secondary">{selectedClient.name}</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Clients;
