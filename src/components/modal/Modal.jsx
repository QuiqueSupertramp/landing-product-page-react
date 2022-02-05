import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, toggleIsOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.white}>
          <div className={styles.background}>
            <div className={styles.modal}>
              <button className={styles.closeBtn} onClick={toggleIsOpen}>
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
