import { connect } from "react-redux";

import ForumQuestion from "../../components/ForumQuestion";
import { fetchUser } from "../../actions/user";
import { fetchAnswers } from "../../actions/forum";

const mapStateToProps = (state, ownProps) => {
  return {
    getAuthor: state.forum.authorPost,
    getAnswers: state.forum.answers,
    getAnswering: state.forum.answering,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchUserr: (id) => {
    dispatch(fetchUser(id));
  },
  fetchAnswer: (id) => {
    dispatch(fetchAnswers(id));
  },
  handleChange: (value) => {
    dispatch({
      type: "ANSWERING",
      value,
    });
  },
  answerSending: (author, post, content) => {
    dispatch({
      type: "SENDIND_ANSWER",
      author,
      post,
      content,
    });
  },
  emptyAnswering: () => {
    dispatch({
      type: "EMPTY_ANSWERING",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForumQuestion);