import React from 'react';

const Button18 = ({ text = "Button 18" }) => {
  return (
    <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-md border-t-4 border-slate-300 transition duration-300">
      {text}
    </button>
  );
};

export default Button18;