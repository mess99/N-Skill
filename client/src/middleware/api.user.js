import axios from "axios";
import swal from "sweetalert";
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
  CHANGE_UR_EMAIL,
  CHANGE_UR_USERNAME,
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
          username: action.data.username,
          password: action.data.password,
        },
      })
        .then((res) => {
          if (res.data.error) {
            store.dispatch({
              type: "ERROR_EMAIL_REGISTER",
              error: res.data.error,
            });
          } else {
            store.dispatch(tryToLogin(res.data.email, action.data.password));
          }
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
          if (res.data.error) {
            store.dispatch({
              type: "ERROR_EMAIL_LOGIN",
              error: res.data.error,
            });
          } else {
            store.dispatch(login(res.data));
          }
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
        .catch((error) => {
          store.dispatch({ type: "LOADING_FALSE_AT_INIT" });
        });
      next(action);
      break;
    }
    case TRY_TO_LOGOUT: {
      axios({
        method: "get",
        url: "/api/user/logout",
      })
        .then((res) => {
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
    case CHANGE_UR_EMAIL: {
      axios({
        method: "patch",
        url: `/api/user/${action.id}/email`,
        data: {
          email: action.email,
        },
      })
        .then((res) => {})
        .catch((error) => {
          store.dispatch({
            type: "ERROR_EMAIL_PATCH",
            error: "Email d??j?? utilis??",
          });
          console.log(error);
        });
      next(action);
      break;
    }
    case CHANGE_UR_USERNAME: {
      axios({
        method: "patch",
        url: `/api/user/${action.id}/username`,
        data: {
          username: action.username,
        },
      })
        .then((res) => {})
        .catch((error) => {
          store.dispatch({
            type: "ERROR_EMAIL_PATCH",
            error: "Username d??j?? utilis??",
          });
          console.log(error);
        });
      next(action);
      break;
    }
    case "LOAD_AVATAR": {
      axios({
        method: "get",
        url: "/api/avatars",
      })
        .then((res) => {
          store.dispatch({ type: "SAVE_AVATARS", data: res.data });
        })
        .catch((err) => console.log(err));
      next(action);
      break;
    }
    case "CHOOSE_AVATAR": {
      axios({
        method: "patch",
        url: `/api/user/${action.id}/avatar`,
        data: {
          avatarId: action.avatarId,
        },
      })
        .then((res) => {
          store.dispatch({
            type: "UPDATE_AVATAR_IN_USER_STATE",
            id: action.avatarId,
          });
        })
        .catch((err) => console.log(err));
      next(action);
      break;
    }
    case "LOAD_AVATAR_WITH_ID": {
      axios({
        method: "get",
        url: `/api/avatars/${action.id}`,
      })
        .then((res) => {
          store.dispatch({
            type: "SAVE_AVATAR_WITH_ID",
            image: res.data.image,
          });
        })
        .catch((err) => console.log(err));
      next(action);
      break;
    }
    case "SEND_MAIL": {
      axios({
        method: "post",
        url: `/api/send-email`,
        data: {
          email: action.email,
          subject: action.subject,
          contain: action.contain,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      next(action);
      break;
    }
    case "LOAD_MY_POSTS": {
      axios({
        method: "get",
        url: `/api/forum/myPosts/${store.getState().user.id}`,
      })
        .then((res) => {
          store.dispatch({ type: "SHOW_MY_POSTS", data: res.data });
        })
        .catch((err) => console.log(err));
      next(action);
      break;
    }
    case "RESET_PASSWORD_CHECK_MAIL": {
      axios({
        method: "post",
        url: `api/user/forgotpassword`, //FIXME:  rajouter / devant api et retester
        withCredentials: true,
        data: {
          email: action.data,
        },
      })
        .then((response) => {
          if (!response.data.error) {
            swal("Email sent", " ", "success").then(() => {
              window.location = "/";
            });
          } else {
            const errorOfRegister = response.data.error;
            swal("Oups...", errorOfRegister, "error");
          }
        })
        .catch((error) => {});
      next(action);
      break;
    }

    case "RESET_PASSWORD_SEND_NEW_ONE": {
      axios({
        method: "post",

        url: `api/user/newpassword`, //FIXME:  rajouter / devant api et retester
        withCredentials: true,
        data: {
          password: action.data.password,
          email: action.data.email,
          token: action.data.token,
        },
      })
        .then((response) => {
          if (response.data.status === "ok") {
            swal(response.data.message, " ", "success").then(() => {
              window.location = "/";
            });
          } else {
            swal(
              "Oops...",
              "Something Went Wrong, Please Try Again Later",
              "error"
            ).then(() => {
              window.location = "/";
            });
          }
        })
        .catch((error) => {});
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default user;
