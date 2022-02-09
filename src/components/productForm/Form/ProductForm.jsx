import React, { useContext } from "react";
import styles from "./ProductForm.module.css";
import LanguageContext from "../../../context/LanguageContext";
import useForm from "../../../hooks/useForm";
import { DynamicInput } from "../DynamicInput/DynamicInput";
import EmojisGroup from "../EmojisGroup/EmojisGroup";

const ProductForm = () => {
  const { submitError, opinion, handleOpinion, validation, handleSubmit } =
    useForm();
  const { texts } = useContext(LanguageContext);

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
        className={styles.valoration}
        onChange={handleOpinion}
        onMouseDown={validation}
      >
        <label>{texts.productForm.valoration.label}</label>
        <EmojisGroup opinion={opinion} />
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
