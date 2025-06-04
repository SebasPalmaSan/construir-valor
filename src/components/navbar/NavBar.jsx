import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

import NavLink from './NavLink';
import Button from '../buttons/Button';
import QuoteModal from '../modals/QuoteModal';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Cierra el menú móvil si está abierto
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">

      <div className="flex items-center justify-between h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => handleScroll('banner')}>
          <img
            src="https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747769734/construir_valor_iso_color-removebg-preview_mdqezh.png"
            alt="Construir Valor"
            className="h-18 object-cover block md:hidden"
          />
          <img
            src="https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747769736/construir_valor_logo_color_fwo3fm.jpg"
            alt="Construir Valor"
            className="h-20 object-cover hidden md:block"
          />
        </Link>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" onClick={() => handleScroll('about-us')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
            Nosotros
          </Link>
          <Link to="/" onClick={() => handleScroll('services')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
            Servicios
          </Link>
          <Link to="/" onClick={() => handleScroll('featured')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
            Obras
          </Link>
          {/* <Link to="/" onClick={() => handleScroll('clients')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
            Clientes
          </Link> */}
          <Link to="/" onClick={() => handleScroll('contact')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
            Contacto
          </Link>
            <button onClick={() => setShowModal(true)}>
              <Button variant="primary" size="sm">Solicitar presupuesto</Button>
            </button>

        </nav>

        {/* Menú hamburguesa - SIEMPRE visible en móviles */}
        <div className="block sm:hidden z-50">
          <button onClick={toggleMenu} aria-label="Abrir menú">
            {isOpen ? (
              <IoClose className="text-4xl text-primary-500" />
            ) : (
              <IoMenu className="text-4xl text-primary-500" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay y menú lateral */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-white z-50 px-6 pt-6 flex flex-col md:hidden"
            >
              <div className="self-end mb-8">
                <button onClick={toggleMenu} aria-label="Cerrar menú">
                  <IoClose className="text-4xl text-primary-500" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                <Link to="/" onClick={() => handleScroll('banner')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
                  Inicio
                </Link>
                <Link to="/" onClick={() => handleScroll('about-us')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
                  Nosotros
                </Link>
                <Link to="/" onClick={() => handleScroll('services')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
                  Servicios
                </Link>
                <Link to="/" onClick={() => handleScroll('featured')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
                  Obras
                </Link>
                <Link to="/" onClick={() => handleScroll('clients')} className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg">
                  Clientes
                </Link>
                <button onClick={() => setShowModal(true)}>
                  <Button variant="primary" size="sm">Solicitar presupuesto</Button>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <QuoteModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </header>
  );
};

export default Navbar;