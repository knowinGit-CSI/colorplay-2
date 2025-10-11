import React from 'react';

const Button37 = ({ text = "Button 37" }) => {
  return (
    <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-5 rounded-md border-l-4 border-amber-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button37;