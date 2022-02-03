import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Stars = ({number, size}) => {
    const stars = []; 

    let roundNumber = Math.round(number)

    for (let index = 0; index < 5; index++) {
      if (index < roundNumber) stars.push(<AiFillStar color="#daa520" size={size} key={index} />);
      else stars.push(<AiOutlineStar color="#daa520" size={size} key={index} />);
    }
  return <div style={{display:"inline-block"}}>{stars}</div>;
};

export default Stars;
