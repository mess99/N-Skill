import { connect } from "react-redux";

import App from "../../components/App/App";

import { loginWithCookie } from "../../actions/user";
import { loadConversation } from "../../actions/lessons";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoading: state.loading.loading,
    news: state.news.latestNews,
    dialogues: state.lessons.dialogues,
  };
};
const mapDispatchToProps = (dispatch) => ({
  keepLogin: () => {
    dispatch(loginWithCookie());
  },
  loadNew: () => {
    dispatch({ type: "LOAD_NEWS" });
  },
  loadConv: () => {
    dispatch(loadConversation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
