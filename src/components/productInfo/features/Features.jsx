import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import styles from "./Features.module.css"

const Features = () => {
  const { texts } = useContext(LanguageContext);
  const textsFeatures = Object.values(texts.productInfo.features);
  console.log("textsFeatures", textsFeatures);

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
          //   <table key={index}>
          //     <thead>
          //       <tr>
          //         <th colSpan="2">{el.title}</th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //       {el.properties.map((el, index) => {
          //         return (
          //           <tr key={index}>
          //             <td>{el.title}</td>
          //             <td>{el.text}</td>
          //           </tr>
          //         );
          //       })}
          //     </tbody>
          //   </table>
        );
      })}
    </div>
  );
};

export default Features;
