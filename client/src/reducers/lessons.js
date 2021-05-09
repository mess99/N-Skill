import { SAVE_CONVE } from "../actions/lessons";

const initialState = {};

const lessons = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONVE:
      return {
        ...state,
        dialogues: action.data,
      };

    default:
      return { ...state };
  }
};

export default lessons;
