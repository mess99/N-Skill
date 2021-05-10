import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./exercices.css";
import { filterQuizByLevel, filterQuizByTheme } from "../../utils";
import Theme from "./Theme";
import styled from "styled-components";
import { useDarkMode } from "../../styles/useDarkMode";

const P = styled.p`
color: ${({ theme }) => theme.text};
}`;

const Exercices = ({ loadAllQuiz, getQuiz, image }) => {
  useEffect(loadAllQuiz, []);

  const LevelQuiz = filterQuizByLevel(getQuiz);
  const ThemeQuiz = filterQuizByTheme(getQuiz);

  return (
    <div className="exercices">
      <h2 className="exercices__title">Exercices</h2>
      <p className="exercices__subtitle">
        Tu trouveras plein d'exercices classé par niveaux, thème...
      </p>
      <div className="exercices__level">
        <h3>Niveau</h3>
        <div className="exercices__level__box level-box">
          <ul className="exercices__level__lists ">
            {LevelQuiz.map((quiz) => (
              <li key={quiz.id} className="exercices__level__list">
                <Link
                  to={{
                    pathname: "/exercices/" + quiz.level,
                    state: {
                      props: quiz.id,
                    },
                  }}
                >
                  <img
                    className="exercices__level__image"
                    src={quiz.image}
                    alt="quiz"
                  />{" "}
                  <P>{quiz.level}</P>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="exercices__banniere">
        <img src={image} alt="bridge" />
      </div>

      <div className="exercices__level">
        <h3>Theme</h3>
        <div className="exercices__level__box">
          {/* <NavigateNextIcon className="exercices__level__box__arrow" /> */}

          <ul className="exercices__level__lists lists__theme">
            {ThemeQuiz.map((quiz) => (
              <Theme key={quiz.id} {...quiz} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exercices;
