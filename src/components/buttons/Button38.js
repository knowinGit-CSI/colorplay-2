import React from 'react';

const Button38 = ({ text = "Button 38" }) => {
  return (
    <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-6 rounded-full ring-4 ring-fuchsia-300 transition duration-300">
      {text}
    </button>
  );
};

export default Button38;