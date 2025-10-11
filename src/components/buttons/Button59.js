import React from 'react';

const Button59 = ({ text = "Button 59" }) => {
  return (
    <button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold py-2 px-6 rounded-lg shadow-2xl transform hover:rotate-1 transition duration-300">
      {text}
    </button>
  );
};

export default Button59;