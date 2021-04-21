export const filterQuizByLevel = (quizzes) => {
  return quizzes.filter((quiz) => quiz.level !== "");
};

export const filterQuizByTheme = (quizzes) => {
  return quizzes.filter((quiz) => quiz.theme !== "");
};
