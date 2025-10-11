import React from 'react';

const Button04 = ({ text = "Button 04" }) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition duration-300">
      {text}
    </button>
  );
};

export default Button04;