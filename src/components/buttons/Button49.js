import React from 'react';

const Button49 = ({ text = "Button 49" }) => {
  return (
    <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-5 rounded-lg border-r-4 border-indigo-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button49;