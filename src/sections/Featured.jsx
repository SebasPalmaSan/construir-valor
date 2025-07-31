import { useEffect, useState } from "react";
import featuredData from "../assets/data/featuredData.json";
import { useMetadata } from "../utils/MetadataContext";

const Featured = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { setTitle, setDescription, activeSection } = useMetadata();

  useEffect(() => {
    setFeaturedItems(featuredData);
  }, []);

  useEffect(() => {
    if (activeSection === "featured") {
      setTitle("Obras destacadas | Construir Valor - Obras en CABA y GBA");
      setDescription(
        "Explora nuestras obras destacadas en Construir Valor. Proyectos que reflejan calidad y compromiso en CABA y GBA."
      );
    }
  }, [activeSection, setTitle, setDescription]);

  const openModal = (images, title) => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setCurrentImageIndex(0);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImages([]);
    setCurrentTitle("");
    document.body.style.overflow = "auto";
  };

  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-secondary-900 text-center text-3xl md:text-6xl font-primary mb-12">
          Obras destacadas
        </h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-auto flex flex-col items-center cursor-pointer"
              onClick={() => openModal(item.images, item.title)}
            >
 
              <div className="relative group bg-white rounded-md overflow-hidden shadow-md">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-72 h-72 object-cover hover:opacity-80 transition duration-300"
                />


                <div className="absolute inset-0 bg-secondary-900 bg-opacity-80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 text-sm text-center transition duration-300 line-clamp-3">
                  <span>{item.review}</span>
                </div>
              </div>

              <div className="p-4 font-secondary text-center w-full">
                <h3 className="font-normal text-lg text-secondary-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary-900 mb-1">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-secondary-900 bg-opacity-90 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
    
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl font-bold z-50"
            >
              &times;
            </button>

            {currentImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? currentImages.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
                >
                  ❮
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === currentImages.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
                >
                  ❯
                </button>
              </>
            )}

   
            <div className="max-w-6xl mx-auto px-4 py-20 text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 font-primary">
                {currentTitle}
              </h2>

              {featuredItems.find((item) => item.title === currentTitle)
                ?.review && (
                <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto font-secondary italic">
                  {
                    featuredItems.find((item) => item.title === currentTitle)
                      .review
                  }
                </p>
              )}

              <div className="flex justify-center">
                <img
                  src={currentImages[currentImageIndex]}
                  alt={`Imagen ${currentImageIndex + 1}`}
                  className="w-full max-w-4xl object-contain max-h-[80vh] rounded-md shadow-md transition"
                />

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Featured;