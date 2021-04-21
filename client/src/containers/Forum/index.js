import { connect } from "react-redux";

import Forum from "../../components/Forum";
import { loadQuestionForum } from "../../actions/forum";

const mapStateToProps = (state, ownProps) => {
  return {
    getPostsInfo: state.forum,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadQuestionsForum: (page) => {
    dispatch(loadQuestionForum(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
