import { useState } from "react";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import Button from "../components/buttons/Button";
import { useMetadata } from "../utils/MetadataContext";

const Contact = () => {
  
  const { setTitle, setDescription, activeSection } = useMetadata();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    mail: "",
    mensaje: "",
  });

  useEffect(() => {
    if (activeSection === "contact") {
      setTitle("Contacto | Construir Valor - Obras en CABA y GBA");
      setDescription(
        "Ponete en contacto con Construir Valor. Realizamos construcciones y reformas en CABA y GBA. Completá el formulario y te respondemos a la brevedad."
      );
    }
  }, [activeSection, setTitle, setDescription]);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_s4y4i4k',
      'template_2jiafto',
      formData,
      'kYw5_1QY8nKKFEg5-'
    )
    .then(() => {
      alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        mail: "",
        mensaje: "",
      });
    })
    .catch((error) => {
      console.error("Error al enviar mensaje:", error);
      alert("Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente.");
    });
  };

  return (
    <section id="contacto" className="bg- py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-secondary-900 text-center text-3xl md:text-6xl font-primary mb-12">
          Contacto
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 font-secondary">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="p-3 rounded-md bg-secondary-100 text-black"
            required
          />

          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="p-3 rounded-md bg-secondary-100 text-black"
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="p-3 rounded-md bg-secondary-100 text-black"
            required
          />

          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={formData.mail}
            onChange={handleChange}
            className="p-3 rounded-md bg-secondary-100 text-black"
            required
          />

          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="p-3 rounded-md bg-secondary-100 text-black md:col-span-2 h-40 resize-none"
            required
          />

          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
