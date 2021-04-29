const initialState = {};

const avatars = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SAVE_AVATARS":
      return {
        ...state,
        avatars: action.data,
      };
    case "SAVE_AVATAR_WITH_ID":
      return {
        ...state,
        ...action.data,
      };

    default:
      return { ...state };
  }
};

export default avatars;
