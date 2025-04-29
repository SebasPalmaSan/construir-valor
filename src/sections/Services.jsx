import Image from '../../public/images/image4.jpg'

const services = [
    {
      title: 'Edilicio',
      year: 2012,
      image: Image
    },
    {
      title: 'Público',
      year: 2014,
      image: Image
    },
    {
      title: 'Comercial',
      year: 2014,
      image: Image
    },
    {
      title: 'Industrial',
      year: 2012,
      image: Image
    },
  ];
  
  const Services = () => {
    return (
      <section id="servicios" className="bg-secondary-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-2xl md:text-6xl font-primary mb-12">
            Servicios
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div className='flex flex-col items-center' key={index}>
                <div key={index} className="bg-white rounded-md overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-72 h-72 object-cover"
                  />
                </div>
                  <div className="p-4 font-secondary">
                    <h3 className="font-normal text-lg text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="flex justify-center text-sm text-secondary-200">{service.year}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  