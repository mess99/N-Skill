import axios from "axios";
import {
  LOAD_QUESTION,
  LOAD_QUIZ,
  LOAD_RESPONSE,
  quizByLevel,
  saveQuestion,
  saveResponse,
} from "../actions/quiz";

const quiz = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_QUIZ: {
      axios({
        method: "get",
        url: `/api/quiz`,
      })
        .then((response) => {
          store.dispatch(quizByLevel(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_QUESTION: {
      const quizId = action.quizId;
      axios({
        method: "get",
        url: `/api/question/quiz/${quizId}`,
      })
        .then((response) => {
          store.dispatch(saveQuestion(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_RESPONSE: {
      const num = action.question;
      if (typeof action.question === "undefined") {
        return <p>wait</p>;
      }
      axios({
        method: "get",
        url: `/api/question/${num}/responses`,
      })
        .then((response) => {
          store.dispatch(saveResponse(response.data));
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

export default quiz;
