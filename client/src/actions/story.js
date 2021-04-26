export const LOAD_STORY = "LOAD_STORY";

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const SAVE_STORIES = "SAVE_STORIES";

export const saveStories = (data) => ({
  type: SAVE_STORIES,
  data,
});

export const LOAD_CURRENT_STORY = "LOAD_CURRENT_STORY";

export const loadCurrentStory = (id) => ({
  type: LOAD_CURRENT_STORY,
  id,
});

export const SAVE_CURRENT_STORY = "SAVE_CURRENT_STORY";

export const saveCurrentStory = (data) => ({
  type: SAVE_CURRENT_STORY,
  data,
});
