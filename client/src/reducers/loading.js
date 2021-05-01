import {
  LOGIN_WITH_COOKIE,
  SAVE_LOGIN_WITH_COOKIE,
  TRY_TO_LOGIN,
} from "../actions/user";

const initialState = {
  loading: true,
};

const loading = (state = initialState, action = {}) => {
  switch (action.type) {
    case TRY_TO_LOGIN:
      return {
        ...state,
      };
    case LOGIN_WITH_COOKIE:
      return {
        ...state,
      };
    case SAVE_LOGIN_WITH_COOKIE:
      return {
        ...state,
        loading: false,
      };
    case "LOADING_FALSE_AT_INIT":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default loading;
