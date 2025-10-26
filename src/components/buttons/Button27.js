import React from 'react';

const Button27 = ({ text = "Button 27" }) => {
  return (
    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-2xl ring-4 ring-pink-200 transition duration-300">
      {text}
    </button>
  );
};

export default Button27;
