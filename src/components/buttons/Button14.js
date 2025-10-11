import React from 'react';

const Button14 = ({ text = "Button 14" }) => {
  return (
    <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition duration-300">
      {text}
    </button>
  );
};

export default Button14;