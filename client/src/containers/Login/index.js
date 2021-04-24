import { connect } from "react-redux";
import formikForm from "../../components/Login";
import { tryToLogin } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    // getPostsInfo: state.forum,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password) => {
    dispatch(tryToLogin(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(formikForm);
