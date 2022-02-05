import React, { useState } from "react";
import styles from "../Opinions.module.css";

import { BiUserVoice } from "react-icons/bi";
import Modal from "../../../modal/Modal";
import ProductForm from "../../../productForm/Form/ProductForm";

const CallOpinion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.opinionCall}>
      <BiUserVoice color="#add8e6" size="100px" />

      <button onClick={toggleIsOpen}>Escribe tu opinión</button>

      <Modal isOpen={isOpen} toggleIsOpen={toggleIsOpen}>
        <ProductForm />
      </Modal>
    </div>
  );
};

export default CallOpinion;
