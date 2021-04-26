const initialState = {};

const word = (state = initialState, action = {}) => {
  switch (action.type) {
    case "WORD_FOUND":
      return {
        ...state,
        ...action.data,
        error: "",
      };
    case "WORD_NOT_FOUND":
      return {
        ...state,
        error: "Word not found",
      };

    default:
      return { ...state };
  }
};

export default word;
