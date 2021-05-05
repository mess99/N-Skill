import {
  ANSWERS_SENT,
  SAVE_ANSWERS,
  SAVE_DATA_FORUM,
  SAVE_DECREASE,
  SAVE_INCREASE,
  SAVE_QUESTION_POST,
} from "../actions/forum";
import { QUESTION_AUTHOR } from "../actions/user";

const initialState = {};

const forum = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_FORUM:
      return {
        ...state,
        ...action.payload,
      };
    case QUESTION_AUTHOR:
      return {
        ...state,
        authorPost: action.data,
      };
    case SAVE_QUESTION_POST:
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    case SAVE_ANSWERS:
      return {
        ...state,
        answers: action.data,
      };
    case "ANSWERING":
      return {
        ...state,
        answering: action.value,
      };
    case ANSWERS_SENT:
      return {
        ...state,
        answers: [...state.answers, action.data],
      };
    case "EMPTY_ANSWERING":
      return {
        ...state,
        answering: "",
      };
    case SAVE_INCREASE:
      state.answers.splice(action.index, 1, action.data);

      return {
        ...state,
        ...state.answers,
      };
    case SAVE_DECREASE:
      state.answers.splice(action.index, 1, action.data);

      return {
        ...state,
        answers: [...state.answers],
      };

    default:
      return { ...state };
  }
};

export default forum;
