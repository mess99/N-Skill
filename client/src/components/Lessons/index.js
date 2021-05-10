import React from "react";
import { Link } from "react-router-dom";
import "./lessons.css";

import bgConv from "../../assets/images/lessons/conversation.png";
import bgVoca from "../../assets/images/lessons/vocabulary.png";
import bgGramm from "../../assets/images/lessons/grammar.png";
import bgTest from "../../assets/images/lessons/test.png";

//TODO: enlever style gris
const styleWIP = {
  filter: "grayscale(1)",
};
const Lessons = () => {
  return (
    <div className="lessons">
      <div className="lessons__lessons">
        <Link to="/lessons/conversations">
          <img src={bgConv} alt="dialogue" />
        </Link>

        <Link to="/vocabulary">
          <img style={styleWIP} src={bgVoca} alt="vocabulary" />
        </Link>
        <Link to="/grammar">
          <img style={styleWIP} src={bgGramm} alt="grammar" />
        </Link>
        <Link to="/test">
          <img style={styleWIP} src={bgTest} alt="test" />
        </Link>
      </div>
    </div>
  );
};

export default Lessons;
