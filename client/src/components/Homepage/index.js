import React from "react";
import "./homepage.css";
import { useTranslation } from "react-i18next";
import News from "./News";
import RelativeSticky from "./Sticky";
import { Link } from "react-router-dom";

import svgBooks from "../../assets/images/svg/books.svg";
import svgLesson from "../../assets/images/svg/lesson.svg";
import svgHomework from "../../assets/images/svg/homework.svg";
import svgForum from "../../assets/images/svg/forum.svg";

import styled from "styled-components";

const Div = styled.div`
color: ${({ theme }) => theme.text};
}`;

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
          <Div className="homepage__content">
            <img src={svgLesson} alt="books" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">{t("Lessons")}</h2>
              <p>
                Includes lessons, grammar explanations, expressions, tips ...
              </p>
            </div>
          </Div>
        </Link>
        <Link to="/exercices">
          <Div className="homepage__content">
            <img src={svgHomework} alt="exercices" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">Exercices</h2>
              <p>Test your English language skills with a quiz.</p>
            </div>
          </Div>
        </Link>
        <Link to="/stories">
          <Div className="homepage__content">
            <img src={svgBooks} alt="stories" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">{t("Stories")}</h2>
              <p>{t("menuStory")}</p>
            </div>
          </Div>
        </Link>

        <Link to="/forum">
          <Div className="homepage__content">
            <img src={svgForum} alt="forum" />
            <div className="homepage__subcontent">
              <h2 className="homepage__subtitle">Forum</h2>
              <p>Discussion forums, ask for help</p>
            </div>
          </Div>
        </Link>
      </div>
      <RelativeSticky topThresold={150}>
        <News news={news} />
      </RelativeSticky>
    </div>
  );
};
export default Homepage;
