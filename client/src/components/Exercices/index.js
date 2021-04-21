import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./exercices.css";

import { filterQuizByLevel, filterQuizByTheme } from "../../utils";

import banniere from "../../assets/images/exercices/exercice-banniere-full.jpg";
import Theme from "./Theme";

const Exercices = ({ loadAllQuiz, getQuiz }) => {
  useEffect(loadAllQuiz, []);
  const [open, setOpen] = React.useState(false);

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
        <div className="exercices__level__box">
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
                  <p>{quiz.level}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="exercices__banniere">
        <img src={banniere} alt="bridge" />
      </div>

      <div className="exercices__level">
        <h3>Theme</h3>
        <div className="exercices__level__box">
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
