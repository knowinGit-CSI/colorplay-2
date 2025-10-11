import React from 'react';

const Button60 = ({ text = "Button 60" }) => {
  return (
    <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl border-4 border-slate-500 shadow-xl transition duration-300">
      {text}
    </button>
  );
};

export default Button60;