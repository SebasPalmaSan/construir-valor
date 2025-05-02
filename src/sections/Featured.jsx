import Image1 from '../../public/images/obras/boedo2025-1.png';
import Image2 from '../../public/images/obras/Canning-pileta-2025.jpg';
import Image3 from '../../public/images/obras/Muelle-82.png';
import Image4 from '../../public/images/obras/Galpon-2500mts.JPG';
import Image5 from '../../public/images/obras/Pileta.jpg';
import Image6 from '../../public/images/obras/Tinglado.JPG';

const featuredItems = [
  { title: 'Boedo', year: 2025, image: Image1 },
  { title: 'Pileta - Canning', year: 2025, image: Image2 },
  { title: 'Muelle 82', year: 2021, image: Image3 },
  { title: 'Galpón 2500 mts', year: 2018, image: Image4 },
  { title: 'Pileta', year: 2019, image: Image5 },
  { title: 'Tinglado C.A.S.I', year: 2022, image: Image6 },
  { title: 'Avellaneda', year: 2016, image: Image1 },
  { title: 'Banfield', year: 2015, image: Image1 },
];

const Featured = () => {
  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-secondary-900 text-center text-2xl md:text-6xl font-primary mb-12">
          Obras destacadas
        </h2>

        {/* Contenedor con scroll horizontal en móviles */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible">
          {featuredItems.map((item, index) => (
            <div
              className="flex-shrink-0 w-72 sm:w-auto flex flex-col items-center"
              key={index}
            >
              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="p-4 font-secondary">
                <h3 className="font-normal text-lg text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="flex justify-center text-sm text-secondary-900">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;