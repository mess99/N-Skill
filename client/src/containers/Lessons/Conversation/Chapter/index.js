import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Chapter from "../../../../components/Lessons/Conversation/Chapter";
import { getConvBySlug } from "../../../../utils/slugUrl";

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    dialogues: getConvBySlug(state, slug),
  };
};

export default withRouter(connect(mapStateToProps)(Chapter));
