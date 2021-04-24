import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";

import "./forumquestion.css";
import Answer from "./Answer";
const ForumQuestion = ({
  fetchUserr,
  getAuthor,
  fetchAnswer,
  getAnswers,
  handleChange,
  getAnswering,
  answerSending,
  emptyAnswering,
}) => {
  const history = useHistory();
  const location = useLocation();
  const question = location.state.props;

  useEffect(() => {
    fetchUserr(question.UserId);
    fetchAnswer(question.id);
  }, []);

  const sendAnswer = () => {
    answerSending(getAuthor.id, question.id, getAnswering);
    emptyAnswering();
  };

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
        <div className="forumquestion__author">Author: {getAuthor?.email}</div>
        <span>Edited {question.updatedAt}</span>
      </div>
      {/* rajouter pagination pour les commentaires aussi .. */}
      <div className="answers">
        {getAnswers?.map((answer) => (
          <Answer key={answer.id} {...answer} />
        ))}
      </div>

      <div className="answering">
        <p className="yourAnswer">Your Answer</p>
        <textarea
          className="answering__input"
          id="answer"
          name="answer"
          rows="15"
          value={getAnswering}
          placeholder="It was a dark and stormy night..."
          onChange={(e) => handleChange(e.target.value)}
        ></textarea>
        <button onClick={sendAnswer} className="yourAnswer__button">
          Post your answer
        </button>
      </div>
    </div>
  );
};

export default ForumQuestion;
