import React from 'react';

const Button50 = ({ text = "Button 50" }) => {
  return (
    <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded-2xl shadow-xl transform hover:rotate-2 transition duration-300">
      {text}
    </button>
  );
};

export default Button50;