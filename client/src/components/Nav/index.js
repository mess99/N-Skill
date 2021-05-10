import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import Register from "../../containers/Register";
import Login from "../../containers/Login";
import { useHistory } from "react-router-dom";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Word from "./Word";

import styled from "styled-components";
const NavStyle = styled.nav`
  background: ${({ theme }) => theme.backgroundNav};
  transition: all 0.50s linear;
  }`;

const Ul = styled.ul`
background: ${({ theme }) => theme.backgroundNav};
transition: all 0.50s linear;

}`;

const Input = styled.input`
  background: ${({ theme }) => theme.backgroudAnswers};
  color: ${({ theme }) => theme.text};

  }`;

const Nav = ({ user, handleLogout, searchWordApi, wordResult }) => {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState(false);
  const [search, setSearch] = useState("");
  const [closeSearch, setCloseSearch] = useState(true);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWordApi(search);
  };

  const handleLogoutb = () => {
    handleLogout();
    setSettings(false);
    history.push("/");
  };

  const closeSettings = () => {
    setSettings(false);
  };

  const searchWord = (e) => {
    setSearch(e.target.value);
    setCloseSearch(true);
  };
  const handleWord = () => {
    setSearch("");
    setCloseSearch(false);
  };

  return (
    <NavStyle className="nav">
      {closeSearch && Object.keys(wordResult).length > 0 ? (
        <Word {...wordResult} handleWord={handleWord} />
      ) : (
        ""
      )}

      <div className="nav__lists">
        <div className="nav__lists__logo">
          <span className="nav__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </span>
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
            <Input
              placeholder="Search a word..."
              className="nav__search"
              type="text"
              value={search}
              onChange={(e) => searchWord(e)}
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
          <div className="nav__lists__logged">
            <div>
              {user.AvatarId === 1 ? (
                <AccountCircleIcon
                  onClick={() => setSettings(!settings)}
                  className="user-settings"
                  fontSize="large"
                />
              ) : (
                <img
                  onClick={() => setSettings(!settings)}
                  className="user-settings"
                  fontSize="large"
                  src={user.Avatar.image}
                  alt="avatar"
                />
              )}
            </div>
            {settings && (
              <Ul className="nav__lists__user">
                <Link to="/account">
                  <li onClick={closeSettings}>{t("Account")}</li>
                </Link>
                <li onClick={handleLogoutb}>{t("Log out")}</li>
              </Ul>
            )}
          </div>
        )}

        <Ul className="nav__lists__language">
          <li onClick={() => i18n.changeLanguage("en")}>Eng</li>
          <li onClick={() => i18n.changeLanguage("fr")}>Fr</li>
        </Ul>
      </div>
    </NavStyle>
  );
};

export default Nav;
