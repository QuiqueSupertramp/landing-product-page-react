import React, { useContext } from "react";
import styles from "../Opinions.module.css";

import { BiUserVoice } from "react-icons/bi";
import Modal from "../../../modal/Modal";
import ProductForm from "../../../productForm/Form/ProductForm";
import useModal from "../../../../hooks/useModal";
import useWidth from "../../../../hooks/useWidth";
import LanguageContext from "../../../../context/LanguageContext";

const CallOpinion = () => {
  const [isOpen, toggleIsOpen] = useModal();
  const { innerWidth } = useWidth();

  const { texts } = useContext(LanguageContext);

  return (
    <div className={styles.opinionCall}>
      <BiUserVoice color="#add8e6" size="100px" />

      <button onClick={toggleIsOpen}>{texts.productInfo.opinions.call}</button>

      <Modal
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
        width={
          innerWidth > 768 ? "fit-content" : innerWidth > 500 ? "80%" : "90%"
        }
        padding={innerWidth > 768 ? "3rem" : "3rem 2rem"}
      >
        <ProductForm />
      </Modal>
    </div>
  );
};

export default CallOpinion;
