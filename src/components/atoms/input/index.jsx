import React from "react";

const Input = (props) => {
  const { type, name, id, placeholder, onChange, value } = props;
  return (
    <div className="border-slate-400 border-2 relative rounded">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="p-8 text-left tracking-[0.16em] font-Inter md:text-s2 bg-transparent text-white placeholder:text-transparent opacity-20 peer focus:opacity-100 focus:outline-none focus:bg-transparent focus:tracking-normal font-bold"
      />
      <label
        htmlFor={id}
        className="md:text-s6 font-Inter font-bold text-white opacity-20 absolute top-3 left-8 tracking-[0.16em] peer-placeholder-shown:top-8 peer-placeholder-shown:left-8 peer-placeholder-shown:md:text-s2 peer-focus:peer-placeholder-shown:opacity-100 transition-all duration-200"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
