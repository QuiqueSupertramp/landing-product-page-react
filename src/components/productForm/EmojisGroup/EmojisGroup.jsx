import {
  BsEmojiAngryFill,
  BsEmojiExpressionlessFill,
  BsEmojiSmileFill,
  BsEmojiWinkFill,
  BsEmojiSunglassesFill,
} from "react-icons/bs";
import EmojisInput from "../EmojisInput/EmojisInput";

import "./EmojisGroup.css";

const EmojisGroup = ({opinion}) => {
  return (
    <div className="emojisGroup">
      <EmojisInput value="1">
        <BsEmojiAngryFill
          color={opinion.valoration.value === "1" ? "#ffa500" : "#add8e6"}
        />
      </EmojisInput>

      <EmojisInput value="2">
        <BsEmojiExpressionlessFill
          color={opinion.valoration.value === "2" ? "#ffa500" : "#add8e6"}
        />
      </EmojisInput>

      <EmojisInput value="3">
        <BsEmojiSmileFill
          color={opinion.valoration.value === "3" ? "#ffa500" : "#add8e6"}
        />
      </EmojisInput>

      <EmojisInput value="4">
        <BsEmojiWinkFill
          color={opinion.valoration.value === "4" ? "#ffa500" : "#add8e6"}
        />
      </EmojisInput>

      <EmojisInput value="5">
        <BsEmojiSunglassesFill
          color={opinion.valoration.value === "5" ? "#ffa500" : "#add8e6"}
        />
      </EmojisInput>
    </div>
  );
};

export default EmojisGroup;
