import React from "react";
import banniereDesktop from "../../assets/images/banniere.png";
import banniere from "../../assets/images/phone.png";
import "./header.css";

import { useTranslation } from "react-i18next";
import Login from "../../containers/Login";

const Header = ({ isLogged, username }) => {
  const { t, i18n } = useTranslation();

  const welcome = () => {
    if (i18n.language === "fr") {
      const intro =
        "Bienvenue sur N'Skills ! Le site d'anglais 100 % gratuit !! Petite astuce pour mieux apprendre l'anglais, passe le site en anglais (en haut à droite de ton écran :) )";
      return intro;
    } else if (i18n.language === "en") {
      const intro = "Welcome to N'Skills!  free site to learn English!";
      return intro;
    }
  };

  return (
    <header className="header">
      <img className="banniere-phone" src={banniere} alt="banniere" />
      <img className="banniere-desktop" src={banniereDesktop} alt="banniere" />
      <p className="header__welcome">{welcome()} </p>
      {!isLogged && (
        <div className="header__login">
          <Login login={t("Login")} />
        </div>
      )}

      {isLogged && <p className="header__logged">HI {username} </p>}
    </header>
  );
};

export default Header;
