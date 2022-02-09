import React, { useState } from "react";
import Description from "./description/Description";
import Features from "./features/Features";
import NavMenu from "./navMenu/NavMenu";
import Opinions from "./opinions/Opinions";
import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  const [state, setState] = useState("description");

  return (
    <div className={styles.ProductInfo} id="productInfo">
      <NavMenu state={state} setState={setState} />
      <div className={styles.wrapperInfo}>
        {state === "description" && <Description />}
        {state === "features" && <Features />}
        {state === "opinions" && <Opinions />}
      </div>
    </div>
  );
};

export default ProductInfo;
