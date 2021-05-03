import React from "react";
import "./homepage.css";
import books from "../../assets/images/books.png";
import exercices from "../../assets/images/exercices.png";

import stories from "../../assets/images/stories.png";
import forum from "../../assets/images/forum.png";

import { useTranslation } from "react-i18next";
import News from "./News";
import RelativeSticky from "./Sticky";
import { Link } from "react-router-dom";

import svgBooks from "../../assets/images/svg/books.svg";
import svgLesson from "../../assets/images/svg/lesson.svg";
import svgHomework from "../../assets/images/svg/homework.svg";
import svgForum from "../../assets/images/svg/forum.svg";

const Homepage = ({ news }) => {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <div className="homepage__left">
        <h1 className="homepage__title">{t("Welcome to N'Skills!")}</h1>
        <div className="homepage__description">
          <p>{t("N'skills is a website that..")}</p>
          <p>{t("Includes lessons, quizzes..")}</p>
        </div>
        <Link to="/lessons">
          <div className="homepage__content">
            <img src={svgLesson} alt="books" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">{t("Lessons")}</h2>
              <p>
                Includes lessons, quizzes, grammar explanations, and discussion
                forums for students.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/exercices">
          <div className="homepage__content">
            <img src={svgHomework} alt="exercices" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">Exercices</h2>
              <p>
                Includes lessons, quizzes, grammar explanations, and discussion
                forums for students.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/stories">
          <div className="homepage__content">
            <img src={svgBooks} alt="stories" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">{t("Stories")}</h2>
              <p>{t("menuStory")}</p>
            </div>
          </div>
        </Link>

        <Link to="/forum">
          <div className="homepage__content">
            <img src={svgForum} alt="forum" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">Forum</h2>
              <p>
                Includes lessons, quizzes, grammar explanations, and discussion
                forums for students.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <RelativeSticky topThresold={150}>
        <News news={news} />
      </RelativeSticky>
    </div>
  );
};
export default Homepage;
