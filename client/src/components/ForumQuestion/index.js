import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./forumquestion.css";
import Answer from "../../containers/ForumQuestion/Answer";
const ForumQuestion = ({
  fetchUserr,
  getUser,
  getAuthor,
  fetchAnswer,
  getAnswers,
  handleChange,
  getAnswering,
  answerSending,
  emptyAnswering,
}) => {
  const location = useLocation();
  const question = location.state.props;

  useEffect(() => {
    fetchUserr(question.UserId);
    fetchAnswer(question.id);
  }, []);

  const sendAnswer = () => {
    answerSending(getUser?.id, question?.id, getAnswering);
    emptyAnswering();
  };

  // created at
  const date = new Date(question.createdAt);
  const month = date.toLocaleString("default", { month: "long" });

  // updated at
  const dateeupdate = new Date(question.updatedAt);
  const monthupdate = dateeupdate.toLocaleString("default", { month: "long" });

  return (
    <div className="forumquestion">
      <div>
        <h2 className="forumquestion__title">{question.title}</h2>
        <time className="forumquestion__date">
          <span>{date.getUTCDate()}</span>
          <span>{month}</span>
          <span>{date.getFullYear()}</span>
        </time>
      </div>
      <div className="forumquestion__description">{question.description}</div>
      <div className="forumquestion__edit">
        <span>Edit</span>
        <div className="forumquestion__author">
          Author: {getAuthor?.username}
        </div>
        <div className="time">
          <span>Edited:</span>
          <span>{dateeupdate.getUTCDate()}</span>
          <span>{monthupdate}</span>
          <span>{dateeupdate.getFullYear()}</span>
        </div>
      </div>
      {/* rajouter pagination pour les commentaires aussi .. */}
      <div className="answers">
        {getAnswers?.map((answer, index) => (
          <Answer key={answer.id} {...answer} index={index} />
        ))}
      </div>

      <div className="answering">
        <p className="yourAnswer">Your Answer</p>
        {getUser.isLogged ? (
          <>
            <textarea
              className="answering__input"
              id="answer"
              name="answer"
              rows="15"
              value={getAnswering}
              placeholder="Answer..."
              onChange={(e) => handleChange(e.target.value)}
            ></textarea>
            <button onClick={sendAnswer} className="yourAnswer__button">
              Post your answer
            </button>
          </>
        ) : (
          <p>Log in to answer</p>
        )}
      </div>
    </div>
  );
};

export default ForumQuestion;
