import axios from "axios";
import {
  FETCH_ANSWERS,
  LOAD_QUESTION_FORUM,
  saveAnswers,
  saveDataforum,
  answerSent,
  SEND_QUESTION,
  saveQuestionPost,
  INCREASE_POSTS,
  DECREASE_POSTS,
  saveIncrease,
  saveDecrease,
  savePost,
  LOAD_POST_BY_ID,
  savePostId,
} from "../actions/forum";

const forum = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_QUESTION: {
      axios({
        method: "post",
        url: `/api/forum`,
        data: {
          title: action.title,
          description: action.description,
          UserId: action.UserId,
        },
      })
        .then((res) => {
          store.dispatch(saveQuestionPost(res.data.post));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_QUESTION_FORUM: {
      const page = action.page - 1;
      axios({
        method: "get",
        url: `/api/forum?page=${page}`,
      })
        .then((res) => {
          store.dispatch(saveDataforum(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case LOAD_POST_BY_ID: {
      const postId = action.id;
      axios({
        method: "get",
        url: `/api/forum/${postId}`,
      })
        .then((res) => {
          store.dispatch(savePostId(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_ANSWERS: {
      const postId = action.id;
      axios({
        method: "get",
        url: `/api/forum/${postId}/answers`,
      })
        .then((res) => {
          store.dispatch(saveAnswers(res.data.answers));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case "SENDIND_ANSWER": {
      axios({
        method: "post",
        url: `/api/forum/${action.post}/answer`,
        data: {
          content: action.content,
          UserId: action.author,
        },
      })
        .then((res) => {
          store.dispatch(answerSent(res.data.answer));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case INCREASE_POSTS: {
      axios({
        method: "patch",
        url: `/api/forum/answer/vote/${action.id}`,
      })
        .then((res) => {
          store.dispatch(saveIncrease(res.data.answer, action.index));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case DECREASE_POSTS: {
      axios({
        method: "patch",
        url: `/api/forum/answer/unvote/${action.id}`,
      })
        .then((res) => {
          store.dispatch(saveDecrease(res.data.answer, action.index));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case "UPDATE_DESCRIPTION": {
      axios({
        method: "patch",
        url: `/api/forum/${action.index}`,
        data: {
          description: action.description,
        },
      })
        .then((res) => {
          // console.log(res);
          store.dispatch(savePost(action.index, res.data.post));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default forum;
