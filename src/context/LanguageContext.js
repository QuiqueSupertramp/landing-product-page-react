import { createContext, useEffect, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

const idiomaPreferido = localStorage.getItem("language")

const initialLanguage = idiomaPreferido || "es";


const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = async (e) => {
    setLanguage(e.target.dataset.language);
    localStorage.setItem("language", e.target.dataset.language)
  };

  useEffect(() => {
    setTexts(translations[language])
  }, [language]);
  

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
