import React, { useContext, useState } from "react";
import OpinionsContext from "../../../context/OpinionsContext";
import LanguageContext from "../../../context/LanguageContext";
import { DynamicInput } from "../DynamicInput/DynamicInput";
import styles from "./ProductForm.module.css";
import {
  BsEmojiAngry,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiWink,
  BsEmojiSunglasses,
  BsEmojiAngryFill,
  BsEmojiExpressionlessFill,
  BsEmojiSmileFill,
  BsEmojiWinkFill,
  BsEmojiSunglassesFill,
} from "react-icons/bs";

const expresionesRegulares = {
  name: /^[A-Za-zÀ-ÿ]+((\s)?(('|-|.)?([A-Za-zÀ-ÿ])+))*$/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

const initialOpinion = {
  name: { value: "", ok: null },
  email: { value: "", ok: null },
  valoration: { value: "", ok: null },
  comment: { value: "", ok: null },
};

const initialSubmitError = {
  ok: null,
  msg: "",
};

const ProductForm = () => {
  const [submitError, setSubmitError] = useState(initialSubmitError);
  const [opinion, setOpinion] = useState(initialOpinion);

  const { opinions, setOpinions } = useContext(OpinionsContext);
  const { texts } = useContext(LanguageContext);

  let errors = Object.values(opinion).flatMap((el) => el.ok);

  const handleOpinion = (e) => {
    setOpinion({
      ...opinion,
      [e.target.name]: { ...opinion[e.target.name], value: e.target.value },
    });
  };

  const validation = (e) => {
    if (!expresionesRegulares[e.target.name]) {
      setOpinion({
        ...opinion,
        [e.target.name]: { ...opinion[e.target.name], ok: true },
      });
      return;
    }

    if (e.target.value === "") {
      setOpinion({
        ...opinion,
        [e.target.name]: { ...opinion[e.target.name], ok: null },
      });
      return;
    }

    expresionesRegulares[e.target.name].test(opinion[e.target.name].value)
      ? setOpinion({
          ...opinion,
          [e.target.name]: { ...opinion[e.target.name], ok: true },
        })
      : setOpinion({
          ...opinion,
          [e.target.name]: { ...opinion[e.target.name], ok: false },
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.some((el) => el === null)) {
      setSubmitError({
        ok: false,
        msg: texts.productForm.submitErrors.empty,
      });
      return;
    }

    if (errors.some((el) => el === false)) {
      setSubmitError({
        ok: false,
        msg: texts.productForm.submitErrors.error,
      });
      return;
    }

    if (errors.every((el) => el === true)) {
      let newOpinion = {
        name: opinion.name.value,
        email: opinion.email.value,
        valoration: Number(opinion.valoration.value),
        comment: opinion.comment.value,
        date: Date.now(),
      };

      localStorage.setItem(
        "opinions",
        JSON.stringify([...opinions, newOpinion])
      );

      setOpinions([...opinions, newOpinion]);
      setSubmitError({
        ok: true,
        msg: texts.productForm.submitErrors.done,
      });
      setOpinion(initialOpinion);
      setTimeout(() => {
        setSubmitError(initialSubmitError);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.ProductForm}>
      <DynamicInput
        label={texts.productForm.name.label}
        type="text"
        name="name"
        placeholder={texts.productForm.name.placeholder}
        value={opinion.name}
        handleOpinion={handleOpinion}
        validation={validation}
        errorMessage={texts.productForm.name.errorMsg}
      />
      <DynamicInput
        label={texts.productForm.email.label}
        type="email"
        name="email"
        placeholder={texts.productForm.email.placeholder}
        value={opinion.email}
        handleOpinion={handleOpinion}
        validation={validation}
        errorMessage={texts.productForm.email.errorMsg}
      />
      <div
        onChange={handleOpinion}
        onMouseDown={validation}
        className={styles.valoration}
      >
        <label>{texts.productForm.valoration.label}</label>
        <div className={styles.emojisGroup}>
          <div className={styles.emojisInput}>
            <label htmlFor="1">
              {opinion.valoration.value === "1"
                ? <BsEmojiAngryFill color="#ffa500" />
                : <BsEmojiAngryFill color="#add8e6" />
              }
            </label>
            <input type="radio" name="valoration" value="1" />
          </div>
          <div className={styles.emojisInput}>
            <label htmlFor="2">
            {opinion.valoration.value === "2"
                ? <BsEmojiExpressionlessFill color="#ffa500" />
                : <BsEmojiExpressionlessFill color="#add8e6" />
              }
            </label>
            <input type="radio" name="valoration" value="2" />
          </div>
          <div className={styles.emojisInput}>
            <label htmlFor="3">
              {opinion.valoration.value === "3"
                ? <BsEmojiSmileFill color="#ffa500" />
                : <BsEmojiSmileFill color="#add8e6" />
              }
            </label>
            <input type="radio" name="valoration" value="3" />
          </div>
          <div className={styles.emojisInput}>
            <label htmlFor="4">
              {opinion.valoration.value === "4"
                ? <BsEmojiWinkFill color="#ffa500" />
                : <BsEmojiWinkFill color="#add8e6" />
              }
            </label>
            <input type="radio" name="valoration" value="4" />
          </div>
          <div className={styles.emojisInput}>
            <label htmlFor="5">
              {opinion.valoration.value === "5"
                ? <BsEmojiSunglassesFill color="#ffa500" />
                : <BsEmojiSunglassesFill color="#add8e6" />
              }
            </label>
            <input type="radio" name="valoration" value="5" />
          </div>
        </div>
      </div>
      <div className={styles.comentarios}>
        <label htmlFor="comment">{texts.productForm.comment.label}</label>
        <textarea
          name="comment"
          placeholder={texts.productForm.comment.placeholder}
          value={opinion.comment.value}
          onChange={handleOpinion}
          onKeyUp={validation}
          onBlur={validation}
        ></textarea>
      </div>
      <div>
        {submitError.ok !== null && (
          <h3 className={styles.submitError}>{submitError.msg}</h3>
        )}
      </div>
      <input
        type="submit"
        value={texts.productForm.submit.value}
        className={styles.submit}
      />
    </form>
  );
};

export default ProductForm;
