import axios from "axios";
import { LOAD_QUESTION_FORUM, saveDataforum } from "../actions/forum";

const forum = (store) => (next) => (action) => {
  switch (action.type) {
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

    default:
      next(action);
  }
};

export default forum;
