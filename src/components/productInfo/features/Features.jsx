import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import styles from "./Features.module.css"

const Features = () => {
  const { texts } = useContext(LanguageContext);
  const textsFeatures = Object.values(texts.productInfo.features);

  return (
    <div>
      {textsFeatures.map((el, index) => {
        return (
          <div key={index} className={styles.features}>
            <div className={styles.title}>
              <h4>{el.title}</h4>
            </div>
            {el.properties.map((el, index) => {
              return <div key={index} className={styles.properties}>
                <p className={styles.property}><b>{el.title}</b></p>
                <p>{el.text}</p>
              </div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Features;
