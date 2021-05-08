import { connect } from "react-redux";
import { loadConversation } from "../../../actions/lessons";

import Conversation from "../../../components/Lessons/Conversation";

const mapStateToProps = (state, ownProps) => {
  return {
    // dialogues: state.lessons.dialogues,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   loadConv: () => {
//     dispatch(loadConversation());
//   },
// });

export default connect(mapStateToProps)(Conversation);
