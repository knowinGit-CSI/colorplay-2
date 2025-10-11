import React from 'react';

const Button34 = ({ text = "Button 34" }) => {
  return (
    <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-5 rounded-full border-4 border-violet-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button34;