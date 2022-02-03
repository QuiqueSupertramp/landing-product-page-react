import { useEffect, useState, useRef } from "react";

const useObserver = () => {
  const [entradas, setEntradas] = useState([]);
  const [element, setElement] = useState([]);

  const observer = useRef(
    new IntersectionObserver(
      (obsEnt) => {
        setEntradas(obsEnt);
      },
      {
        root: null,
      }
    )
  );

  useEffect(() => {
    if (element !== []) {
      element.forEach((el) => observer.current.observe(el));
    }
  }, [element]);

  return [entradas, setElement];
};

export default useObserver;
