export const REGISTER = "REGISTER";
export const register = (values) => ({
  type: REGISTER,
  data: {
    email: values.email,
    password: values.password,
  },
});

export const TRY_TO_LOGIN = "TRY_TO_LOGIN";
export const tryToLogin = (email, password) => ({
  type: TRY_TO_LOGIN,
  email,
  password,
});

export const LOGIN = "LOGIN";
export const login = (user) => ({
  type: LOGIN,
  user,
});

export const LOGIN_WITH_COOKIE = "LOGIN_WITH_COOKIE";
export const loginWithCookie = () => ({
  type: LOGIN_WITH_COOKIE,
});

export const SAVE_LOGIN_WITH_COOKIE = "SAVE_LOGIN_WITH_COOKIE";
export const saveLoginWithCookie = (user) => ({
  type: SAVE_LOGIN_WITH_COOKIE,
  user,
});

export const TRY_TO_LOGOUT = "TRY_TO_LOGOUT";
export const tryToLogout = () => ({
  type: TRY_TO_LOGOUT,
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT,
});

export const FETCH_USER = "FETCH_USER";
export const fetchUser = (id) => ({
  type: FETCH_USER,
  id,
});

export const QUESTION_AUTHOR = "QUESTION_AUTHOR";
export const questionAuthor = (data) => ({
  type: QUESTION_AUTHOR,
  data,
});
