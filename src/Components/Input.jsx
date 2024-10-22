import React, { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label className="inline-block mb-2 pl-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-[30vw] ${className}`}
          {...props}
        />
      </div>
    </>
  );
});

export default Input;
