export const LOAD_QUESTION_FORUM = "LOAD_QUESTION_FORUM";
export const SAVE_DATA_FORUM = "SAVE_DATA_FORUM";
export const FETCH_ANSWERS = "FETCH_ANSWERS";
export const SAVE_ANSWERS = "SAVE_ANSWERS";
export const ANSWERS_SENT = "ANSWERS_SENT";
export const SEND_QUESTION = "SEND_QUESTION";
export const SAVE_QUESTION_POST = "SAVE_QUESTION_POST";
export const INCREASE_POSTS = "INCREASE_POSTS";
export const DECREASE_POSTS = "DECREASE_POSTS";
export const SAVE_INCREASE = "SAVE_INCREASE";
export const SAVE_DECREASE = "SAVE_DECREASE";

export const sendQuestion = (title, description, UserId) => {
  return {
    type: SEND_QUESTION,
    title,
    description,
    UserId,
  };
};

export const saveQuestionPost = (data) => {
  return {
    type: SAVE_QUESTION_POST,
    data,
  };
};

export const loadQuestionForum = (page) => {
  return {
    type: LOAD_QUESTION_FORUM,
    page,
  };
};

export const saveDataforum = (payload) => {
  return {
    type: SAVE_DATA_FORUM,
    payload,
  };
};

export const fetchAnswers = (id) => {
  return {
    type: FETCH_ANSWERS,
    id,
  };
};

export const saveAnswers = (data) => {
  return {
    type: SAVE_ANSWERS,
    data,
  };
};

export const answerSent = (data) => {
  return {
    type: ANSWERS_SENT,
    data,
  };
};

export const increasePosts = (id, index) => {
  return {
    type: INCREASE_POSTS,
    id,
    index,
  };
};

export const decreasePosts = (id, index) => {
  return {
    type: DECREASE_POSTS,
    id,
    index,
  };
};

export const saveIncrease = (data, index) => {
  return {
    type: SAVE_INCREASE,
    data,
    index,
  };
};

export const saveDecrease = (data, index) => {
  return {
    type: SAVE_DECREASE,
    data,
    index,
  };
};
