import React from 'react';

const Button48 = ({ text = "Button 48" }) => {
  return (
    <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded-full border-t-4 border-pink-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button48;