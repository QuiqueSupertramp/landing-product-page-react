import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import styles from "./Description.module.css";

const Description = () => {
  const { texts } = useContext(LanguageContext);
  const textsDescription = Object.values(texts.productInfo.description);

  return (
    <div>
      <ul className={styles.ul}>
        {textsDescription.map((el, index) => {
          return (
            <li className={styles.li} key={index}>
              <strong>{el.title}</strong>
              {el.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Description;
