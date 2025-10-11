import React from 'react';

const Button22 = ({ text = "Button 22" }) => {
  return (
    <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-5 rounded-full ring-2 ring-red-300 transition duration-300">
      {text}
    </button>
  );
};

export default Button22;