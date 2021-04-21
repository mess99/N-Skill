import { connect } from "react-redux";

import Modalquiz from "../../../components/Exercices/ModalQuiz/ModalQuiz";
import { loadQuestion, loadResponse } from "../../../actions/quiz";

const mapStateToProps = (state, ownProps) => {
  //   console.log(state);
  return {
    getQuestion: state.exercices.questions,
    getPropositions: state.exercices.propositions,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loadQuestions: (quizId) => {
    dispatch(loadQuestion(quizId));
  },
  loadResponses: (question) => {
    dispatch(loadResponse(question));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modalquiz);
