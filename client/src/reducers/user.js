import { LOGIN, LOGOUT, SAVE_LOGIN_WITH_COOKIE } from "../actions/user";

const initialState = {
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.user,
        isLogged: true,
      };
    case SAVE_LOGIN_WITH_COOKIE:
      return {
        ...state,
        ...action.user,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    case "ERROR_EMAIL_PATCH":
      return {
        ...state,
        errors: action.error,
      };

    default:
      return { ...state };
  }
};

export default user;
