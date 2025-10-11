import React from 'react';

const Button40 = ({ text = "Button 40" }) => {
  return (
    <button className="bg-zinc-600 hover:bg-zinc-700 text-white font-medium py-3 px-5 rounded-lg shadow-md transform hover:rotate-1 transition duration-300">
      {text}
    </button>
  );
};

export default Button40;