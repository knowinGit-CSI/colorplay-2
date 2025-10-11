import React from 'react';

const Button09 = ({ text = "Button 09" }) => {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded border-b-4 border-orange-700 transition duration-300">
      {text}
    </button>
  );
};

export default Button09;