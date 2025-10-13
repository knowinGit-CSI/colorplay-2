import React from 'react';

const Button64 = ({ text = "Button 64" }) => {
  return (
    <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-lg shadow-inner transition duration-300">
      {text}
    </button>
  );
};

export default Button64;
