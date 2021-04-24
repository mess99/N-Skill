export const LOAD_QUESTION_FORUM = "LOAD_QUESTION_FORUM";
export const SAVE_DATA_FORUM = "SAVE_DATA_FORUM";
export const FETCH_ANSWERS = "FETCH_ANSWERS";
export const SAVE_ANSWERS = "SAVE_ANSWERS";
export const ANSWERS_SENT = "ANSWERS_SENT";
export const SEND_QUESTION = "SEND_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export const sendQuestion = (title, description, UserId) => {
  return {
    type: SEND_QUESTION,
    title,
    description,
    UserId,
  };
};

export const saveQuestion = (data) => {
  return {
    type: SAVE_QUESTION,
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
