import React from 'react';

const Button55 = ({ text = "Button 55" }) => {
  return (
    <button
      className="
        bg-gradient-to-r from-purple-600 to-violet-700
        hover:from-purple-700 hover:to-violet-800
        text-white font-bold py-3 px-6
        rounded-2xl border-l-4 border-violet-500
        shadow-lg hover:shadow-xl
        transform hover:scale-105 active:scale-95
        transition-all duration-200 ease-in-out
      "
    >
      {text}
    </button>
  );
};

export default Button55;
