import React from 'react';

const Button31 = ({ text = "Button 31" }) => {
  return (
    <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-5 rounded-xl border-r-4 border-cyan-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button31;