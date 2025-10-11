import React from 'react';

const Button08 = ({ text = "Button 08" }) => {
  return (
    <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-xl transition duration-300">
      {text}
    </button>
  );
};

export default Button08;