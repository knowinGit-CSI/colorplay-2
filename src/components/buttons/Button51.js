import React from 'react';

const Button51 = ({ text = "Button 51" }) => {
  return (
    <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-md shadow-2xl border-4 border-orange-500 transition duration-300">
      {text}
    </button>
  );
};

export default Button51;