import React from "react";

function Button({ text, onClick, variant, icon }) {
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
    outline: "bg-transparent border border-gray-500 text-gray-500",
  };
  return <button className={`${variants[variant]}`}>{text}</button>;
}

export default Button;
