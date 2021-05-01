import { connect } from "react-redux";

import NavBar from "../../components/Nav/NavBar";
import { tryToLogout } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    wordResult: state.word,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(tryToLogout());
  },
  searchWordApi: (word) => {
    dispatch({
      type: "SEARCH__WORD__API",
      word,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
