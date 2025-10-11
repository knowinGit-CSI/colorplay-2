import React from 'react';

const Button55 = ({ text = "Button 55" }) => {
  return (
    <button className="bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 px-5 rounded-2xl border-l-4 border-violet-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button55;