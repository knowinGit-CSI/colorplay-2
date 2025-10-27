import React, { useState } from "react";

const Button60 = () => {
  const [jump, setJump] = useState(false);

  const handleClick = () => {
    setJump(true);
    setTimeout(() => setJump(false), 200); // reset jump after 200ms
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-2xl border-4 border-slate-500 shadow-xl transition duration-300
        ${jump ? "translate-y-[-20px]" : "translate-y-0"} transform`}
    >
      Sample
    </button>
  );
};

export default Button60;
