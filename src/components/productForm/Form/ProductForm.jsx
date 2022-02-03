import React, { useContext, useState } from "react";
import OpinionsContext from "../../../context/OpinionsContext";
import { DynamicInput } from "../DynamicInput/DynamicInput";
import styles from "./ProductForm.module.css"
import {
  BsEmojiAngry,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiWink,
  BsEmojiSunglasses,
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
        msg: "Hay algún campo vacío",
      });
      return;
    }

    if (errors.some((el) => el === false)) {
      setSubmitError({
        ok: false,
        msg: "Hay algún campo incorrecto",
      });
      return;
    }

    if (errors.every((el) => el === true)) {
      let newOpinion = {
        name: opinion.name.value,
        email: opinion.email.value,
        valoration: Number(opinion.valoration.value),
        comment: opinion.comment.value,
        date: Date.now()
      };

      localStorage.setItem("opinions", JSON.stringify([...opinions, newOpinion]))

      setOpinions([...opinions, newOpinion]);
      setSubmitError({
        ok: true,
        msg: "Enviado correctamente",
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
        label="Nombre"
        type="text"
        name="name"
        placeholder="Pon tu nombre"
        value={opinion.name}
        handleOpinion={handleOpinion}
        validation={validation}
        errorMessage="Solo letras y espacios en blanco"
      />
      <DynamicInput
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="Pon tu email"
        value={opinion.email}
        handleOpinion={handleOpinion}
        validation={validation}
        errorMessage="email validation error"
      />
      <label>Valoración</label>
      <div onChange={handleOpinion} onMouseDown={validation} className={styles.valoration} >
        <div className={styles.emojisInput}>
          <label htmlFor="1">
            <BsEmojiAngry />
          </label>
          <input type="radio" name="valoration" value="1" />
        </div>
        <div className={styles.emojisInput}>
          <label htmlFor="2">
            <BsEmojiExpressionless />
          </label>
          <input type="radio" name="valoration" value="2" />
        </div>
        <div className={styles.emojisInput}>
          <label htmlFor="3">
            <BsEmojiSmile />
          </label>
          <input type="radio" name="valoration" value="3" />
        </div>
        <div className={styles.emojisInput}>
          <label htmlFor="4">
            <BsEmojiWink />
          </label>
          <input type="radio" name="valoration" value="4" />
        </div>
        <div className={styles.emojisInput}>
          <label htmlFor="5">
            <BsEmojiSunglasses />
          </label>
          <input type="radio" name="valoration" value="5" />
        </div>
      </div>
      <div>
        <label htmlFor="comment">Comentario</label>
        <textarea
          name="comment"
          cols="30"
          rows="10"
          value={opinion.comment.value}
          onChange={handleOpinion}
          onKeyUp={validation}
          onBlur={validation}
        ></textarea>
      </div>
      <div>{submitError.ok !== null && <h2>{submitError.msg}</h2>}</div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default ProductForm;
