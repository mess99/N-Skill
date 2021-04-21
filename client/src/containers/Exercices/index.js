import { connect } from "react-redux";

import Exercices from "../../components/Exercices";
import { loadQuiz } from "../../actions/quiz";

const mapStateToProps = (state, ownProps) => {
  return {
    getQuiz: state.exercices.quiz,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadAllQuiz: () => {
    dispatch(loadQuiz());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercices);
