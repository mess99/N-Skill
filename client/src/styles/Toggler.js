import React from "react";
import Moon from "./Moon";
import Sun from "./Sun";
import "./toggle.css";
// const toggleStyle = {
//   position: "fixed",
//   zIndex: "88",
//   top: "35px",
//   left: "150px",
//   cursor: "pointer",
// };
const Toggle = ({ theme, toggleTheme }) => {
  if (theme === "light") {
    return (
      <div onClick={toggleTheme} className="toggler">
        <Moon />
      </div>
    );
  }
  return (
    <div onClick={toggleTheme} className="toggler">
      <Sun />
    </div>
  );
};

export default Toggle;
