import React from "react";

type InputProps = {
  id: string;
  placeholder: string;
  label: string;
  isrequired: boolean;
  type: string;
  name: string;
};
function Input({ id, label, placeholder, isrequired, type, name }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>
        {label} {isrequired === true ? <span>*</span> : <></>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={isrequired}
        name={name}
      />
    </div>
  );
}

export default Input;
