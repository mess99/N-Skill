import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="nav">
      <div className="nav__lists">
        <div className="nav__lists__logo">logo</div>
        <ul className="nav__lists__menu">
          <li>
            <NavLink exact to="/">
              {t("Home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/lessons">{t("Lessons")}</NavLink>
          </li>
          <li>
            <NavLink to="/exerices">Exercices</NavLink>
          </li>

          <li>
            <NavLink to="/stories">{t("Stories")}</NavLink>
          </li>
          <li>
            <NavLink to="/tips">{t("Tips")}</NavLink>
          </li>
          <li>
            <NavLink to="/forum">Forum</NavLink>
          </li>
        </ul>
        <ul className="nav__lists__login">
          <li>{t("Login")} </li>
          <li>{t("Register")}</li>
        </ul>
        <ul className="nav__lists__language">
          <li onClick={() => i18n.changeLanguage("en")}>Eng</li>
          <li onClick={() => i18n.changeLanguage("fr")}>Fr</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
