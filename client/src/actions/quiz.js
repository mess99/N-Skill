export const LOAD_QUIZ = "LOAD_QUIZ";
export const QUIZ_BY_LEVEL = "QUIZ_BY_LEVEL";

export const loadQuiz = () => ({
  type: LOAD_QUIZ,
});

export const quizByLevel = (payload) => ({
  type: QUIZ_BY_LEVEL,
  payload,
});

// QUESTIONS
export const LOAD_QUESTION = "LOAD_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export const loadQuestion = (quizId) => ({
  type: LOAD_QUESTION,
  quizId,
});

export const saveQuestion = (payload) => ({
  type: SAVE_QUESTION,
  payload,
});

// RESPONSES
export const LOAD_RESPONSE = "LOAD_RESPONSE";
export const SAVE_RESPONSE = "SAVE_RESPONSE";

export const loadResponse = (question) => ({
  type: LOAD_RESPONSE,
  question,
});

export const saveResponse = (payload) => ({
  type: SAVE_RESPONSE,
  payload,
});
