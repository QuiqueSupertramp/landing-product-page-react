import React, { createContext, useEffect, useState } from "react";

const OpinionsContext = createContext();

const initialOpinions= [
  {
    name: "Sergio García",
    email: "xxx@xxx.com",
    valoration: 5,
    date: Date.now() - 1_000_000_000,
    comment: "Muy buenos acabados y prestaciones, batería excelente, procesador inmejorable, Apple ha dado un gran salto, no hace falta coger el pro, con este es suficiente."
  },
  {
    name: "Clara Ramos",
    email: "xxx@xxx.com",
    valoration: 5,
    date: (Date.now() - 3_500_000_000),
    comment: "Excelente portátil, con todo el poder del nuevo chip M1. Un placer trabajar con él, así como jugar o ejecutar cualquier tarea cotidiana."
  },
  {
    name: "Rachel Ross",
    email: "xxx@xxx.com",
    valoration: 4,
    date:Date.now() - 2_000_000_000,
    comment: "Absolutely love this laptop. Been looking into purchasing one for awhile, and so far I have no complaints. It's super fast and I love it."
  },
]


const OpinionsProvider = ({ children }) => {
  const [opinions, setOpinions] = useState(initialOpinions);
  const [opinionsAverage, setOpinionsAverage] = useState(0);

  useEffect(() => {
    let dataStorage = JSON.parse(localStorage.getItem("opinions"));
    dataStorage ? setOpinions(dataStorage) : setOpinions(initialOpinions)
  }, []);

  useEffect(() => {
    if (opinions.length === 0) return 0;

    let average = [];

    opinions.forEach((el) => average.push(el.valoration));

    let x = average.reduce((acc, el) => acc + el);
    let y = x/average.length
    setOpinionsAverage(y)

  }, [opinions]);

  const data = { opinions, setOpinions, opinionsAverage };

  return (
    <OpinionsContext.Provider value={data}>{children}</OpinionsContext.Provider>
  );
};

export { OpinionsProvider };
export default OpinionsContext;
