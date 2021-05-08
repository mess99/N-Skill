import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import apiQuiz from "../middleware/api.quiz";
import apiForum from "../middleware/api.forum";
import apiUser from "../middleware/api.user";
import apiStory from "../middleware/api.story";
import apiExternDico from "../middleware/api.dico.externe";
import apiNews from "../middleware/api.news";
import apiLessons from "../middleware/api.lessons";

import reducer from "../reducers";

const Store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      apiQuiz,
      apiForum,
      apiUser,
      apiStory,
      apiExternDico,
      apiNews,
      apiLessons
    )
  )
);

export default Store;
