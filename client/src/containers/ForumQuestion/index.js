import { connect } from "react-redux";

import ForumQuestion from "../../components/ForumQuestion";
import { fetchUser } from "../../actions/user";
import { fetchAnswers } from "../../actions/forum";

const mapStateToProps = (state, ownProps) => {
  return {
    getUser: state.user,
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
  updateDescription: (index, description) => {
    dispatch({
      type: "UPDATE_DESCRIPTION",
      index,
      description,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForumQuestion);
