import { connect } from "react-redux";

import Story from "../../components/Stories/Story";
import { loadCurrentStory } from "../../actions/story";

const mapStateToProps = (state, ownProps) => {
  return {
    getTheStory: state.story.currentStory,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadTheStory: (id) => {
    dispatch(loadCurrentStory(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Story);
