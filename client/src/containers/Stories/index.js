import { connect } from "react-redux";

import Stories from "../../components/Stories";
import { loadStory } from "../../actions/story";

const mapStateToProps = (state, ownProps) => {
  return {
    getStories: state.story,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadStories: () => {
    dispatch(loadStory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
