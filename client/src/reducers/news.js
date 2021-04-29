const initialState = {
  latestNews: [],
};

const news = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SAVE_NEWS":
      return {
        ...state,
        latestNews: [...state.latestNews, ...action.data],
      };

    default:
      return { ...state };
  }
};

export default news;
