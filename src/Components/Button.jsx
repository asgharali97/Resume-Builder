import React from "react";

const Button = ({
    children,
    type = 'button',
    className = '',
    ...props
}) => {
  return (
    <>
      <button
      type={type}
      className={`mx-2 bg-[#1c1c1c] text-white h-12 px-10 rounded-2xl ${className}`}
      {...props}
      >
      {children}
      </button>
    </>
  );
};

export default Button;
