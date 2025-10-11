import React from 'react';

const Button16 = ({ text = "Button 16" }) => {
  return (
    <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-2xl ring-4 ring-amber-200 transition duration-300">
      {text}
    </button>
  );
};

export default Button16;