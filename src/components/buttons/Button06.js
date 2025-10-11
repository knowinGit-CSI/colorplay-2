import React from 'react';

const Button06 = ({ text = "Button 06" }) => {
  return (
    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-pink-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button06;