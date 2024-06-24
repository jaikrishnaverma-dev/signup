import React from "react";

const TextInput = (props) => {
  return (
    <div className={`inpudiv w100 ${props.widthClass}`}>
      <input
        type={props?.type ? props.type : "text"}
        className="inpudiv__input"
        placeholder=""
      />
      <span className="inpudiv__span">{props.label}</span>
    </div>
  );
};

export default TextInput;
