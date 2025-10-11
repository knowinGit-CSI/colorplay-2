import React from 'react';

const Button13 = ({ text = "Button 13" }) => {
  return (
    <button className="bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 px-6 rounded-full border-2 border-violet-300 transition duration-300">
      {text}
    </button>
  );
};

export default Button13;