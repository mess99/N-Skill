import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const P = styled.p`
color: ${({ theme }) => theme.text};
}`;
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
        <P>{theme}</P>
      </Link>
    </li>
  );
};

export default Theme;
