import NavLink from './NavLink';
import logo from '../../../public/images/logos/construir_valor_logo_color-removebg-preview.png';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white drop-shadow-2xl fixed w-full top-0 z-50">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Construir Valor" className="h-18 object-contain" />
          </Link>
        </div>

        {/* Links */}
        <nav className="flex space-x-8">
          <NavLink href="/" label="Inicio" />
          <NavLink href="/nosotros" label="Nosotros" />
          <NavLink href="/obras" label="Obras" />
          <NavLink href="/servicios" label="Servicios" />
          <NavLink href="/clientes" label="Clientes" />
          <Button variant='primary' size='sm'>Solicitar presupuesto</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
