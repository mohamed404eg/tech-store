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
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={isrequired}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Input;
