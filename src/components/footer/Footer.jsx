import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Logo from '/public/images/logos/construir valor_logo blanco.png'; 

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white py-8 px-4 border-t-4 border-accent-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="Construir Valor logo"
            className="w-80 h-auto"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col md:flex-row md:gap-16 text-sm md:text-lg font-secondary text-white text-center md:text-left">
          {/* Dirección */}
          <div className="space-y-1 text-secondary-200">
            <p className="flex items-center justify-center md:justify-start gap-2 text-primary-500">
              <MdLocationOn />
              <span className='text-secondary-200'>
                Av. Lacarra 391 - CABA
              </span>
            </p>
            <p>Buenos Aires, Argentina</p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-primary-500">
              <MdPhone />
              <span className='text-secondary-200'>
                (011) 4123-4567
              </span>
            </p>
          </div>

          {/* Redes sociales y contacto */}
          <div className="space-y-1 text-secondary-200 mt-4 md:mt-0">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaInstagram className="text-primary-500" />
              @construirvalor
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaFacebook className="text-primary-500" />
              construirvalorok
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MdEmail className="text-primary-500" />
              info@construirvalor.com
            </p>
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
