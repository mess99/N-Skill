import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import svgBooks from "../../assets/images/svg/books.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__left"></div>

        <div className="footer__rigth">
          {/* <img src={svgBooks} alt="books" /> */}
        </div>
      </div>
      <div className="footer__about">
        <ul>
          <li>© 2021 N'skills</li>
          <li>Privacy</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
