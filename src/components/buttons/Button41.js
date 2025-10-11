import React from 'react';

const Button41 = ({ text = "Button 41" }) => {
  return (
    <button className="bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-2 px-6 rounded-md border-r-4 border-neutral-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button41;