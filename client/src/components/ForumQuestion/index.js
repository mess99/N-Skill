import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";

import "./forumquestion.css";
const ForumQuestion = () => {
  const history = useHistory();
  const location = useLocation();
  const question = location.state.props;
  console.log(question);
  //TODO: changer le format de la date et le updated aussi
  //   const date = moment.unix(question.createdAt).format("Do MMMM YYYY, h:mma");

  return (
    <div className="forumquestion">
      <div>
        <h2 className="forumquestion__title">{question.title}</h2>
        <time className="forumquestion__date">{question.createdAt}</time>
      </div>
      <div className="forumquestion__description">{question.description}</div>
      <div className="forumquestion__edit">
        <span>Edit</span>
        <span>Edited {question.updatedAt}</span>
      </div>
      <div className="answering">
        <p className="yourAnswer">Your Answer</p>
        <textarea
          className="answering__input"
          id="story"
          name="story"
          rows="15"
          placeholder="It was a dark and stormy night..."
        ></textarea>
        <button className="yourAnswer__button">Post your answer</button>
      </div>
    </div>
  );
};

export default ForumQuestion;
