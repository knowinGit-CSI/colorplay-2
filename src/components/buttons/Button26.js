import React from 'react';

const Button26 = ({ text = "Button 26" }) => {
  return (
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full border-b-4 border-purple-800 transition duration-300">
      {text}
    </button>
  );
};

export default Button26;