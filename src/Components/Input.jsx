import React from "react";

const Input = ({ 
    label,
    value,
    onChange,
    type = "text",
    className = '',
    ...props 
}) => {
  return (
   <>
   <div className="w-full">

    {
        label && <label 
        className='inline-block mb-1 pl-1'>
            {label}
        </label>
        }
        <input 
        type={type}
        value={value}
        onChange={onChange}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
        {...props}
        />
    </div>
   </>
  )
};

export default Input;
