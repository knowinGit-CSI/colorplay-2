import React from 'react';

const Button28 = ({ text = "Button 28" }) => {
  return (
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-md border-l-4 border-indigo-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button28;