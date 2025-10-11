import React from 'react';

const Button39 = ({ text = "Button 39" }) => {
  return (
    <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-2xl border-t-4 border-slate-400 transition duration-300">
      {text}
    </button>
  );
};

export default Button39;