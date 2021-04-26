import { connect } from "react-redux";

import Answer from "../../components/ForumQuestion/Answer";
import { increasePosts, decreasePosts } from "../../actions/forum";

const mapStateToProps = (state, ownProps) => {
  return {
    // getAuthor: state.forum.authorPost,
  };
};
const mapDispatchToProps = (dispatch) => ({
  increasePost: (id, index) => {
    dispatch(increasePosts(id, index));
  },
  decreasePost: (id, index) => {
    dispatch(decreasePosts(id, index));
  },
});

export default connect(null, mapDispatchToProps)(Answer);
