import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import apiQuiz from "../middleware/api.quiz";
import apiForum from "../middleware/api.forum";
import apiUser from "../middleware/api.user";

import reducer from "../reducers";

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(apiQuiz, apiForum, apiUser))
);

export default Store;
