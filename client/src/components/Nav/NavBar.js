import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import home from "../../assets/images/homepage.png";
import booksphone from "../../assets/images/booksphone.png";
import exercices from "../../assets/images/exercices.png";
import stories from "../../assets/images/stories.png";
import forum from "../../assets/images/forum.png";
import userIcon from "../../assets/images/user.png";
import Word from "./Word";

import { useHistory } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Login from "../../containers/Login";
import Register from "../../containers/Register";

const NavBar = ({ searchWordApi, wordResult, user, handleLogout }) => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [closeSearch, setCloseSearch] = useState(true);
  const [hideSearch, setHideSearch] = useState(false);
  const [settings, setSettings] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWordApi(search);
    setHideSearch(true);
  };

  const searchWord = (e) => {
    setSearch(e.target.value);
    setCloseSearch(true);
  };

  const handleWord = () => {
    setSearch("");
    setCloseSearch(false);
    setHideSearch(false);
  };

  const closeSettings = () => {
    setSettings(false);
  };

  const handleLogoutb = () => {
    handleLogout();
    setSettings(false);
    history.push("/");
  };

  return (
    <>
      <nav className="navbar">
        <NavLink onClick={closeSettings} exact to="/">
          <img src={home} alt="home" />
          <p>Home</p>
        </NavLink>
        <NavLink onClick={closeSettings} exact to="/lessons">
          <img src={booksphone} alt="books" />
          <p>Lesson</p>
        </NavLink>
        <NavLink onClick={closeSettings} to="/exercices">
          <img src={exercices} alt="exercices" />
          <p>exercices</p>
        </NavLink>
        <NavLink onClick={closeSettings} to="/stories">
          <img src={stories} alt="stories" />
          <p>stories</p>
        </NavLink>
        <NavLink onClick={closeSettings} to="/forum">
          <img src={forum} alt="forum" />
          <p>forum</p>
        </NavLink>
      </nav>

      <nav className="navtop">
        {closeSearch && Object.keys(wordResult).length > 0 ? (
          <Word {...wordResult} handleWord={handleWord} />
        ) : (
          ""
        )}
        <div className="navtop__search">
          <form onSubmit={handleSubmit}>
            {hideSearch && (
              <span onClick={handleWord} className="closeinput">
                x
              </span>
            )}

            <input
              placeholder="&#128270; Search a word..."
              className=""
              type="text"
              value={search}
              onChange={(e) => searchWord(e)}
            />
          </form>
        </div>
        {!user?.isLogged && (
          <div className="navtop__account">
            <img
              onClick={() => setSettings(!settings)}
              src={userIcon}
              alt="user"
            />
          </div>
        )}
        {settings && !user?.isLogged && (
          <ul className="nav__lists__user navtopsettings">
            <li>
              <Login onClick={closeSettings} login={t("Login")} />
            </li>
            <li>
              <Register onClick={closeSettings} register={t("Register")} />
            </li>
          </ul>
        )}
        {/* LOGGED */}
        {user?.isLogged && (
          <div className="navtop__account">
            <img
              onClick={() => setSettings(!settings)}
              className="user-settings"
              fontSize="large"
              src={user.Avatar.image}
              alt="avatar"
            />
          </div>
        )}
        {settings && user?.isLogged && (
          <ul className="nav__lists__user navtopsettings">
            <Link to="account">
              <li onClick={closeSettings}>{t("Account")}</li>
            </Link>
            <li onClick={handleLogoutb}>{t("Log out")}</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;
