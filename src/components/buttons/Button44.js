import React from 'react';

const Button44 = ({ text = "Button 44" }) => {
  return (
    <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg transform hover:scale-110 shadow-lg transition duration-300">
      {text}
    </button>
  );
};

export default Button44;