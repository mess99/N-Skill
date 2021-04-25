import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";
import Register from "../../containers/Register";
import Login from "../../containers/Login";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Word from "./Word";

const Nav = ({ user, handleLogout, searchWordApi, wordResult }) => {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWordApi(search);
  };

  return (
    <div className="nav">
      {Object.keys(wordResult).length > 0 ? <Word {...wordResult} /> : ""}

      <div className="nav__lists">
        <div className="nav__lists__logo">
          <span>logo</span>
        </div>
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
        <div className="search__word">
          <SearchIcon className="nav__search__icon" />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search a word..."
              className="nav__search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        {!user?.isLogged && (
          <ul className="nav__lists__login">
            <li>
              <Login login={t("Login")} />
            </li>
            <li>
              <Register register={t("Register")} />
            </li>
          </ul>
        )}
        {user?.isLogged && (
          <ul className="nav__lists__logged">
            <li>
              <AccountCircleIcon
                onClick={() => setSettings(!settings)}
                className="user-settings"
                fontSize="large"
              />
            </li>
            {settings && (
              <ul className="nav__lists__user">
                <li>profil</li>
                <li>{t("Account")}</li>
                <li onClick={handleLogout}>{t("Log out")}</li>
              </ul>
            )}
          </ul>
        )}

        <ul className="nav__lists__language">
          <li onClick={() => i18n.changeLanguage("en")}>Eng</li>
          <li onClick={() => i18n.changeLanguage("fr")}>Fr</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
