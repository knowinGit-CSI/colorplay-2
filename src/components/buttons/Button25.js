import React from 'react';

const Button25 = ({ text = "Button 25" }) => {
  return (
    <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-medium py-3 px-5 rounded-xl shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default Button25;