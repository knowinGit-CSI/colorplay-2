import React from 'react';

const Button01 = ({ text = "Button 01" }) => {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
      {text}
    </button>
  );
};

export default Button01;