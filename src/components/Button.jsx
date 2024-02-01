import React from "react";

const Button = ({ text, onClick, icon, classname }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${classname} transition-all duration-300`}
    >
      <span className=" mr-2">{icon ? icon : ""}</span>
      {text}
    </button>
  );
};

export default Button;
