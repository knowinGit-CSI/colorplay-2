import React from 'react';

const Button38 = ({ text = "Button 38" }) => {
  return (
    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 px-6 rounded-full ring-4 ring-fuchsia-200 transition duration-300">
      {text}
    </button>
  );
};

export default Button38;
