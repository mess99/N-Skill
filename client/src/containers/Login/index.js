import { connect } from "react-redux";
import formikForm from "../../components/Login";
import { tryToLogin } from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password) => {
    dispatch(tryToLogin(email, password));
  },
  removeError: () => {
    dispatch({
      type: "EMPTY_ERROR",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(formikForm);
