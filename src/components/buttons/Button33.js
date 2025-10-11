import React from 'react';

const Button33 = ({ text = "Button 33" }) => {
  return (
    <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-2xl ring-2 ring-rose-300 transform hover:scale-105 transition duration-300">
      {text}
    </button>
  );
};

export default Button33;