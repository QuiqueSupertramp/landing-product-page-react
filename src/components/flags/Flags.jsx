import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import styles from "./Flags.module.css"

const Flags = () => {
    const {handleLanguage} = useContext(LanguageContext)
  return <div className={styles.flags}>
      <img onClick={handleLanguage} src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="spain flag" title="español" data-language="es" />
      <img onClick={handleLanguage} src="https://flagicons.lipis.dev/flags/4x3/us.svg" alt="english flag" title="english" data-language="en" />
  </div>;
};

export default Flags;
