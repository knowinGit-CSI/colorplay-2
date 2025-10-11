import React from 'react';

const Button17 = ({ text = "Button 17" }) => {
  return (
    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 px-6 rounded-full transform hover:rotate-1 transition duration-300">
      {text}
    </button>
  );
};

export default Button17;