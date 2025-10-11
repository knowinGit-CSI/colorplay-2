import React from 'react';

const Button19 = ({ text = "Button 19" }) => {
  return (
    <button className="bg-zinc-500 hover:bg-zinc-600 text-white font-medium py-3 px-5 rounded-xl shadow-inner transition duration-300">
      {text}
    </button>
  );
};

export default Button19;