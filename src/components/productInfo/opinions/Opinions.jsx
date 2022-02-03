import React, { useContext } from "react";
import OpinionsContext from "../../../context/OpinionsContext";
import Stats from "./stats/Stats";
import Valoration from "./valoration/Valoration";
import styles from "./Opinions.module.css";
import Comments from "./Comments/Comments";
import { BiUserVoice } from "react-icons/bi";


const Opinions = () => {
  const { opinions } = useContext(OpinionsContext);

  return (
    <div className={styles.opinions}>
      <div className={styles.opinionsWrapper}>
        <Valoration />
        <div className={styles.separator1}></div>
        <Stats />
        <div className={styles.separator2}></div>
        <div className={styles.opinionCall}>
          <BiUserVoice color="#add8e6" size="100px"/>
          <button>Escribe tu opinión</button>
        </div>
      </div>
      <div className="comments">
        <Comments />
      </div>
    </div>
  );
};

export default Opinions;
