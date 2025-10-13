import React from 'react';

const Button61 = ({ text = "Button 61" }) => {
  return (
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default Button61;
