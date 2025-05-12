import { createContext, useContext, useState, useEffect } from "react";

const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
  const [title, setTitle] = useState("Construir Valor");
  const [description, setDescription] = useState(
    "Ponete en contacto con Construir Valor. Realizamos construcciones y reformas en CABA y GBA."
  );
  const [activeSection, setActiveSection] = useState("banner");

  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [title, description]);

  return (
    <MetadataContext.Provider
      value={{ setTitle, setDescription, activeSection, setActiveSection }}
    >
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => useContext(MetadataContext);