import React from 'react';

const Button65 = ({ text = "Button 65" }) => {
  return (
    <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default Button65;
