import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Logo from '/public/images/logos/construir valor_logo blanco.png';
import IsoLogo from '/public/images/logos/construir valor_iso blanco.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white py-8 px-4 border-t-4 border-accent-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          {/* Logo completo para pantallas medianas y grandes */}
          <img
            src="https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747769734/construir_valor_logo_blanco_nbwqqb.png"
            alt="Construir Valor logo"
            className="hidden md:block w-80 h-auto"
          />
          {/* Iso logo para pantallas móviles */}
          <img
            src="https://res.cloudinary.com/dnxlkkx8s/image/upload/v1747769734/construir_valor_iso_blanco_mfsqsa.png"
            alt="Construir Valor iso logo"
            className="block md:hidden w-32 h-auto"
          />
        </Link>

        {/* Info */}
        <div className="flex flex-col md:flex-row md:gap-16 text-xl md:text-2xl font-secondary text-white text-center md:text-left">
          {/* Dirección */}
          <div className="space-y-1 text-secondary-200">
            <p className="flex items-center justify-center md:justify-start gap-2 text-primary-500">
              <MdLocationOn />
              <span className="text-secondary-200">
                Av. Lacarra 391 - CABA
              </span>
            </p>
            <p>Buenos Aires, Argentina</p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-primary-500">
              <MdPhone />
              <span className="text-secondary-200 text-lg">
                (+54) 9 11 7168-6433
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-primary-500">
              <MdPhone />
              <span className="text-secondary-200 text-lg">
                (+54) 9 11 2646-0547
              </span>
            </p>
              
          </div>

          {/* Redes sociales y contacto */}
          <div className="space-y-1 text-secondary-200 mt-4 md:mt-0">
            <Link to="https://www.instagram.com/construirvalor">
              <p className="flex items-center justify-center hover:text-primary-500 transition duration-300 md:justify-start gap-2">
                <FaInstagram className="text-primary-500" />
                @construirvalor
              </p>
            </Link>
            
            <Link to="mailto:info@construirvalor.com.ar" className="flex items-center justify-center hover:text-primary-500 transition duration-300 md:justify-start gap-2">
              <MdEmail className="text-primary-500" />
              info@construirvalor.com.ar
            </Link>
          </div>
        </div>
      </div>

      {/* Footer legal */}
      <div className="text-center mt-6 text-xs text-secondary-200 font-secondary">
        ©2025 Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;