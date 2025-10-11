import React from 'react';

const Button32 = ({ text = "Button 32" }) => {
  return (
    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md shadow-2xl transition duration-300">
      {text}
    </button>
  );
};

export default Button32;