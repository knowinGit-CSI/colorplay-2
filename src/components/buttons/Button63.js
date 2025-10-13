import React from 'react';

const Button63 = ({ text = "Button 63" }) => {
  return (
    <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300">
      {text}
    </button>
  );
};

export default Button63;
