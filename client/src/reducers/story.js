import { SAVE_CURRENT_STORY, SAVE_STORIES } from "../actions/story";

const initialState = {};

const story = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STORIES:
      return {
        ...state,
        stories: action.data,
      };
    case SAVE_CURRENT_STORY:
      return {
        ...state,
        currentStory: action.data,
      };

    default:
      return { ...state };
  }
};

export default story;
