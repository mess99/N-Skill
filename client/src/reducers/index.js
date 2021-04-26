import { combineReducers } from "redux";

import exercices from "./exercices";
import forum from "./forum";
import user from "./user";
import word from "./word";
import story from "./story";
import loading from "./loading";

const combinedReducer = combineReducers({
  exercices,
  forum,
  user,
  word,
  story,
  loading,
});

export default combinedReducer;
