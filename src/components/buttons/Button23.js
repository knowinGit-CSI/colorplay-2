import React from 'react';

const Button23 = ({ text = "Button 23" }) => {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transform hover:scale-110 transition duration-300">
      {text}
    </button>
  );
};

export default Button23;