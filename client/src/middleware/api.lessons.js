import axios from "axios";
import { LOAD_CONVERSATION, saveConv } from "../actions/lessons";

const lessons = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_CONVERSATION: {
      axios
        .get("/api/conversation")
        .then((res) => {
          store.dispatch(saveConv(res.data));
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

export default lessons;
