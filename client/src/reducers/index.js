import { combineReducers } from "redux";

import exercices from "./exercices";

const combinedReducer = combineReducers({
  exercices,
});

export default combinedReducer;
