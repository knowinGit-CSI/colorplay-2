import React from 'react';

const Button24 = ({ text = "Button 24" }) => {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg border-4 border-green-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button24;