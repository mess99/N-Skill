import { combineReducers } from "redux";

import exercices from "./exercices";
import forum from "./forum";
import user from "./user";

const combinedReducer = combineReducers({
  exercices,
  forum,
  user,
});

export default combinedReducer;
