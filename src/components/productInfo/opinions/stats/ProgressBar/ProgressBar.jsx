import { AiFillStar } from "react-icons/ai";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ stars, max, value }) => {
  let percentage = parseInt((value / max) * 100);

  return (
    <div className={styles.progressBar}>
      <label className={styles.label}>
        <p>{stars}</p>
        <AiFillStar color="#daa520" />
      </label>
      <progress className={styles.bar} max={max} value={value}></progress>
      <span className={styles.percentage}>{percentage}%</span>
    </div>
  );
};

export default ProgressBar;
