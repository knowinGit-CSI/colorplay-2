import React from 'react';

const Button35 = ({ text = "Button 35" }) => {
  return (
    <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg shadow-inner border-b-4 border-sky-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button35;