import React from "react";
import { Link } from "react-router-dom";
import "./lessons.css";

import bgConv from "../../assets/images/lessons/conversation.png";
import bgVoca from "../../assets/images/lessons/vocabulary.png";
import bgGramm from "../../assets/images/lessons/grammar.png";

const Lessons = () => {
  return (
    <div className="lessons">
      <div className="lessons__lessons">
        <Link to="/lessons/conversations">
          <img src={bgConv} alt="dialogue" />
        </Link>

        <Link to="/vocabulary">
          <img src={bgVoca} alt="vocabulary" />
        </Link>
        <Link to="/grammar">
          <img src={bgGramm} alt="grammar" />
        </Link>
        <Link to="/test">
          <img src={bgConv} alt="test" />
        </Link>
      </div>
    </div>
  );
};

export default Lessons;
