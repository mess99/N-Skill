import React, { useState } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./answer.css";
const Answer = ({
  index,
  id,
  content,
  vote,
  User,
  increasePost,
  decreasePost,
  createdAt,
}) => {
  const [clicked, setClicked] = useState(false);

  // isloegged true for vite TODO:
  const handleVotePlus = () => {
    if (!clicked) {
      setClicked(true);
      increasePost(id, index);
    }
  };

  const handleVoteMoins = () => {
    if (!clicked) {
      setClicked(true);
      decreasePost(id, index);
    }
  };

  const date = new Date(createdAt);

  return (
    <div className="answer">
      <div className="answer__vote">
        <ArrowDropUpIcon
          className="answer__vote__plus"
          onClick={handleVotePlus}
        />
        <span>{vote}</span>
        <ArrowDropDownIcon
          className="answer__vote__moins"
          onClick={handleVoteMoins}
        />
      </div>
      <div className="answer__content">
        <p>
          {User?.username} {date.getUTCDate()}/{date.getMonth()} /
          {date.getFullYear()}
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Answer;
