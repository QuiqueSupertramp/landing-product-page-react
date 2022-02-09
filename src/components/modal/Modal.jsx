import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, toggleIsOpen, children, width, padding }) => {
  const style = {
    width: width || "fit-content",
    padding: padding || "0px",
  };

  return (
    <>
      {isOpen && (
        <div className={styles.background}>
          <div className={styles.modal} style={style}>
            <button className={styles.closeBtn} onClick={toggleIsOpen}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
