export const LOAD_QUESTION_FORUM = "LOAD_QUESTION_FORUM";
export const SAVE_DATA_FORUM = "SAVE_DATA_FORUM";

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
