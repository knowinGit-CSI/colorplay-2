import React from 'react';

const Button11 = ({ text = "Button 11" }) => {
  return (
    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-5 rounded-lg transform hover:scale-105 transition duration-300">
      {text}
    </button>
  );
};

export default Button11;