import React from 'react';

const Button52 = ({ text = "Button 52" }) => {
  return (
    <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-5 rounded-full ring-2 ring-cyan-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button52;