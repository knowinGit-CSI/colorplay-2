import React from 'react';

const Button03 = ({ text = "Button 03" }) => {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-5 rounded-xl transition duration-300">
      {text}
    </button>
  );
};

export default Button03;