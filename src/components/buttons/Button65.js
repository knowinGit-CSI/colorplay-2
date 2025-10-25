import React from 'react';

const Button65 = ({ text = "Button 65" }) => {
  return (
    <button
      className="
        relative 
        bg-yellow-600 
        hover:bg-yellow-700 
        text-black 
        font-semibold 
        py-2 
        px-4 
        rounded-md 
        shadow-md 
        transition 
        duration-300
        overflow-hidden
      "
    >
      {text}
      {/* Burst rings without blur */}
      <span className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150 transition-transform duration-500"></span>
    </button>
  );
};

export default Button65;