import axios from "axios";
import {
  tryToLogin,
  login,
  questionAuthor,
  REGISTER,
  TRY_TO_LOGIN,
  LOGIN_WITH_COOKIE,
  saveLoginWithCookie,
  TRY_TO_LOGOUT,
  logout,
  FETCH_USER,
} from "../actions/user";

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      axios({
        method: "post",
        url: `/api/user/register`,
        withCredentials: true,
        data: {
          email: action.data.email,
          password: action.data.password,
        },
      })
        .then((res) => {
          store.dispatch(tryToLogin(res.data.email, action.data.password));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case TRY_TO_LOGIN: {
      axios({
        method: "post",
        url: `/api/user/login`,
        withCredentials: true,
        data: {
          email: action.email,
          password: action.password,
        },
      })
        .then((res) => {
          store.dispatch(login(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOGIN_WITH_COOKIE: {
      axios({
        method: "get",
        url: "/api/jwtid",
      })
        .then((res) => {
          store.dispatch(saveLoginWithCookie(res.data));
        })
        .catch((error) => {});
      next(action);
      break;
    }
    case TRY_TO_LOGOUT: {
      axios({
        method: "get",
        url: "/api/user/logout",
      })
        .then((res) => {
          console.log(res);
          store.dispatch(logout());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_USER: {
      axios({
        method: "get",
        url: `/api/user/${action.id}`,
      })
        .then((res) => {
          store.dispatch(questionAuthor(res.data.user));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default user;
