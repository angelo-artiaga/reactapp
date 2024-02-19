import React from "react";

function Input({ name, placeholder, type }) {
  return (
    <div>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;
