import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const FORM_LINKS = {
  reformas: "https://forms.clickup.com/90131266734/p/f/2ky3vz5e-4133/FZVMA63FKECR2BI3DJ/formulariode-reformas",
  home: "https://forms.clickup.com/90131266734/p/f/2ky3vz5e-4413/SFL392QR3JV4XGEHJH/formulariode-home-service",
  techos: "https://forms.clickup.com/90131266734/p/f/2ky3vz5e-4733/CPFOEPLPT74QCNCSEN/formulario-techos"
};

const QuoteModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    needsReform: false,
    needsHome: false,
    needsTechos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      location: form.location,
      budget: form.budget,
      needsReform: form.needsReform ? 'Sí' : 'No',
      needsHome: form.needsHome ? 'Sí' : 'No',
      needsTechos: form.needsTechos ? 'Sí' : 'No',
    };

    emailjs.send(
      'service_s4y4i4k', // <- reemplazá con tu SERVICE ID
      'template_2jiafto', // <- reemplazá con tu TEMPLATE ID
      templateParams,
      'kYw5_1QY8nKKFEg5-' // <- reemplazá con tu PUBLIC KEY
    )
    .then(() => {
      // Abrir el formulario correspondiente
      if (form.needsReform) {
        window.open(FORM_LINKS.reformas, "_blank");
      } else if (form.needsHome) {
        window.open(FORM_LINKS.home, "_blank");
      } else if (form.needsTechos) {
        window.open(FORM_LINKS.techos, "_blank");
      }
      alert('Gracias por tu solicitud. Nos pondremos en contacto pronto.');
      onClose();
    })
    .catch((error) => {
      console.error('Error al enviar el email:', error);
      alert('Ocurrió un error al enviar tu solicitud. Por favor intentá más tarde.');
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div
              className="bg-white rounded-2xl p-6 w-full max-w-lg relative font-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4  text-2xl md:text-5xl text-primary-500"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Solicitar Presupuesto</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y apellido"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
                <select
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="">¿Reside en CABA o GBA?</option>
                  <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                  <option value="GBA">Gran Buenos Aires</option>
                </select>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="">¿Está dispuesto a gastar entre...?</option>
                  <option value="800000-1000000">$800.000 - $1.000.000</option>
                  <option value="1100000-1500000">$1.100.000 - $1.500.000</option>
                  <option value="1500000+">$1.500.000 o más</option>
                </select>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="needsReform"
                      checked={form.needsReform}
                      onChange={handleChange}
                    />
                    Reformas
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="needsHome"
                      checked={form.needsHome}
                      onChange={handleChange}
                    />
                    Home services
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="needsTechos"
                      checked={form.needsTechos}
                      onChange={handleChange}
                    />
                    Techos
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition"
                >
                  Enviar solicitud
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;