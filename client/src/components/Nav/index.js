import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";
import Register from "../Register";

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
            <NavLink to="/exercices">Exercices</NavLink>
          </li>

          <li>
            <NavLink to="/stories">{t("Stories")}</NavLink>
          </li>

          <li>
            <NavLink to="/forum">Forum</NavLink>
          </li>
        </ul>
        <ul className="nav__lists__login">
          <li>
            {/* TODO: */}
            <Link to="/register">{t("Login")}</Link>
          </li>
          <li>
            <Register register={t("Register")} />
          </li>
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
