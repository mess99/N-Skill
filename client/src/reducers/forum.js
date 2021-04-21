import { SAVE_DATA_FORUM } from "../actions/forum";

const initialState = {};

const forum = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_FORUM:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default forum;
