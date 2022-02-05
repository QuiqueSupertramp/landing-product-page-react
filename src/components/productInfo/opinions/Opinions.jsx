import React from "react";
import Stats from "./stats/Stats";
import Valoration from "./valoration/Valoration";
import styles from "./Opinions.module.css";
import Comments from "./Comments/Comments";
import CallOpinion from "./CallOpinion/CallOpinion";

const Opinions = () => {

  return (
    <div className={styles.opinions}>
      <div className={styles.opinionsWrapper}>
        <Valoration />
        <div className={styles.separator1}></div>
        <Stats />
        <div className={styles.separator2}></div>
        <CallOpinion />
      </div>
      <div className="comments">
        <Comments />
      </div>
    </div>
  );
};

export default Opinions;
