import React from 'react';

const Button20 = ({ text = "Button 20" }) => {
  return (
    <button className="bg-neutral-500 hover:bg-neutral-600 text-white font-semibold py-2 px-6 rounded-lg border-r-4 border-neutral-700 transition duration-300">
      {text}
    </button>
  );
};

export default Button20;