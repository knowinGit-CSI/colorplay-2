import React from 'react';

const Button47 = ({ text = "Button 47" }) => {
  return (
    <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-xl shadow-inner ring-4 ring-purple-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button47;