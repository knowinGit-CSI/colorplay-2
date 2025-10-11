import React from 'react';

const Button05 = ({ text = "Button 05" }) => {
  return (
    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300">
      {text}
    </button>
  );
};

export default Button05;