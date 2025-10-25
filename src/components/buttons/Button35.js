import React from 'react';

const Button35 = ({ text = "Button 35" }) => {
  return (
    <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-inner border-b-4 border-sky-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button35;
