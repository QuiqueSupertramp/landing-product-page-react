import React, { useContext } from "react";
import OpinionsContext from "../../../../context/OpinionsContext";
import Stars from "../../../stars/Stars";

import styles from "./Valoration.module.css"


const Valoration = () => {
  const { opinions, opinionsAverage } = useContext(OpinionsContext);
  return (
    <div className={styles.valoration}>
      <span className={styles.average}>{opinionsAverage.toPrecision(3)}</span>
      <Stars number={opinionsAverage} />
      <span className={styles.opinions}>{opinions.length} opiniones</span>
    </div>
  );
};

export default Valoration;
