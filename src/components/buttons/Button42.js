import React from 'react';

const Button42 = ({ text = "Button 42" }) => {
  return (
    <button className="bg-stone-600 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded-xl shadow-2xl border-4 border-stone-400 transition duration-150">
      {text}
    </button>
  );
};

export default Button42;