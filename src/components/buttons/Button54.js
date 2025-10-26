import React from 'react';

const Button54 = ({ text = "Button 54" }) => {
  return (
    <button className="bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-2xl border-b-4 border-rose-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button54;