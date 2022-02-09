import { useContext, useState } from "react";
import OpinionsContext from "../context/OpinionsContext";
import LanguageContext from "../context/LanguageContext";

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

const useForm = () => {
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
    if (e.target.value === "") {
      setOpinion({
        ...opinion,
        [e.target.name]: { ...opinion[e.target.name], ok: null },
      });
      return;
    }

    if (!expresionesRegulares[e.target.name]) {
      setOpinion({
        ...opinion,
        [e.target.name]: { ...opinion[e.target.name], ok: true },
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
  return { submitError, opinion, handleOpinion, validation, handleSubmit };
};

export default useForm;
