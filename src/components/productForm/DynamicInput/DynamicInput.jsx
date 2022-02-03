import React, {useState} from "react";
import useWidth from "../../../hooks/useWidth";
import styles from "./DynamicInput.module.css";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";


export const DynamicInput = ({
  validation,
  type,
  name,
  placeholder,
  label,
  errorMessage,
  value,
  handleOpinion
}) => {
  const [active, setActive] = useState(false)

  const activeFalse = ()=> setActive(false)
  const activeTrue = ()=> setActive(true)

  // Extraemos el estado del hook useWidth
  let {innerWidth} = useWidth()

  return (
    <div className={[styles.container, innerWidth > 768 ? styles.gc1 : styles.gc2].join(" ")}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={[styles.groupInput, (
        active === true 
        ? styles.inputBorderActive : (value.ok === false
        ? styles.inputBorderError : styles.inputBorder)
      )].join(" ")}>
        <input
          autoComplete="off"
          className={styles.input}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value.value}
          onChange={handleOpinion}
          onKeyUp={validation}
          onBlur={validation, activeFalse}
          onFocus={activeTrue}
        />
        <div className={styles.validationIcons}>
          {/* {value.ok === true && <span>V</span>}
          {value.ok === false && <span>X</span>} */}
          {value.ok === true && <AiFillCheckCircle color="#28a745" />}
          {value.ok === false && <AiFillCloseCircle color="var(--red)" />}
        </div>
      </div>
      <div className={styles.errorInput}>
        {value.ok === false && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};
