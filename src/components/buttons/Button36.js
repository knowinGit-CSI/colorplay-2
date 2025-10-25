import React from 'react';

const Button36 = ({ text = "Button 36" }) => {
  return (
    <button className="bg-lime-600 hover:bg-lime-700 text-black font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
      {text}
    </button>
  );
};

export default Button36;
