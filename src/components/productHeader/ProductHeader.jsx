import React, { useContext } from "react";
import styles from "./ProductHeader.module.css";

import macBook from "../../images/macBook.png";
import LanguageContext from "../../context/LanguageContext";
import Modal from "../modal/Modal";
import useModal from "../../hooks/useModal";
import useWidth from "../../hooks/useWidth";

const price = "1.099€";

const ProductHeader = () => {
  const { texts } = useContext(LanguageContext);
  const { productHeader } = texts;
  const { title, stock, stockInfo } = productHeader;
  const {innerWidth} = useWidth()

  const [isOpen, toggleIsOpen] = useModal();

  const stockFakeDate = new Date(Date.now() + 300_000_000).toLocaleDateString();

  return (
    <div className={styles.productHeader} id="productHeader">
      <img
        onClick={toggleIsOpen}
        src={macBook}
        className={styles.img}
        alt={texts.productHeader.title}
      ></img>
      <Modal
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
        width={innerWidth > 768 ? "70%" : innerWidth > 500 ? "80%" : "90%"}
        padding="1.5rem 1rem 1rem 1rem"
      >
        <img
          src={macBook}
          className={styles.img}
          alt={texts.productHeader.title}
        ></img>
      </Modal>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{price}</span>
      <div className={styles.features}>
        <div className={styles.feature}>256GB SSD</div>
        <div className={styles.feature}>8GB RAM</div>
        <div className={styles.feature}>CHIP M1</div>
      </div>
      <span className={styles.stock}>{stock}</span>
      <p className={styles.stockInfo}>
        {stockInfo} {stockFakeDate}
      </p>
    </div>
  );
};

export default ProductHeader;
