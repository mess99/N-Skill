import React, { useState } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styled from "styled-components";
import "./answer.css";

const Div = styled.div`
  background: ${({ theme }) => theme.backgroudAnswers};
  }`;

const DivAuthor = styled.div`
background: ${({ theme }) => theme.backgroudAnswersAuthor};
}`;
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

  console.log(content);
  return (
    <Div className="answer">
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
          {date.getFullYear()}, {date.getHours()}:{date.getMinutes()}
        </p>

        <p className="answer__content_content">{content}</p>
      </div>
    </Div>
  );
};

export default Answer;
