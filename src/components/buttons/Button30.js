import React from 'react';

const Button30 = ({ text = "Button 30" }) => {
  return (
    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full border-t-4 border-orange-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button30;