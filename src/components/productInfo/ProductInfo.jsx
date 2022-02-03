import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import useObserver from "../../hooks/useObserver";
import Description from "./description/Description";
import Features from "./features/Features";
import Opinions from "./opinions/Opinions";
import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  const [state, setState] = useState("description");

  const { texts } = useContext(LanguageContext);

  const [entradas, setElement] = useObserver();

  useEffect(() => {
    let observedElement = document.getElementById("productHeader");
    let navLinks = document.querySelectorAll(".navLink");

    if (observedElement !== undefined) {
      setElement([observedElement]);

      if (entradas.length !== 0) {
        entradas[0].isIntersecting === false
          ? navLinks.forEach((el) => (el.href = "#productInfo"))
          : navLinks.forEach((el) => (el.href = "#null"));
      }
    }
  }, [setElement, entradas]);

  const isActiveClass = (name) =>
    state === name ? styles.active : styles.inactive;

  return (
    <div className={styles.ProductInfo} id="productInfo">
      <nav className={styles.nav}>
        <a
          href="#null"
          id="adesc"
          className={[isActiveClass("description"), "navLink"].join(" ")}
          onClick={() => setState("description")}
        >
          {texts.productInfo.nav.description}
        </a>
        <a
          href="#null"
          className={[isActiveClass("features"), "navLink"].join(" ")}
          onClick={() => setState("features")}
        >
          {texts.productInfo.nav.features}
        </a>
        <a
          href="#null"
          className={[isActiveClass("opinions"), "navLink"].join(" ")}
          onClick={() => setState("opinions")}
        >
          {texts.productInfo.nav.opinions}
        </a>
      </nav>
      <div className={styles.wrapperInfo}>
        {state === "description" && <Description />}
        {state === "features" && <Features />}
        {state === "opinions" && <Opinions />}
      </div>
    </div>
  );
};

export default ProductInfo;
