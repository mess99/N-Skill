import slugify from "slugify";

export const slugifyTitle = (title) => {
  const modifiedTitle = title
    .replace("_", "-")
    .replace(" ", "-")
    .replace(" - ", "-");
  return slugify(modifiedTitle, { lower: true });
};

export const getConvUrlByTitle = (title) => {
  return `/conversations/${slugifyTitle(title)}`;
};

export const getConvBySlug = (state, slug) => {
  return state.lessons?.dialogues?.find(
    (dialogue) => slug === slugifyTitle(dialogue.title)
  );
};

export const getPostBySlug = (state, slug) => {
  return state.forum?.postId?.find((post) => slug === post.id);
};
