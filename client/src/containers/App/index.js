import { connect } from "react-redux";

import App from "../../components/App/App";

import { loginWithCookie } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoading: state.loading.loading,
    news: state.news.latestNews,
  };
};
const mapDispatchToProps = (dispatch) => ({
  keepLogin: () => {
    dispatch(loginWithCookie());
  },
  loadNew: () => {
    dispatch({ type: "LOAD_NEWS" });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
