import React from "react";
import { IconContext } from "react-icons";

function CustomIcon({ icon, size, className }) {
  return (
    <IconContext.Provider value={{ size, className }}>
      {icon}
    </IconContext.Provider>
  );
}

export default CustomIcon;
