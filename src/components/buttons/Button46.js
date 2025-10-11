import React from 'react';

const Button46 = ({ text = "Button 46" }) => {
  return (
    <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium py-3 px-5 rounded-md border-l-4 border-yellow-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button46;