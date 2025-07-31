import Button from '../components/buttons/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <section className="relative w-full h-[500px] flex items-center justify-center">

      <img
        src="https://res.cloudinary.com/dnxlkkx8s/image/upload/w_1600,q_auto,f_auto/v1747767133/image1_mo0xte.png"
        alt="Banner Construir Valor"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />



      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}


      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-primary font-medium mb-6 mt-24 leading-tight uppercase">
          Creamos valor <br />
          construyendo futuro
        </h1>

        <div className='mt-20'>
          <Link to="/" onClick={() => handleScroll('featured')}  className="inline-block">
            <Button variant="primary">
                Conocé nuestras obras
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
