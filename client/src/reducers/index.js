import { combineReducers } from "redux";

import exercices from "./exercices";
import forum from "./forum";
import user from "./user";
import word from "./word";
import story from "./story";
import loading from "./loading";
import avatars from "./avatars";

const combinedReducer = combineReducers({
  exercices,
  forum,
  user,
  word,
  story,
  loading,
  avatars,
});

export default combinedReducer;
