import { combineReducers } from "redux";

import exercices from "./exercices";
import forum from "./forum";

const combinedReducer = combineReducers({
  exercices,
  forum,
});

export default combinedReducer;
