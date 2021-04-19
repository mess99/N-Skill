import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./burger.css";
const Burger = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const closeNav = () => {
    setOpen(false);
  };
  const toggleMenu = () => {
    setOpen(!open);
  };

  const classToggleMenu = open
    ? "menu__nav-open menu__nav-hide openNav"
    : "menu__nav-open menu__nav-hide";

  return (
    <div className="toggle">
      <div className="burger__nav">
        <h2>N'skills</h2>
        <div onClick={toggleMenu} className="burger__toggle">
          <span></span>
        </div>
      </div>

      <nav className={classToggleMenu}>
        <div className="menu__lien">
          <NavLink onClick={closeNav} exact to="/">
            {t("Home")}
          </NavLink>
          <NavLink onClick={closeNav} to="/lessons">
            {t("Lessons")}
          </NavLink>

          <NavLink onClick={closeNav} to="/exerices">
            Exercices
          </NavLink>

          <NavLink onClick={closeNav} to="/stories">
            {t("Stories")}
          </NavLink>

          <NavLink onClick={closeNav} to="/tips">
            {t("Tips")}
          </NavLink>

          <NavLink onClick={closeNav} to="/forum">
            Forum
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Burger;
