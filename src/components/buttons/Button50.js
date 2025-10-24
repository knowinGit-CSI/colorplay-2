import React from 'react';

const Button50 = ({ text = "Button 50" }) => {
  return (
    <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] 
                 transform hover:rotate-2 transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button50;