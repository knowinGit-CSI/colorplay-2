import React from 'react';

const Button53 = ({ text = "Button 53" }) => {
  return (
    <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 px-6 rounded-xl transform hover:scale-105 shadow-lg transition duration-300">
      {text}
    </button>
  );
};

export default Button53;