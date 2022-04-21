import React from "react";

function ButtonDark({ onClick, classes, text }) {
  const appliedCssClasses =
    "bg-slate-800 text-white uppercase py-2 w-full shadow-md shadow-slate-800 hover:bg-slate-900 active:scale-95 transition-all " +
    classes;
  return (
    <button className={appliedCssClasses} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonDark;
