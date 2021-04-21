import { QUIZ_BY_LEVEL, SAVE_QUESTION, SAVE_RESPONSE } from "../actions/quiz";

const initialState = {
  quiz: [],
  questions: [],
  propositions: [],
};

const exercices = (state = initialState, action = {}) => {
  switch (action.type) {
    case QUIZ_BY_LEVEL:
      return {
        ...state,
        quiz: action.payload,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        questions: action.payload,
      };
    case SAVE_RESPONSE:
      return {
        ...state,
        propositions: action.payload,
      };
    default:
      return { ...state };
  }
};

export default exercices;
