import React from 'react';

const Button21 = ({ text = "Button 21" }) => {
  return (
    <button className="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      {text}
    </button>
  );
};

export default Button21;