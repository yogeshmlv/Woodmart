import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname,handleChange } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomInput;