import React from 'react';

const Button45 = ({ text = "Button 45" }) => {
  return (
    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl border-b-4 border-green-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button45;