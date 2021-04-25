const initialState = {};

const word = (state = initialState, action = {}) => {
  switch (action.type) {
    case "WORD_FOUND":
      return {
        ...state,
        ...action.data,
      };

    default:
      return { ...state };
  }
};

export default word;
