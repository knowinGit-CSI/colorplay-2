import React from 'react';

const Button43 = ({ text = "Button 43" }) => {
  return (
    <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-5 rounded-xl ring-2 ring-red-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button43;