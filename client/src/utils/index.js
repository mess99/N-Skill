export const filterQuizByLevel = (quizzes) => {
  return quizzes.filter((quiz) => quiz.level !== "");
};

export const filterQuizByTheme = (quizzes) => {
  return quizzes.filter((quiz) => quiz.theme !== "");
};

export const filterStoryByTheme = (stories, theme) => {
  return stories?.filter((storie) => storie.theme === theme);
};

// FIXME: filtrerodredesc posts

// delete the first avatar

export const avatarFilter = (avatars) => {
  return avatars?.filter((avatar) => avatar.id !== 1);
};
