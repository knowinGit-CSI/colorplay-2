import React from 'react';

const Button62 = ({ text = "Button 62" }) => {
  return (
    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default Button62;
