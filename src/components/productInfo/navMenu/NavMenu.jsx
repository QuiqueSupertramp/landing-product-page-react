import { useContext, useEffect } from "react";
import LanguageContext from "../../../context/LanguageContext";
import useObserver from "../../../hooks/useObserver";
import styles from "../ProductInfo.module.css";

const NavMenu = ({ state, setState }) => {
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
    <nav className={styles.nav}>
      <a
        href="#null"
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
  );
};

export default NavMenu;
