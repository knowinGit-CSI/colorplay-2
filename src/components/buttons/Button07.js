import React from 'react';

const Button07 = ({ text = "Button 07" }) => {
  return (
    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-5 rounded-2xl shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default Button07;