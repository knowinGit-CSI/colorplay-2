import React from 'react';

const Button58 = ({ text = "Button 58" }) => {
  return (
    <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-5 rounded-xl border-r-4 border-amber-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button58;