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
    case "EMPTY_ERROR":
      return {
        ...state,
        errors: "",
      };
    case "UPDATE_AVATAR_IN_USER_STATE":
      return {
        ...state,

        AvatarId: action.id,
        Avatar: {
          ...state.Avatar,
          id: action.id,
        },
      };
    case "SAVE_AVATAR_WITH_ID":
      return {
        ...state,

        Avatar: {
          ...state.Avatar,
          image: action.image,
        },
      };

    default:
      return { ...state };
  }
};

export default user;
