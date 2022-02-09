import "../EmojisGroup/EmojisGroup.css";

const EmojisInput = ({ value, children }) => {
  return (
    <div className="emojisInput">
      <label htmlFor={value}>{children}</label>
      <input type="radio" name="valoration" value={value} />
    </div>
  );
};

export default EmojisInput;
