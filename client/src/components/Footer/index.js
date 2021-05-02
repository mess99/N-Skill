import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        {/* <div className="footer__left">
          <div className="footer__left__left">
            <h4>N'Skills</h4>
            <ul className="footer__left__left">
              <li>
                <Link to="/lesson/test">About us</Link>
              </li>
              <li>
                <Link to="/lesson/test">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="footer__left__rigth">
            <h4>Test</h4>
            <Link to="/lesson/test">begginner</Link>
          </div>
        </div> */}
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
