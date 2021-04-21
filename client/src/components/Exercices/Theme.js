import React from "react";
import { Link } from "react-router-dom";

const Theme = ({ id, theme, image }) => {
  return (
    <li className="exercices__level__list">
      <Link
        to={{
          pathname: "/exercices/" + theme,
          state: {
            props: id,
          },
        }}
      >
        <img className="exercices__level__image" src={image} alt="theme" />
        <p>{theme}</p>
      </Link>
    </li>
  );
};

export default Theme;
