import React from 'react';

const Button29 = ({ text = "Button 29" }) => {
  return (
    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg shadow-xl transform hover:rotate-2 transition duration-300">
      {text}
    </button>
  );
};

export default Button29;