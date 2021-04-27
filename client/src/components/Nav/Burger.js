import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchIcon from "@material-ui/icons/Search";

import "./burger.css";
import Word from "./Word";
const Burger = ({ searchWordApi, wordResult }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [closeSearch, setCloseSearch] = useState(true);

  const { t, i18n } = useTranslation();

  const closeNav = () => {
    setOpen(false);
  };
  const toggleMenu = () => {
    setOpen(!open);
  };

  const searchWord = (e) => {
    setSearch(e.target.value);
    setCloseSearch(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchWordApi(search);
  };
  const handleWord = () => {
    setSearch("");
    setCloseSearch(false);
  };

  const burgerSpan = open ? "burger__toggle__open" : "burger__toggle";

  const classToggleMenu = open
    ? "menu__nav-open menu__nav-hide openNav"
    : "menu__nav-open menu__nav-hide";

  return (
    <div className="toggle">
      {closeSearch && Object.keys(wordResult).length > 0 ? (
        <Word {...wordResult} handleWord={handleWord} />
      ) : (
        ""
      )}
      <div className="burger__nav">
        <h2>N'skills</h2>
        <div className="search__word">
          <SearchIcon className="nav__search__icon" />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search a word..."
              className="nav__search"
              type="text"
              value={search}
              onChange={(e) => searchWord(e)}
            />
          </form>
        </div>
        <div onClick={toggleMenu} className={burgerSpan}>
          <span></span>
        </div>
      </div>

      <nav className={classToggleMenu}>
        <ul className="burger__language">
          <li onClick={() => i18n.changeLanguage("en")}>Eng</li>
          <li onClick={() => i18n.changeLanguage("fr")}>Fr</li>
        </ul>
        <div className="menu__lien">
          <NavLink onClick={closeNav} exact to="/">
            {t("Home")}
          </NavLink>
          <NavLink onClick={closeNav} to="/lessons">
            {t("Lessons")}
          </NavLink>

          <NavLink onClick={closeNav} to="/exercices">
            Exercices
          </NavLink>

          <NavLink onClick={closeNav} to="/stories">
            {t("Stories")}
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
