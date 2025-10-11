import React from 'react';

const Button56 = ({ text = "Button 56" }) => {
  return (
    <button className="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-6 rounded-md shadow-inner ring-4 ring-sky-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button56;