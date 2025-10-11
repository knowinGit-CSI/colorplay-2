import React from 'react';

const Button01 = ({ text = "Button 01" }) => {
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">
      {text}
    </button>
  );
};

export default Button01;