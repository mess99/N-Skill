import axios from "axios";

const news = (store) => (next) => (action) => {
  switch (action.type) {
    // changer latest news FIXME:  car apres on affiche toutes les news
    case "LOAD_NEWS": {
      axios({
        method: "get",
        url: `/api/news`,
      })
        .then((res) => {
          store.dispatch({
            type: "SAVE_NEWS",
            data: res.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default news;
