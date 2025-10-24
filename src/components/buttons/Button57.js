import React from 'react';

const Button57 = ({ text = "Button 57" }) => {
  return (
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full border-t-4 border-orange-600 transition duration-300">
      {text}
    </button>
  );
};

export default Button57;