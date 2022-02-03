import { useContext } from "react";
import OpinionsContext from "../../../../context/OpinionsContext";
import useBars from "../../../../hooks/useBars";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./Stats.module.css";

const Stats = () => {
  const { opinions } = useContext(OpinionsContext);
  const {bars} = useBars(opinions)

  return (
    <div className={styles.Stats}>
          <ProgressBar stars="5" max={opinions.length} value={bars[5]} />
          <ProgressBar stars="4" max={opinions.length} value={bars[4]} />
          <ProgressBar stars="3" max={opinions.length} value={bars[3]} />
          <ProgressBar stars="2" max={opinions.length} value={bars[2]} />
          <ProgressBar stars="1" max={opinions.length} value={bars[1]} />

    </div>
  );
};

export default Stats;
