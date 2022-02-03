import { useState, useEffect } from "react";

const useBars = (opinions) => {
  const [bars, setBars] = useState({});

  useEffect(() => {
    let valorationsArray = Object.values(opinions).flatMap(
      (el) => el.valoration
    );

    let repeats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    valorationsArray.forEach((el) => {
      repeats[el] ? (repeats[el] += 1) : (repeats[el] = 1);
    }); 

    setBars(repeats);
  }, [opinions]);

  return { bars };
};

export default useBars;
