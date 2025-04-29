import Button from '../components/buttons/Button';
import Image from '../../public/images/image1.png'; 

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center">
      {/* Imagen de fondo */}
      <img
        src={Image}
        alt="Banner Construir Valor"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura para mejor lectura */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-primary font-medium mb-6 mt-24 leading-tight uppercase">
          Creamos valor <br />
          construyendo futuro
        </h1>

        <div className='mt-20'>
            <Button variant="primary">
                Conocé nuestras obras
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
