import React from 'react';

const Button12 = ({ text = "Button 12" }) => {
  return (
    <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-xl shadow-2xl transition duration-300">
      {text}
    </button>
  );
};

export default Button12;