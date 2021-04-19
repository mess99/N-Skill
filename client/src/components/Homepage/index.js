import React from "react";
import "./homepage.css";
import books from "../../assets/images/books.png";
import exercices from "../../assets/images/exercices.png";

import stories from "../../assets/images/stories.png";
import tips from "../../assets/images/tips.png";
import forum from "../../assets/images/forum.png";

import { useTranslation } from "react-i18next";
import News from "./News";
import RelativeSticky from "./Sticky";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <div className="homepage__left">
        <h1 className="homepage__title">{t("Welcome to N'Skills!")}</h1>
        <div className="homepage__description">
          <p>
            N'skills is a website that will help you learn English in fun way.{" "}
          </p>
          <p>
            Includes lessons, quizzes, grammar explanations, and discussion
            forums for students.
          </p>
        </div>
        <div className="homepage__content">
          <img src={books} alt="books" />
          <div className="homepage__subcontent">
            <h2 className="homepage__subtitle">{t("Lessons")}</h2>
            <p>
              Includes lessons, quizzes, grammar explanations, and discussion
              forums for students.
            </p>
          </div>
        </div>
        <div className="homepage__content">
          <img src={exercices} alt="exercices" />
          <div className="homepage__subcontent">
            <h2 className="homepage__subtitle">Exercices</h2>
            <p>
              Includes lessons, quizzes, grammar explanations, and discussion
              forums for students.
            </p>
          </div>
        </div>
        <div className="homepage__content">
          <img src={stories} alt="stories" />
          <div className="homepage__subcontent">
            <h2 className="homepage__subtitle">Stories</h2>
            <p>
              Includes lessons, quizzes, grammar explanations, and discussion
              forums for students.
            </p>
          </div>
        </div>
        <div className="homepage__content">
          <img src={tips} alt="tips" />
          <div className="homepage__subcontent">
            <h2 className="homepage__subtitle">{t("Tips")}</h2>
            <p>
              Includes lessons, quizzes, grammar explanations, and discussion
              forums for students.
            </p>
          </div>
        </div>
        <div className="homepage__content">
          <img src={forum} alt="forum" />
          <div className="homepage__subcontent">
            <h2 className="homepage__subtitle">Forum</h2>
            <p>
              Includes lessons, quizzes, grammar explanations, and discussion
              forums for students.
            </p>
          </div>
        </div>
      </div>
      <RelativeSticky topThresold={150}>
        <News />
      </RelativeSticky>
    </div>
  );
};
export default Homepage;
