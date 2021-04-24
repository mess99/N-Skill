import { connect } from "react-redux";

import Forum from "../../components/Forum";
import { loadQuestionForum, sendQuestion } from "../../actions/forum";

const mapStateToProps = (state, ownProps) => {
  return {
    getPostsInfo: state.forum,
    currentUser: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadQuestionsForum: (page) => {
    dispatch(loadQuestionForum(page));
  },
  askQuestion: (title, description, UserId) => {
    dispatch(sendQuestion(title, description, UserId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
