import React from "react";

const Answer = ({ content, vote, UserId }) => {
  return (
    <div className="answer">
      <div className="answer__vote">{vote} votes</div>
      <div className="answer__content">
        <p>author {UserId} </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Answer;
