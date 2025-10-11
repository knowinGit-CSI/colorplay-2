import React from 'react';

const Button10 = ({ text = "Button 10" }) => {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-md ring-2 ring-cyan-300 transition duration-300">
      {text}
    </button>
  );
};

export default Button10;