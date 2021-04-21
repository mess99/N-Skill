import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import apiQuiz from "../middleware/api.quiz";
import apiForum from "../middleware/api.forum";

import reducer from "../reducers";

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiQuiz, apiForum))
);

export default Store;
