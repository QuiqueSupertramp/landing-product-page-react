import { useContext } from "react";
import OpinionsContext from "../../../../context/OpinionsContext";
import Stars from "../../../stars/Stars";
import styles from "./Comments.module.css";
import {
  BsEmojiAngry,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiWink,
  BsEmojiSunglasses,
} from "react-icons/bs";

const Comments = () => {
  const { opinions } = useContext(OpinionsContext);
  const opinionsArray = Object.values(opinions);
  const opinionsSortByDate = opinionsArray.sort((a, b) => {
    if (a.date > b.date) return -1;
    else return 1;
  });

  const formatDate = (date) => new Date(date).toLocaleDateString();

  const icons = {
    1: <BsEmojiAngry size="50px" color="orange" />,
    2: <BsEmojiExpressionless size="50px" color="orange" />,
    3: <BsEmojiSmile size="50px" color="orange" />,
    4: <BsEmojiWink size="50px" color="orange" />,
    5: <BsEmojiSunglasses size="50px" color="orange" />,
  };

  return (
    <div>
      {opinionsSortByDate.map((el, index) => {
        return (
          <>
            <div key={index} className={styles.comment}>
              <h2 className={styles.name}>{el.name}</h2>
              <span className={styles.date}>{formatDate(el.date)}</span>
              <div className={styles.stars}>
                <Stars number={el.valoration} size="15px" />
              </div>
              <div className={styles.footer}>
                <cite className={styles.cite}>"{el.comment}"</cite>
                <div className={styles.icon}>{icons[el.valoration]}</div>
              </div>
            </div>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
