import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./forum.css";
import BasicPagination from "./Paginations";
const Forum = ({ loadQuestionsForum, getPostsInfo }) => {
  // FIXME: a chaque refresh dans une autre page on revient a la page 1 car (1)
  useEffect(() => {
    loadQuestionsForum(1);
  }, []);
  const handleChange = (e, value) => {
    loadQuestionsForum(value);
    window.scrollTo(0, 0);
  };

  return (
    <div className="forum">
      <div className="forum__header">
        <p>All Questions</p>
        <div className="forum__settings">
          <p>filter</p>
          <button></button>
        </div>
      </div>

      {getPostsInfo.posts?.map((post) => {
        const truncTitle = post.title.substr(0, 60) + "\u2026";
        return (
          <div key={post.id} className="forum__questions">
            <Link
              to={{
                pathname: "/forum/" + post.id,
                state: {
                  props: post,
                },
              }}
            >
              <h2>{truncTitle}</h2>
            </Link>
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
        );
      })}
      <BasicPagination
        handleChange={handleChange}
        page={getPostsInfo.totalPages}
      />
    </div>
  );
};

export default Forum;
