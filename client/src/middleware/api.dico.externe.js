import axios from "axios";

const dico = (store) => (next) => (action) => {
  switch (action.type) {
    case "SEARCH__WORD__API": {
      axios({
        method: "get",
        url: `https://api.dictionaryapi.dev/api/v2/entries/en_US/${action.word}`,
      })
        .then((res) => {
          console.log(res);
          store.dispatch({
            type: "WORD_FOUND",
            data: res.data[0],
          });
        })
        .catch((error) => {
          store.dispatch({ type: "WORD_NOT_FOUND" });
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default dico;
