import Image1 from '../../public/images/image5.png';

const featuredItems = [
  { title: 'Palermo', year: 2020, image: Image1 },
  { title: 'Saavedra', year: 2019, image: Image1 },
  { title: 'Recoleta', year: 2021, image: Image1 },
  { title: 'Avellaneda', year: 2018, image: Image1 },
  { title: 'San Martín', year: 2017, image: Image1 },
  { title: 'Bahia Blanca', year: 2022, image: Image1 },
  { title: 'Punta Alta', year: 2016, image: Image1 },
  { title: 'Banfield', year: 2015, image: Image1 },
];

const Featured = () => {
  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-secondary-900 text-center text-2xl md:text-6xl font-primary mb-12">
          Obras destacadas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
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
                <p className="flex justify-center text-sm text-secondary-900">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
