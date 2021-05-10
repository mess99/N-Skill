import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./forumquestion.css";
import Answer from "../../containers/ForumQuestion/Answer";

import styled from "styled-components";

const DivAuthor = styled.div`
background: ${({ theme }) => theme.backgroudAnswersAuthor};
}`;

const Textarea = styled.textarea`
background: ${({ theme }) => theme.backgroudAnswers};
color: ${({ theme }) => theme.text};
}`;

const ForumQuestion = ({
  loadThePost,
  currentPost,
  fetchUserr,
  getUser,
  fetchAnswer,
  getAnswers,
  handleChange,
  getAnswering,
  answerSending,
  emptyAnswering,
  updateDescription,
}) => {
  const location = useLocation();
  const question = location?.state?.props;
  const [edit, setEdit] = useState(false);
  // FIXME: edit post a refaire
  const [editing, setEditing] = useState(currentPost?.description);

  useEffect(() => {
    loadThePost();
  }, []);

  useEffect(() => {
    // fetchUserr(currentPost?.UserId);
    if (typeof currentPost?.id !== "undefined") {
      fetchAnswer(currentPost?.id);
    }
  }, [currentPost?.id]);

  const emptyInput =
    typeof getAnswering === "undefined" || getAnswering === "" ? true : false;

  const sendAnswer = () => {
    answerSending(getUser?.id, currentPost?.id, getAnswering);
    emptyAnswering();
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const saveEditing = () => {
    updateDescription(currentPost?.id, editing);
    setEdit(false);
  };

  // created at
  const date = new Date(currentPost?.createdAt);
  const month = date.toLocaleString("default", { month: "long" });

  // updated at
  const dateeupdate = new Date(currentPost?.updatedAt);
  const monthupdate = dateeupdate.toLocaleString("default", { month: "long" });

  if (typeof currentPost === "undefined") {
    return <p>loading</p>;
  }
  return (
    <div className="forumquestion">
      <div>
        <h2 className="forumquestion__title">{currentPost?.title}</h2>
        <time className="forumquestion__date">
          <span>{date.getUTCDate()}</span>
          <span>{month}</span>
          <span>{date.getFullYear()}</span>
        </time>
      </div>
      {edit ? (
        <input
          autoFocus
          className="forumquestion__description-input"
          type="text"
          onChange={(e) => setEditing(e.target.value)}
          name="description"
          id="description"
          value={editing}
        />
      ) : (
        <div className="forumquestion__description">
          {currentPost?.description}
        </div>
      )}
      <div className="forumquestion__edit">
        {!edit && currentPost?.UserId === getUser.id ? (
          <span onClick={handleEdit} className="forumquestion__edit__edit">
            Edit
          </span>
        ) : (
          ""
        )}

        {edit ? (
          <div>
            <span onClick={handleEdit} className="forumquestion__edit__cancel">
              Cancel
            </span>
            <span onClick={saveEditing} className="forumquestion__edit__save">
              Save
            </span>
          </div>
        ) : (
          ""
        )}
        <DivAuthor className="forumquestion__author">
          Author: {currentPost?.User.username}
        </DivAuthor>
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
            <Textarea
              className="answering__input"
              id="answer"
              name="answer"
              rows="15"
              value={getAnswering}
              placeholder="Answer..."
              onChange={(e) => handleChange(e.target.value)}
            ></Textarea>
            <button
              onClick={sendAnswer}
              disabled={emptyInput}
              className="yourAnswer__button"
            >
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
