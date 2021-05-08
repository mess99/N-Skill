import { combineReducers } from "redux";

import exercices from "./exercices";
import forum from "./forum";
import user from "./user";
import word from "./word";
import story from "./story";
import loading from "./loading";
import avatars from "./avatars";
import news from "./news";
import lessons from "./lessons";

const combinedReducer = combineReducers({
  exercices,
  forum,
  user,
  word,
  story,
  loading,
  avatars,
  news,
  lessons,
});

export default combinedReducer;
