import React from 'react';

const Button15 = ({ text = "Button 15" }) => {
  return (
    <button className="bg-lime-500 hover:bg-lime-600 text-black font-normal py-2 px-5 rounded-lg border-l-4 border-lime-700 transition duration-300">
      {text}
    </button>
  );
};

export default Button15;