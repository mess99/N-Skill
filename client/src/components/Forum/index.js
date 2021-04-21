import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./forum.css";
import BasicPagination from "./Paginations";
const Forum = ({ loadQuestionsForum, getPostsInfo }) => {
  useEffect(() => {
    loadQuestionsForum(1);
  }, []);

  const handleChange = (e, value) => {
    loadQuestionsForum(value);
  };

  return (
    <div className="forum">
      <div className="forum__header">
        <p>All Questions</p>
        <div className="forum__settings">
          <p>filter</p>
          <button>Ask Question</button>
        </div>
      </div>

      {getPostsInfo.posts?.map((post) => (
        <div key={post.id} className="forum__questions">
          <h2>{post.title}</h2>
          <div className="forum__plus">
            <span className="forum__vote">
              <small>{post.vote}</small>
              <small>votes</small>
            </span>
            <span className="forum__answers">
              <small>0</small>
              <small>answers</small>
            </span>
          </div>
        </div>
      ))}
      <BasicPagination
        handleChange={handleChange}
        page={getPostsInfo.totalPages}
      />
    </div>
  );
};

export default Forum;
