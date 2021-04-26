import axios from "axios";
import {
  LOAD_CURRENT_STORY,
  LOAD_STORY,
  saveStories,
  saveCurrentStory,
} from "../actions/story";

const story = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_STORY: {
      axios({
        method: "get",
        url: `/api/stories`,
      })
        .then((res) => {
          store.dispatch(saveStories(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_CURRENT_STORY: {
      axios({
        method: "get",
        url: `/api/stories/${action.id}`,
      })
        .then((res) => {
          store.dispatch(saveCurrentStory(res.data));
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

export default story;
