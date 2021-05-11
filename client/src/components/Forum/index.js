import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./forum.css";
import BasicPagination from "./Paginations";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    maxWidth: "400px",
    // height: "50%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
}));

const Input = styled.input`
background: ${({ theme }) => theme.inputForm};
color: ${({ theme }) => theme.text};
}`;

const Textarea = styled.textarea`
background: ${({ theme }) => theme.inputForm};
color: ${({ theme }) => theme.text};
}`;

const Div = styled.div`
  background: ${({ theme }) => theme.backgroundNav};
  }`;
const Forum = ({
  loadQuestionsForum,
  getPostsInfo,
  askQuestion,
  currentUser,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [titleState, setTitleState] = useState("");
  const [contentState, setContentState] = useState("");

  let history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // FIXME: a chaque refresh dans une autre page on revient a la page 1 car (1)
  useEffect(() => {
    loadQuestionsForum(1);
  }, []);
  const handleChange = (e, value) => {
    loadQuestionsForum(value);
    window.scrollTo(0, 0);
  };

  const handleClickAsk = (e) => {
    askQuestion(titleState, contentState, currentUser.id);
    setTitleState("");
    setContentState("");
    setOpen(false);
    history.push(`/forum/${getPostsInfo.totalItems + 1}`);
  };

  return (
    <div className="forum">
      <div className="forum__header">
        <p>All Questions</p>
        <div className="forum__settings">
          {/* <SearchIcon className="search__post" />
          <input className="forum__filter" type="text" /> */}
          {currentUser.isLogged && (
            <button
              className="forum__add"
              type="button"
              onClick={handleOpen}
            ></button>
          )}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Div className={classes.paper}>
                <h2 className="question__header">Your Question</h2>
                <div className="question__content">
                  <h3 className="question__content__title">Title</h3>
                  <Input
                    autoFocus
                    value={titleState}
                    onChange={(e) => {
                      setTitleState(e.target.value);
                    }}
                    type="text"
                  />
                </div>
                <div className="question__content">
                  <h3 className="question__content__title">Descrition</h3>
                  <Textarea
                    value={contentState}
                    onChange={(e) => {
                      setContentState(e.target.value);
                    }}
                    id="answer"
                    name="answer"
                    rows="15"
                  />
                </div>
                <button
                  onClick={(e) => {
                    handleClickAsk(e);
                  }}
                  className="question__button"
                >
                  Send
                </button>
              </Div>
            </Fade>
          </Modal>
        </div>
      </div>

      {getPostsInfo.posts?.map((post) => {
        const truncTitle = post?.title.substr(0, 60) + "\u2026";
        return (
          <div key={post?.id} className="forum__questions">
            {/* FIXME: props nexiste pas si je tape dans l url .. forum/3 */}
            <Link
              to={{
                pathname: "/forum/" + post?.id,
                state: {
                  props: post,
                },
              }}
            >
              <h2 className="forum__questions__title">{truncTitle}</h2>
              <p className="postedBy">Posted by {post?.User?.username} </p>
            </Link>
            <div className="forum__plus">
              <span className="forum__vote">
                <small>{post?.answers}</small>
                {post?.answers === 0 ? (
                  <small>answer</small>
                ) : post?.answers === 1 ? (
                  <small>answer</small>
                ) : (
                  <small>answers</small>
                )}
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
